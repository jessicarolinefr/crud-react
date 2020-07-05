import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "../input";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const FormField = ({ children, ...props }) => (
  <Div>
    <label>{children}</label>
    <Input {...props} />
  </Div>
);

FormField.propTypes = {
  children: PropTypes.node,
};

export default FormField;
