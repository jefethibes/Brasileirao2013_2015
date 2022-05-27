import axios from "axios";

//url padrão da api
const URL_API_CAMPEONATO = "http://localhost:3001/";

//conexão padrã da api
export const apiCampeonatos = axios.create({
  baseURL: URL_API_CAMPEONATO
})

export interface IPontuacaoGeral {
  gols_fora_casa: number;
  empates_fora_casa: number;
  total_jogos: number;
  gols_casa: number;
  jogos_fora_casa: number;
  vitorias_casa: number;
  derrotas_casa: number;
  total_pontos: number;
  empates_casa: number;
  pontos_fora_casa: number;
  total_gols_sofridos: number;
  total_vitorias: number;
  vitorias_fora_casa: number;
  total_derrotas: number;
  pontos_casa: number;
  derrotas_fora_casa: number;
  total_gols_marcados: number;
  jogos_casa: number;
  total_empates: number;
}

export interface IDadosPartidas {
  visitante: string;
  resultado: string;
  data_partida: string;
  pontuacao_geral_mandante: IPontuacaoGeral;
  placar_visitante: number;
  hora_partida: string;
  mandante: string;
  placar_mandante: number;
  estadio: string;
  pontuacao_geral_visitante: IPontuacaoGeral;
}

//tipo de retorno da promise
export interface IDadosTimes {
  numero: number;
  partidas: IDadosPartidas[];
}

//busca os dados dos campeonatos pelo ano
export async function getCampeonatos(ano: string): Promise<IDadosTimes[]> {
  const { data } = await apiCampeonatos.get(`/${ano}`);
  return (data).slice(-1);
}
