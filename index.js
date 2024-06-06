$(document).ready(function(){
    
    var jogador = 1;

    var tabuleiro = [
        0,0,0,
        0,0,0,
        0,0,0
    ];
   
    $(".casa").click(function(){

        var pos = $(this).attr("pos");

        tabuleiro[pos] = jogador;

        if (jogador ==1)
        {
            $(this).html("X");
            jogador = 2;
        }
        else {
            $(this).html("O");
            jogador = 1;
        }
        console.log("Clicado na pos: " + pos)
        console.log(tabuleiro)

        if(tabuleiro[0] == tabuleiro[1] && tabuleiro[1] == tabuleiro[2] && tabuleiro[0] !=0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[1])
        }
        if(tabuleiro[3] == tabuleiro[4] && tabuleiro[4] == tabuleiro[5] && tabuleiro[3] !=0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[3])
        }

        if(tabuleiro[6] == tabuleiro[7] && tabuleiro[7] == tabuleiro[8] && tabuleiro[6] !=0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[7])
        }

        if(tabuleiro[0] == tabuleiro[3] && tabuleiro[3] == tabuleiro[6] && tabuleiro[0] !=0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[3])
        }

        if(tabuleiro[1] == tabuleiro[4] && tabuleiro[4] == tabuleiro[7] && tabuleiro[1] !=0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[4])
        }

        if(tabuleiro[2] == tabuleiro[5] && tabuleiro[5] == tabuleiro[8] && tabuleiro[2] !=0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[5])
        }

        if(tabuleiro[0] == tabuleiro[4] && tabuleiro[4] == tabuleiro[8] && tabuleiro[0] !=0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[4])
        }

        if(tabuleiro[2] == tabuleiro[4] && tabuleiro[4] == tabuleiro[6] && tabuleiro[2] !=0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[4])
        }
    });

}); // fim do .casa



