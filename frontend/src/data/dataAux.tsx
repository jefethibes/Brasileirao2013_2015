//trata o nome dos times para localizar a url
export default function stringURL(time: string): string {
  //troca os espaços em brando por _, deixa tudo minusculo e remove os acentos da string
  const urlIMG = time.replace(" ", "_").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return `/img/${urlIMG}.png`;
}