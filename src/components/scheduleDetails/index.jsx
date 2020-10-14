import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  padding: 5px;
  width: 100%;

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

const ScheduleDetails = ({ schedule }) => {
  return (
    <GridContainer>
      <GridItem>
        <strong>Nome: </strong>
      </GridItem>
      <GridItem>
        <div> {schedule.name}</div>
      </GridItem>
      <GridItem>
        <strong>Telefone: </strong>
      </GridItem>
      <GridItem>
        <div> {schedule.phone}</div>
      </GridItem>
      <GridItem>
        <strong>E-mail: </strong>
      </GridItem>
      <GridItem>
        <div> {schedule.email}</div>
      </GridItem>
      <GridItem>
        <strong>Data: </strong>
      </GridItem>
      <GridItem>
        <div> {schedule.date}</div>
      </GridItem>
      <GridItem>
        <strong>Horário: </strong>
      </GridItem>
      <GridItem>
        <div> {schedule.time}</div>
      </GridItem>
    </GridContainer>
  );
};

ScheduleDetails.propTypes = {
  schedule: PropTypes.string,
};

export default ScheduleDetails;
