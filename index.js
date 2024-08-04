let Vitorias = 90
let Derrotas = 20
function Saldo (vit, der){
    let sald = vit - der
    return sald
}
let saldoTotal = (Saldo(Vitorias, Derrotas))
function DescobrirRank (Saldo){
   let Rank;
    if (Saldo<= 10){
        Rank = "Ferro"}

    else if (Saldo<= 20){
        Rank = "Bronze"
    }
    else if (Saldo<= 50){
        Rank = "Prata"
    }
    else if (Saldo<= 80){
        Rank = "Ouro"
    }
    else if (Saldo<= 90){
        Rank = "Diamante"
    }
    else if (Saldo<= 100){
        Rank = "Lendário"
    }
    else if (Saldo>= 101){
        Rank = "Imortal"
    }
return Rank}
let VerdadeiroRank = DescobrirRank(saldoTotal)
console.log("O Herói tem de saldo de " + saldoTotal + " está no nível de " + VerdadeiroRank)