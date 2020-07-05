import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "../icon";

const Link = styled.a`
  color: #ffffff;
  padding: 10px 0;
  background-color: #298464;
  border-radius: 58px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  position: fixed;
  bottom: 30px;
  right: 0;
  box-sizing: border-box;
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
    bottom: 30px;
    box-sizing: border-box;
  }
`;

const CreateLink = React.forwardRef((props, ref) => (
  <Link ref={ref} {...props}>
    <Icon>add</Icon>
    {props.children}
  </Link>
));

CreateLink.propTypes = {
  children: PropTypes.node,
};

CreateLink.displayName = "CreateLink";

export default CreateLink;
