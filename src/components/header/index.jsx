import React from "react";
import styled from "styled-components";
import Image from "../image";

const BaseHeader = styled.header`
  align-items: center;
  background-color: #face48;
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
      src="https://www.truckpad.com.br/uploads/2020/01/5df17dc1-truckpad-app-icon.png"
      alt=""
    />
    Desafio Truckpad
  </BaseHeader>
);

export default Header;
