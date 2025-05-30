
alert ("Sistema de Gerenciamento de Finanças!");


let usuarios = [
    { usuario: "Mariana", email: "MarianaLara@gmail.com",
     senha: "789" }
    ];


    let personalizar = [];

    //testado funcionando - NÃO MEXERRR
    // function login() {
    //     const user = document.getElementById("nome").value;
    //     const email = document.getElementById("email").value;
    //     const pass = document.getElementById("senha").value;
        
    //     const validado = usuarios.find(u => u.usuario === user && u.senha === pass);
    //         if (validado) {
    //             document.getElementById("login").style.display = "none";
    //             document.getElementById("informacoesAcrescentadas").style.display = "block";
    //             alert("Bem-vindo ao sistema da biblioteca!");
    //         } else {
    //             alert("Usuário ou senha inválidos!");
    //         }
    // }


    //renda mensal, gastos fixos, reserva financeira e metas almejadas

    
    function somarRenda(){

        let rendaMensal = document.getElementById("rendaMensal").value;
        let gastosFixos = document.getElementById("gastosFixos").value;
                
        
        // let reservaFinanceira = Number(prompt ("Digite sua reserva financeira, por favor"));
        // let metasAlmejadas = Number(prompt ("Digite o quanto deseja quardar para obter sua meta!"));

        // alert(rendaMensal + gastosFixos + reservaFinanceira + metasAlmejadas);
    }


    // let valorSacado = Number(prompt("Digite o valor a ser sacado"));

    // function subtrairReserva(valorSacado) {
    //     reservaFinanceira = reservaFinanceira - valorSacado;
    // }

    // somarRenda(rendaMensal, gastosFixos, reservaFinanceira, metasAlmejadas );


    