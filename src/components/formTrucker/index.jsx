import React from "react";
import { Link } from "react-router-dom";
import Form from "../form";
import FormField from "../formField";
import FormButton from "../formButton";
import PropTypes from "prop-types";
import BackButton from "../backButton";
import Div from "../div";

const FormTrucker = ({ onSubmit, onInputChange, onDelete, values = {} }) => {
  return (
    <div>
      <Form onSubmit={onSubmit} method="POST">
        <FormField
          value={values.name || ""}
          name="name"
          onChange={onInputChange}
        >
          Nome:
        </FormField>
        <FormField
          value={values.phone || ""}
          mask="+55 (99) 99999-9999"
          name="phone"
          onChange={onInputChange}
        >
          Telefone:
        </FormField>
        <FormField
          value={values.birthdate || ""}
          mask="99/99/9999"
          name="birthdate"
          onChange={onInputChange}
        >
          Data de Nascimento:
        </FormField>
        <FormField
          value={values.cnh || ""}
          mask="99999999999"
          name="cnh"
          onChange={onInputChange}
        >
          CNH:
        </FormField>
        <FormField
          value={values.cnhCategory || ""}
          name="cnhCategory"
          onChange={onInputChange}
        >
          Tipo de CNH:
        </FormField>
        <FormField
          value={values.cpf || ""}
          mask="999.999.999/99"
          name="cpf"
          onChange={onInputChange}
        >
          CPF:
        </FormField>
        <Div>
          <FormButton type="submit">Salvar</FormButton>
          {onDelete && (
            <FormButton
              style={{ backgroundColor: "#FF5733" }}
              onClick={onDelete}
            >
              Deletar
            </FormButton>
          )}
        </Div>
      </Form>
      <Div>
        <Link to={"/"} component={BackButton}>
          Voltar
        </Link>
      </Div>
    </div>
  );
};

FormTrucker.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  values: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    birthdate: PropTypes.string,
    cnh: PropTypes.string,
    cnhCategory: PropTypes.string,
    cpf: PropTypes.string,
  }),
};
export default FormTrucker;
