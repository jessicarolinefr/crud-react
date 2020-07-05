import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Link = styled.a`
  align-items: center;
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #000000;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  margin-top: 10px;
  padding: 4px 0;
  text-align: center;
  text-decoration: none;
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BackButton = React.forwardRef((props, ref) => (
  <Link ref={ref} {...props}>
    {props.children}
  </Link>
));

BackButton.propTypes = {
  children: PropTypes.node,
};

BackButton.displayName = "BackButton";

export default BackButton;
