import React from "react";
import PropTypes from "prop-types";
import PrimaryButton from "../primaryButton";

const FormButton = ({ children, ...props }) => (
  <PrimaryButton {...props}>{children}</PrimaryButton>
);

FormButton.propTypes = {
  children: PropTypes.node,
};

export default FormButton;
