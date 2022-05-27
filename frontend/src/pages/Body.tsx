import styled from "styled-components";
import { Container, Tab, Tabs } from "react-bootstrap";
import { CardsTimes } from "./CardsTimes";
import dataResultadosCampeonatos from "../data/dataFormatCampeonatos";
import { IResultados } from "../data/dataFormatCampeonatos";
import { useState } from "react";
import { useEffect } from "react";
import { SelectAno } from "./SelectAno";
import { TableResultados } from "./TableResultados";
import dataResultadosTimes, { ITimes } from "../data/dataFormatTimes";
import { useParams } from "react-router-dom";

const ContainerBody = styled(Container)`
  margin-top: 30px;
`;

const TitleCampeao = styled.h2`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const IMGCampeao = styled.img`
  width: 50px;
  height: 50px;
`;

export default function Body() {
  const [ano, setAno] = useState<string>("2003"); //controla de qual ano os dados serão listados
  const [dadosCampeonato, setDadosCampeonato] = useState<IResultados[]>(); //armazena os dados do campeonato
  const [dadosTimes, setDadosTimes] = useState<ITimes[]>(); //armazena os dados dos times
  const [campeao, setCampeao] = useState<string[]>([]); //armazena os dados do campeão

  //controla as chamadas dos dados
  useEffect(() => {
    async function getDadosCampeonato() {
      const resultsCampeonato = await dataResultadosCampeonatos(ano);
      const resultsTimes = await dataResultadosTimes(ano);
      setCampeao([resultsCampeonato[0].time, resultsCampeonato[0].url_img]);
      setDadosCampeonato(resultsCampeonato);
      setDadosTimes(resultsTimes);
    }
    getDadosCampeonato();
  }, [ano]);

  return (
    <ContainerBody>
      <SelectAno setAno={setAno} />
      <TitleCampeao>
        Campeão do Brasileirão de {ano}: {campeao[0]}{" "}
        <IMGCampeao src={campeao[1]} />
      </TitleCampeao>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Times">
          <CardsTimes dados_times={dadosTimes} />
        </Tab>
        <Tab eventKey="profile" title="Resultados">
          <TableResultados dados_campeonato={dadosCampeonato} />
        </Tab>
      </Tabs>
    </ContainerBody>
  );
}
