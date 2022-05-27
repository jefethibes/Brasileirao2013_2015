import React from "react";
import { Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

const NavTitle = styled(Navbar)`
  background-color: #2ba855;
  color: white;
  justify-content: center;
`;

const TextTitle = styled.h4`
  text-align: center;
`;

const ImageTitle = styled(Image)`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  margin-left: 15px;
`;

export const Header = React.memo(function () {
  return (
    <NavTitle>
      <ImageTitle src="./brasileirao.png"></ImageTitle>
      <TextTitle>Dados dos Campeonatos Brasileiros de 2003 a 2015</TextTitle>
      <ImageTitle src="./brasileirao.png"></ImageTitle>
    </NavTitle>
  );
})
