import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";

const StyleInput = styled(InputMask)`
  border-radius: 5px;
  border: 1px ridge #2d2d2d;
  font-size: 14px;
  padding: 5px 20px 5px 10px;
`;

const Input = ({ mask, ...props }) => <StyleInput mask={mask} {...props} />;

Input.propTypes = {
  mask: PropTypes.string,
};

export default Input;
