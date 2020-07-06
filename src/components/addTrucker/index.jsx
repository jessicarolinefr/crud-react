import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TruckerService from "../../services";
import FormTrucker from "../formTrucker";

const AddTrucker = () => {
  const [trucker, setTrucker] = useState();
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrucker({ ...trucker, [name]: value });
  };

  const saveTrucker = (e) => {
    e.preventDefault();

    TruckerService.create(trucker)
      .then((response) => {
        setTrucker(response.data);
        history.push("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <FormTrucker
      onSubmit={saveTrucker}
      onInputChange={handleInputChange}
      values={trucker}
    />
  );
};

export default AddTrucker;
