import React, { useState, useEffect } from "react";
import api from "../../services";
import { Link } from "react-router-dom";
import Title from "../../components/title";
import List from "../../components/list";
import ListItem from "../../components/listItem";
import BackButton from "../../components/backButton";
import BaseButton from "../../components/baseButton";
import BaseLink from "../../components/baseLink";

const Admin = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    retrieveSchedules();
  }, []);

  const retrieveSchedules = () => {
    api
      .getAll()
      .then((response) => {
        setSchedules(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <div>
        <Title>Agenda</Title>
        <List>
          {schedules &&
            schedules.map((schedule, index) => (
              <ListItem key={index}>
                <Link
                  to={"/edit/schedules/" + schedule.id}
                  component={BaseLink}
                >
                  {schedule.name} | {schedule.date} | {schedule.time}h
                </Link>
              </ListItem>
            ))}
        </List>
      </div>
      <BaseButton>
        <Link to={"/"} component={BackButton}>
          Voltar
        </Link>
      </BaseButton>
    </>
  );
};

export default Admin;
