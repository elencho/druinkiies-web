import React from "react";

import { NavBar } from "../../components";
import { Logo } from "./styles";


const Home = () => {
  return (
    <div>
      <NavBar />
      <div style={{ backgroundColor: "#62CFEA", height: "80vh" }}>
        <Logo src={"../../assets/Drinkiies-Logo_Logo_flat.png"} />
      </div>
    </div>
  );
};

export default Home;
