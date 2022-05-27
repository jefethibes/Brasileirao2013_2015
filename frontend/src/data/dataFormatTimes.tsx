import { getCampeonatos } from "./conectAPI";
import stringURL from "./dataAux";

//tipo de retorno para listagem de dados de times
export interface ITimes {
  time: string;
  url_img: string;
}

export default async function dataResultadosTimes(ano: string): Promise<ITimes[]> {
  let dados_filtrados: ITimes[] = [];

  //retorna o último array(dados dos times na última rodada)
  const dados_ultima_rodada = await getCampeonatos(ano)

  //seleciona os dados necessários
  dados_ultima_rodada.slice(-1).map(({ partidas }) => {
    //percorre os dados do placar da partida
    partidas.map((partida) => {
      //separa os dados do mandante
      let dados_mandante = {
        time: partida.mandante,
        url_img: stringURL(partida.mandante),
      };

      //separa os dados do visitante
      let dados_visitante = {
        time: partida.visitante,
        url_img: stringURL(partida.visitante),
      };

      //adiciona os objetos ao array
      dados_filtrados.push(dados_mandante);
      dados_filtrados.push(dados_visitante);
    });
  });
  //retorna os times em ordem alfabetica
  return dados_filtrados.sort((a: ITimes, b: ITimes) => {
    if(a.time < b.time) return -1; 
    if(a.time > b.time) return 1;
    return 0;
  });
}