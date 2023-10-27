const cliente = {
    nome : "Ezequiel Correia",
    idade: 24,
    cpf  : "118.270.959-11",
    telefones : ["(44)99770-6452", "(43)99613-2357"]
}
cliente.enderecos = [
      {
    rua : "Tiete",
    numero : 438,
    bairro : "Zona 07",
    cep : "87020-210",
    apartamento : true,
    complement0 : "apto 404"
  }];
cliente.enderecos.push({
    rua : "Virginio Turozi",
    numero : 449,
    bairro : "Centro",
    apartamento : false


})

const somenteApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true 
);
console.log(somenteApartamentos);