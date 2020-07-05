import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TruckerService from "../../services";
import FormTrucker from "../formTrucker";

const AddTrucker = () => {
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
  const history = useHistory();
  const saveTrucker = (e) => {
    e.preventDefault();
    const data = {
      name: trucker.name,
      phone: trucker.phone,
      birthdate: trucker.birthdate,
      cnh: trucker.cnh,
      cnhCategory: trucker.cnhCategory,
      cpf: trucker.cpf,
    };

    TruckerService.create(data)
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
        history.push("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      {submitted && (
        <div>
          <h4>Caminhoneiro Cadastrado!</h4>
        </div>
      )}
      <FormTrucker
        onSubmit={saveTrucker}
        onInputChange={handleInputChange}
        values={trucker}
      />
    </div>
  );
};

export default AddTrucker;
