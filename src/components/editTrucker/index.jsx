import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TruckerService from "../../services";
import FormTrucker from "../formTrucker";

const EditTrucker = () => {
  const initialTruckerState = {
    id: null,
    name: "",
    phone: "",
    bithdate: "",
    cnh: "",
    cnhCategory: "",
    cpf: "",
  };
  const [trucker, setTrucker] = useState(initialTruckerState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrucker({ ...trucker, [name]: value });
  };
  const { id } = useParams();
  const history = useHistory();
  const saveTrucker = (e) => {
    e.preventDefault();
    const data = {
      name: trucker.name,
      phone: trucker.phone,
      bithdate: trucker.bithdate,
      cnh: trucker.cnh,
      cnhCategory: trucker.cnhCategory,
      cpf: trucker.cpf,
    };

    TruckerService.update(id, data)
      .then((response) => {
        setTrucker({
          id: response.data.id,
          name: response.data.name,
          phone: response.data.phone,
          birthdate: response.data.birthdate,
          cnh: response.data.cnh,
          cnhCategory: response.data.cnhCategory,
          cpf: response.data.cpf,
        });
        setSubmitted(true);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const deleteTrucker = (e) => {
    e.preventDefault();

    TruckerService.remove(id)
      .then((response) => {
        setSubmitted(true);
        history.push("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    TruckerService.get(id)
      .then((response) => {
        setTrucker({
          id: response.data.id,
          name: response.data.name,
          phone: response.data.phone,
          birthdate: response.data.birthdate,
          cnh: response.data.cnh,
          cnhCategory: response.data.cnhCategory,
          cpf: response.data.cpf,
        });
        console.error(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id]);
  return (
    <div>
      {submitted && (
        <div>
          <h4>Caminhoneiro atualizado</h4>
        </div>
      )}
      <FormTrucker
        onSubmit={saveTrucker}
        onDelete={deleteTrucker}
        onInputChange={handleInputChange}
        values={trucker}
      />
    </div>
  );
};

export default EditTrucker;
