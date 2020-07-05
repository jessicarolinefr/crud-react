import React, { useState, useEffect } from "react";
import TruckerService from "../../services";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "../search";
import Title from "../title";
import List from "../list";
import ListItem from "../listItem";
import CreateLink from "../createLink";
import TruckDetails from "../truckDetails";
import BackButton from "../backButton";

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ListTrucker = () => {
  const [truckers, setTruckers] = useState([]);
  const [currentTrucker, setCurrentTrucker] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTruckers();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTruckers = () => {
    TruckerService.getAll()
      .then((response) => {
        setTruckers(response.data);
        console.error(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const onSearchIconClick = () => {
    TruckerService.onSearchIconClick(searchTitle)
      .then((response) => {
        setTruckers(response.data);
        console.error(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <Div>
        <Search
          value={searchTitle}
          onChange={onChangeSearchTitle}
          onClick={onSearchIconClick}
        />
      </Div>
      <div>
        <Title>Lista de Caminhoneiros</Title>

        <List>
          {truckers &&
            truckers.map((trucker, index) => (
              <ListItem onClick={() => setCurrentTrucker(trucker)} key={index}>
                {trucker.name}
              </ListItem>
            ))}
        </List>
      </div>
      <div>
        {currentTrucker && (
          <div>
            <TruckDetails trucker={currentTrucker} />
            <Link
              to={"/edit/trucker/" + currentTrucker.id}
              component={BackButton}
            >
              Editar
            </Link>
          </div>
        )}
      </div>
      <Div>
        <Link to={"/add"} component={CreateLink}>
          Novo Caminhoneiro
        </Link>
      </Div>
    </div>
  );
};

export default ListTrucker;
