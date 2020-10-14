import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../../components/homeButton";
import BaseButton from "../../components/baseButton";

const Home = () => {
  return (
    <BaseButton>
      <Link to="/patient" component={HomeButton}>
        Paciente
      </Link>
      <Link to="/admin" component={HomeButton}>
        Administrador
      </Link>
    </BaseButton>
  );
};

export default Home;
