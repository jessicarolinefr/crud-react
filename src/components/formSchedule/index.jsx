import React from "react";
import { Link } from "react-router-dom";
import Form from "../form";
import FormField from "../formField";
import FormButton from "../formButton";
import PropTypes from "prop-types";
import BackButton from "../backButton";
import Div from "../div";
import Select from "../select";

const FormSchedule = ({
  onSubmit,
  onInputChange,
  onInactive,
  onActive,
  values = {},
  dates,
  times,
}) => {
  return (
    <>
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
          value={values.email || ""}
          name="email"
          onChange={onInputChange}
        >
          E-mail:
        </FormField>
        <Select name="date" value={values.date || ""} onChange={onInputChange}>
          <option>Que dia gostaria de realizar sua consulta?</option>
          {dates.map((date) => {
            const formattedDate = date.toFormat("dd/MM/yyyy");
            return (
              <option key={date} value={formattedDate}>
                {formattedDate}
              </option>
            );
          })}
        </Select>
        {values.date && (
          <Select
            name="time"
            value={values.time || ""}
            onChange={onInputChange}
          >
            <option>Em que horário?</option>
            {times.map((time) => (
              <option value={time} key={time}>
                {time}h
              </option>
            ))}
          </Select>
        )}

        <div>Status: {values.status === 0 ? "Cancelado" : "Ativo"}</div>
        <Div>
          <FormButton type="submit">Salvar</FormButton>
          {values.status !== 0 && onInactive && (
            <FormButton
              style={{ backgroundColor: "#FF5733" }}
              onClick={onInactive}
            >
              Cancelar
            </FormButton>
          )}
          {values.status === 0 && onActive && (
            <FormButton
              style={{ backgroundColor: "#2980B9" }}
              onClick={onActive}
            >
              Ativar
            </FormButton>
          )}
        </Div>
      </Form>
      <Div>
        <Link to={"/"} component={BackButton}>
          Voltar
        </Link>
      </Div>
    </>
  );
};

FormSchedule.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onInactive: PropTypes.func,
  onActive: PropTypes.func,
  onHandleDateChange: PropTypes.func,
  onHandleTimeChange: PropTypes.func,
  values: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }),
  dates: PropTypes.array,
  times: PropTypes.array,
};
export default FormSchedule;
