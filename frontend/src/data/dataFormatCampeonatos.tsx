import { getCampeonatos } from "./conectAPI";
import stringURL from "./dataAux";

//tipo de retorno para listagem de dados de campeonatos
export interface IResultados {
  time: string;
  pontos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  gols_pro: number;
  gols_contra: number;
  saldo_gols: number;
  url_img: string;
}

//manipula o retorno do banco e entrega os dados dos campeonatos ordenados
export default async function dataResultadosCampeonatos(ano: string): Promise<IResultados[]> {
  let dados_filtrados: IResultados[] = [];

  //retorna o último array(dados dos times na última rodada)
  const dados_ultima_rodada = await getCampeonatos(ano)

  //seleciona os dados necessários
  dados_ultima_rodada.slice(-1).map(({ partidas }) => {
    //percorre os dados do placar da partida
    partidas.map((partida) => {
      //separa os dados do mandante
      let dados_mandante = {
        time: partida.mandante,
        pontos: partida.pontuacao_geral_mandante.total_pontos,
        vitorias: partida.pontuacao_geral_mandante.total_vitorias,
        empates: partida.pontuacao_geral_mandante.total_empates,
        derrotas: partida.pontuacao_geral_mandante.total_derrotas,
        gols_pro: partida.pontuacao_geral_mandante.total_gols_marcados,
        gols_contra: partida.pontuacao_geral_mandante.total_gols_sofridos,
        saldo_gols:
          partida.pontuacao_geral_mandante.total_gols_marcados -
          partida.pontuacao_geral_mandante.total_gols_sofridos,
        url_img: stringURL(partida.mandante),
      };

      //separa os dados do visitante
      let dados_visitante = {
        time: partida.visitante,
        pontos: partida.pontuacao_geral_visitante.total_pontos,
        vitorias: partida.pontuacao_geral_visitante.total_vitorias,
        empates: partida.pontuacao_geral_visitante.total_empates,
        derrotas: partida.pontuacao_geral_visitante.total_derrotas,
        gols_pro: partida.pontuacao_geral_visitante.total_gols_marcados,
        gols_contra: partida.pontuacao_geral_visitante.total_gols_sofridos,
        saldo_gols:
          partida.pontuacao_geral_visitante.total_gols_marcados -
          partida.pontuacao_geral_visitante.total_gols_sofridos,
        url_img: stringURL(partida.visitante),
      };

      //adiciona os objetos ao array
      dados_filtrados.push(dados_mandante);
      dados_filtrados.push(dados_visitante);
    });
  });
  return dados_filtrados.sort((a: IResultados, b: IResultados) => a.pontos - b.pontos).reverse();
}
