import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TruckerService from "../../services";
import FormTrucker from "../formTrucker";

const EditTrucker = () => {
  const [trucker, setTrucker] = useState();
  const [submitted, setSubmitted] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrucker({ ...trucker, [name]: value });
  };

  const saveTrucker = (e) => {
    e.preventDefault();

    TruckerService.update(id, trucker)
      .then((response) => {
        setTrucker(response.data);
        setSubmitted(true);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const inactiveTrucker = (e) => {
    e.preventDefault();

    TruckerService.update(id, { ...trucker, status: 0 }).then(() => {
      history.push("/");
    });
  };

  const activeTrucker = (e) => {
    e.preventDefault();

    TruckerService.update(id, { ...trucker, status: 1 }).then(() => {
      history.push("/");
    });
  };

  useEffect(() => {
    TruckerService.get(id)
      .then((response) => {
        setTrucker(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id]);

  return (
    <div>
      {submitted && <h4>Caminhoneiro atualizado</h4>}
      <FormTrucker
        onSubmit={saveTrucker}
        onInactive={inactiveTrucker}
        onActive={activeTrucker}
        onInputChange={handleInputChange}
        values={trucker}
      />
    </div>
  );
};

export default EditTrucker;
