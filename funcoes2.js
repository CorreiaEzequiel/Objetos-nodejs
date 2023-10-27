const professor = {
    nome : "Victor Hugo",
    idade:23,
    cidade: "Maringá",
    cpf :  "008.781.928-06",
    saldo : 16000,
    efetuaCompra : function (valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log(`Compra realizada com sucesso ! Seu saldo Restante é de : R$ ${this.saldo}`);
        }else{
            console.log("Erro ao processar a compra, saldo insuficiente !");
        }
    }
}
professor.efetuaCompra(18000);