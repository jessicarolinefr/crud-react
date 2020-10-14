import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import BackButton from "../backButton";

const Link = styled(BackButton)`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HomeButton = React.forwardRef((props, ref) => (
  <Link ref={ref} {...props}>
    {props.children}
  </Link>
));

HomeButton.propTypes = {
  children: PropTypes.node,
};

HomeButton.displayName = "HomeButton";

export default HomeButton;
