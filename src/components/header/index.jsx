import React from "react";
import styled from "styled-components";
import Image from "../image";

const BaseHeader = styled.header`
  align-items: center;
  background-color: #fef8ed;
  color: #2d2d2d;
  display: flex;
  font-family: arial, sans-serif;
  font-size: large;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 1.5px;
  padding: 10px;
  text-align: center;
`;

const Header = () => (
  <BaseHeader>
    <Image
      className="logo"
      src="https://cuidas.com.br/wp-content/themes/cuidas/img/logo.svg"
      alt="Logotipo Cuidas"
    />
  </BaseHeader>
);

export default Header;
