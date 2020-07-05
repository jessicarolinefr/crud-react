import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const BaseIcon = styled.i`
  vertical-align: middle;
  margin-right: 0.5rem;
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
`;

const Icon = ({ children, ...props }) => {
  return <BaseIcon {...props}>{children}</BaseIcon>;
};

Icon.propTypes = {
  children: PropTypes.node,
};

export default Icon;
