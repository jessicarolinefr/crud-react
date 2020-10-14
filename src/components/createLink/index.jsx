import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "../icon";

const Link = styled.a`
  background-color: #298464;
  border-radius: 58px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  right: 0;
  text-decoration: none;
  width: 100%;

  @media (max-width: 768px) {
    bottom: 30px;
    box-sizing: border-box;
    width: 100%;
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
