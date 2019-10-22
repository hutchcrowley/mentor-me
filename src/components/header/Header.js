import React from "react";
import Logo from "../../img/Logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  const Header1 = styled.section`
    border-bottom: solid 1px #979797;
    padding: 5px;
  `;

  return (
    <Header1>
      <Link to="/">
        <img className="logo" src={Logo}></img>
      </Link>
    </Header1>
  );
};

export default Header;
