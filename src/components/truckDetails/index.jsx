import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  padding: 5px;

  @media (max-width: 768px) {
    margin: 0 auto;
    grid-template-columns: auto;
  }
`;

const GridItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 16px;
  padding: 5px;
`;

const TruckDetails = ({ trucker }) => {
  return (
    <GridContainer>
      <GridItem>
        <strong>Nome: </strong>
      </GridItem>
      <GridItem>
        <div> {trucker.name}</div>
      </GridItem>
      <GridItem>
        <strong>Telefone: </strong>
      </GridItem>
      <GridItem>
        <div> {trucker.phone}</div>
      </GridItem>
      <GridItem>
        <strong>Data de nascimento: </strong>
      </GridItem>
      <GridItem>
        <div> {trucker.birthdate}</div>
      </GridItem>
      <GridItem>
        <strong>CNH: </strong>
      </GridItem>
      <GridItem>
        <div> {trucker.cnh}</div>
      </GridItem>
      <GridItem>
        <strong>Categoria da CNH: </strong>
      </GridItem>
      <GridItem>
        <div> {trucker.cnhCategory}</div>
      </GridItem>
      <GridItem>
        <strong>CPF: </strong>
      </GridItem>
      <GridItem>
        <div> {trucker.cpf}</div>
      </GridItem>
    </GridContainer>
  );
};

TruckDetails.propTypes = {
  details: PropTypes.number,
};

export default TruckDetails;
