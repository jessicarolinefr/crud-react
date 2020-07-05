import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const BaseIcon = styled.i`
  display: inline-block;
  direction: ltr;
  font-family: "Material Icons";
  font-style: normal;
  font-weight: normal;
  line-height: 1.2;
  letter-spacing: normal;
  margin-right: 0.5rem;
  vertical-align: middle;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
`;

const Icon = ({ children, ...props }) => {
  return <BaseIcon {...props}>{children}</BaseIcon>;
};

Icon.propTypes = {
  children: PropTypes.node,
};

export default Icon;
