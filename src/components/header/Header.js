import React from 'react';
import Logo from '../../img/Logo.svg';
import styled from 'styled-components';

const Header = () => {
  const Header1 = styled.section`
    border-bottom: solid 1px #979797;
    padding: 5px;
  `;

  return (
    <Header1>
      <img src={Logo}></img>
    </Header1>
  );
};

export default Header;
