export function userPhoto(email: string): string {
  switch (email) {
    case "cartbens@hotmail.com":
      return "/users/thiago.jpg";
    case "eduardo.souza4@estudante.ifms.edu.br":
      return "/users/eduardo.jpg";
    case "murilo.destefani@estudante.ifms.edu.br":
      return "/users/murilo.jpg";
    case "gustavo.pinheiro@estudante.ifms.edu.br":
      return "/users/gustavo-cruz.jpg";
    case "william.perete@estudante.ifms.edu.br":
      return "/users/william.jpg";
    case "rogerio.zek@estudante.ifms.edu.br":
      return "/users/rogerio.jpg";
    case "jemison.santos@ifms.edu.br":
      return "/users/jemison.jpg";
    case "maria.lopes10@estudante.ifms.edu.br":
      return "/users/maria.jpg";
    case "gustavo.santos@estudante.ifms.edu.br":
      return "/users/gustavo-marques.jpg";
    case "lucas.silva22@estudante.ifms.edu.br":
      return "/users/lucas.jpg";
    case "aline.duran@estudante.ifms.edu.br":
      return "/users/aline.jpg";
    case "emilly.santos@estudante.ifms.edu.br":
      return "/users/emilly.jpg";
    default:
      return "";
  }
}
