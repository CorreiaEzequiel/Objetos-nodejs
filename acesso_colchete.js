const cliente = {
    nome : "Ezequiel",
    idade: 24,
    cpf  : "118.270.959-11",
    email: "ezequiel@grupoztech.com"

}
console.log(`O nome do cliente é ${cliente.nome} e sua idade é ${cliente.idade}`);
//console.log(`Os 3 primeiros digitos de seu CPF são : ${cliente.cpf.substring(0,3)}`);
//o comando .substring() permite que o programador possa escolher quais caracteristicas
//da string que devera ser apresentada. No caso no exemplo acima : ${cliente.nome.substring(0,3)}
//Retorna o que entre o indice 0 e 3 da string.
const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`a chave ${chave} tem valor ${cliente[chave]} `)
});
