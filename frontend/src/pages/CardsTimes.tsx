import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { ITimes } from "../data/dataFormatTimes";

const CardBody = styled(Card)`
  width: 10rem;
  align-items: center;
  margin-right: 15px;
  margin-top: 15px;
  box-shadow: 0 0 1em #DCDCDC;
`;

export const ContainerTabs = styled(Container)`
  margin-top: 30px;
`;

export const CardRow = styled(Row)`
  justify-content: center;
`;

const CardIMG = styled(Card.Img)`
  height: 60px;
  width: 60px;
  margin-top: 5px;
`;

const CardTxt = styled(Card.Text)`
  font-size: 15px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
`;

export interface ICarTimesProps {
  dados_times?: ITimes[];
}

export const CardsTimes = React.memo(function (props: ICarTimesProps) {
  return (
    <ContainerTabs>
      <CardRow>
        {props.dados_times?.map((dados) => {
          return (
            <CardBody key={dados.time}>
              <CardIMG src={dados.url_img} />
              <CardTxt>{dados.time}</CardTxt>
            </CardBody>
          );
        })}
      </CardRow>
    </ContainerTabs>
  );
})
