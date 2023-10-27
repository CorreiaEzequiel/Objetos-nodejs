const cliente = {
    nome : "Ezequiel Correia",
    idade: 24,
    cpf  : "118.270.959-11",
    telefones : ["(44)99770-6452", "(43)99613-2357"],
    saldo : 3000,
    efetuaPagamento : function (valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log(`Compra efetuada com sucesso, seu novo saldo é de : R$ ${this.saldo}`);
        }else {
            console.log("Erro ao efetuar a compra : Saldo insuficiente !")
        }
    }
}
cliente.efetuaPagamento(5000);