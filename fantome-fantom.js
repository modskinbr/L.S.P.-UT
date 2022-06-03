// Formulario de Login //
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Imagens de Ranks
var rank_0 = "image/banco_de_dados/Rank_0.png";
var rank_1 = "image/banco_de_dados/Rank_1.png";
var rank_2 = "image/banco_de_dados/Rank_2.png";
var rank_3 = "image/banco_de_dados/Rank_3.png";
var rank_4 = "image/banco_de_dados/Rank_4.png";
var rank_5 = "image/banco_de_dados/Rank_5.png";
var rank_6 = "image/banco_de_dados/Rank_6.png";
var rank_7 = "image/banco_de_dados/Rank_7.png";

// Imagens de Destaque
var destaque_0 = "image/banco_de_dados/Destaque_0.png";
var destaque_1 = "image/banco_de_dados/Destaque_1.png";
var destaque_2 = "image/banco_de_dados/Destaque_2.png";
var destaque_3 = "image/banco_de_dados/Destaque_3.png";
var destaque_4 = "image/banco_de_dados/Destaque_4.png";

// Imagens de Elos
var elo_ferro = "image/banco_de_dados/Ferro.png";
var elo_bronze = "image/banco_de_dados/Bronze.png";
var elo_prata = "image/banco_de_dados/Prata.png";
var elo_ouro = "image/banco_de_dados/Ouro.png";
var elo_platina = "image/banco_de_dados/Platina.png";
var elo_diamante = "image/banco_de_dados/Diamante.png";
var elo_mestre = "image/banco_de_dados/Mestre.png";
var elo_grao_mestre = "image/banco_de_dados/Grao_Mestre.png";
var elo_desafiante = "image/banco_de_dados/Desafiante.png";

// Imagens de Cargos
var dev_img = "image/banco_de_dados/Dev.png";
var mod_img = "image/banco_de_dados/Mod.png";
var supp_img = "image/banco_de_dados/Supp.png";
var tester_img = "image/banco_de_dados/Tester.png";
var designer_img = "image/banco_de_dados/Designer.png";

// Variaveis
var vfalse = "hidden";
var vtrue = "revert"
var imune = "(∾)"
var sem_elo = "Sem Elo";
var sem = "Sem"

// Elos
var ferro = "Ferro";
var bronze = "Bronze";
var prata = "Prata";
var ouro = "Ouro";
var platina = "Platina";
var diamante = "Diamante";
var mestre = "Mestre";
var grao_mestre = "Grão Mestre";
var desafiante = "Desafiante";

// Cargos
var dev = "Dev";
var mod = "Mod";
var supp = "Supp";
var tester = "Tester"
var designer = "Designer"

// Verificação
const urlhref = "https://modskinbr.github.io/L.S.P.-UT/verification.html"

// Url do Perfil //
var url = "image/Profile/"


// Perfis dos Usuarios! //
const ID01 = {
  Nome: "Lucas",
  Imagem: url+"01.png",
  Pontos: "30",
  Rank: "Rank 1",
  Rank_Image: rank_1,
  Pontos_Miticos: "0",
  Elo: sem_elo,
  Elo_Image: rank_0,
  Destaque: sem,
  Destaque_Image: destaque_0,
  Fragmentos: 0,
  Fragmentos_Estelares: 0,
  Essencia_Mitica: 0,
  Moedas: 0,
  Parceria: "Nenhuma",
  Cargo: dev,
  Cargo_Image: dev_img,
  Risco: vfalse,
  Imune: vfalse,
  Progresso: "0%",
  // Divulgadores
  Divulgacoes: "0",
  Colaboracoes: "0",
  Video: "0",
  // Federativa
  Contribuicoes_Federativa: "0",
  Participacoes: "0",
  Bonus_Extra: "0",
  // Testers
  Contribuicoes_Tester: "0",
  Tarefas: "0",
  Verificacoes: "0",
};
const ID02 = {
  Nome: "Victor",
  Imagem: url+"02.png",
  Pontos: "30",
  Rank: "Rank 1",
  Rank_Image: rank_1,
  Pontos_Miticos: "0",
  Elo: sem_elo,
  Elo_Image: rank_0,
  Destaque: sem,
  Destaque_Image: destaque_0,
  Fragmentos: 0,
  Fragmentos_Estelares: 0,
  Essencia_Mitica: 0,
  Moedas: 0,
  Parceria: "TAIKUNDROME",
  Cargo: tester,
  Cargo_Image: tester_img,
  Risco: vfalse,
  Imune: vfalse,
  Progresso: "0%",
  // Divulgadores
  Divulgacoes: "0",
  Colaboracoes: "0",
  Video: "0",
  // Federativa
  Contribuicoes_Federativa: "0",
  Participacoes: "0",
  Bonus_Extra: "0",
  // Testers
  Contribuicoes_Tester: "0",
  Tarefas: "0",
  Verificacoes: "0",
};
const ID03 = {
  Nome: "Adne",
  Imagem: url+"03.png",
  Pontos: "30",
  Rank: "Rank 1",
  Rank_Image: rank_1,
  Pontos_Miticos: "0",
  Elo: sem_elo,
  Elo_Image: rank_0,
  Destaque: sem,
  Destaque_Image: destaque_0,
  Fragmentos: 0,
  Fragmentos_Estelares: 0,
  Essencia_Mitica: 0,
  Moedas: 0,
  Parceria: "Nenhuma",
  Cargo: tester,
  Cargo_Image: tester_img,
  Risco: vfalse,
  Imune: vfalse,
  Progresso: "0%",
  // Divulgadores
  Divulgacoes: "0",
  Colaboracoes: "0",
  Video: "0",
  // Federativa
  Contribuicoes_Federativa: "0",
  Participacoes: "0",
  Bonus_Extra: "0",
  // Testers
  Contribuicoes_Tester: "0",
  Tarefas: "0",
  Verificacoes: "0",
};
const ID04 = {
  Nome: "Pedro",
  Imagem: url+"04.png",
  Pontos: "30",
  Rank: "Rank 1",
  Rank_Image: rank_1,
  Pontos_Miticos: "0",
  Elo: sem_elo,
  Elo_Image: rank_0,
  Destaque: sem,
  Destaque_Image: destaque_0,
  Fragmentos: 0,
  Fragmentos_Estelares: 0,
  Essencia_Mitica: 0,
  Moedas: 0,
  Parceria: "Nenhuma",
  Cargo: mod,
  Cargo_Image: mod_img,
  Risco: vfalse,
  Imune: vfalse,
  Progresso: "0%",
  // Divulgadores
  Divulgacoes: "0",
  Colaboracoes: "0",
  Video: "0",
  // Federativa
  Contribuicoes_Federativa: "0",
  Participacoes: "0",
  Bonus_Extra: "0",
  // Testers
  Contribuicoes_Tester: "0",
  Tarefas: "0",
  Verificacoes: "0",
};
const ID05 = {
  Nome: "Gustavo",
  Imagem: url+"05.png",
  Pontos: "30",
  Rank: "Rank 1",
  Rank_Image: rank_1,
  Pontos_Miticos: "0",
  Elo: sem_elo,
  Elo_Image: rank_0,
  Destaque: sem,
  Destaque_Image: destaque_0,
  Fragmentos: 0,
  Fragmentos_Estelares: 0,
  Essencia_Mitica: 0,
  Moedas: 0,
  Parceria: "Nenhuma",
  Cargo: mod,
  Cargo_Image: mod_img,
  Risco: vfalse,
  Imune: vfalse,
  Progresso: "0%",
  // Divulgadores
  Divulgacoes: "0",
  Colaboracoes: "0",
  Video: "0",
  // Federativa
  Contribuicoes_Federativa: "0",
  Participacoes: "0",
  Bonus_Extra: "0",
  // Testers
  Contribuicoes_Tester: "0",
  Tarefas: "0",
  Verificacoes: "0",
};

// Login //
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username == "Luckey" && password == "smodskins") {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("data1", ID01.Nome);
        localStorage.setItem("data2", ID01.Imagem);
        localStorage.setItem("data3", ID01.Pontos);
        localStorage.setItem("data4", ID01.Rank);
        localStorage.setItem("data5", ID01.Rank_Image);
        localStorage.setItem("data6", ID01.Pontos_Miticos);
        localStorage.setItem("data7", ID01.Elo);
        localStorage.setItem("data8", ID01.Elo_Image);
        localStorage.setItem("data9", ID01.Destaque);
        localStorage.setItem("data10", ID01.Destaque_Image);
        localStorage.setItem("data11", ID01.Fragmentos);
        localStorage.setItem("data12", ID01.Fragmentos_Estelares);
        localStorage.setItem("data13", ID01.Essencia_Mitica);
        localStorage.setItem("data14", ID01.Moedas);
        localStorage.setItem("data15", ID01.Parceria);
        localStorage.setItem("data16", ID01.Cargo);
        localStorage.setItem("data17", ID01.Cargo_Image);
        localStorage.setItem("data18", ID01.Risco);
        localStorage.setItem("data19", ID01.Imune);
        localStorage.setItem("data20", ID01.Divulgacoes);
        localStorage.setItem("data21", ID01.Colaboracoes);
        localStorage.setItem("data22", ID01.Video);
        localStorage.setItem("data23", ID01.Contribuicoes_Federativa);
        localStorage.setItem("data24", ID01.Participacoes);
        localStorage.setItem("data25", ID01.Bonus_Extra);
        localStorage.setItem("data26", ID01.Contribuicoes_Tester);
        localStorage.setItem("data27", ID01.Tarefas);
        localStorage.setItem("data28", ID01.Verificacoes);
        localStorage.setItem("data29", ID01.Progresso);
    }
    else if (username == "taikunxx3" && password == "taik9348") {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("data1", ID02.Nome);
        localStorage.setItem("data2", ID02.Imagem);
        localStorage.setItem("data3", ID02.Pontos);
        localStorage.setItem("data4", ID02.Rank);
        localStorage.setItem("data5", ID02.Rank_Image);
        localStorage.setItem("data6", ID02.Pontos_Miticos);
        localStorage.setItem("data7", ID02.Elo);
        localStorage.setItem("data8", ID02.Elo_Image);
        localStorage.setItem("data9", ID02.Destaque);
        localStorage.setItem("data10", ID02.Destaque_Image);
        localStorage.setItem("data11", ID02.Fragmentos);
        localStorage.setItem("data12", ID02.Fragmentos_Estelares);
        localStorage.setItem("data13", ID02.Essencia_Mitica);
        localStorage.setItem("data14", ID02.Moedas);
        localStorage.setItem("data15", ID02.Parceria);
        localStorage.setItem("data16", ID02.Cargo);
        localStorage.setItem("data17", ID02.Cargo_Image);
        localStorage.setItem("data18", ID02.Risco);
        localStorage.setItem("data19", ID02.Imune);
        localStorage.setItem("data20", ID02.Divulgacoes);
        localStorage.setItem("data21", ID02.Colaboracoes);
        localStorage.setItem("data22", ID02.Video);
        localStorage.setItem("data23", ID02.Contribuicoes_Federativa);
        localStorage.setItem("data24", ID02.Participacoes);
        localStorage.setItem("data25", ID02.Bonus_Extra);
        localStorage.setItem("data26", ID02.Contribuicoes_Tester);
        localStorage.setItem("data27", ID02.Tarefas);
        localStorage.setItem("data28", ID02.Verificacoes);
        localStorage.setItem("data29", ID02.Progresso);
    }
    else if (username == "Khyago" && password == "Khyagolol27") {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("data1", ID03.Nome);
        localStorage.setItem("data2", ID03.Imagem);
        localStorage.setItem("data3", ID03.Pontos);
        localStorage.setItem("data4", ID03.Rank);
        localStorage.setItem("data5", ID03.Rank_Image);
        localStorage.setItem("data6", ID03.Pontos_Miticos);
        localStorage.setItem("data7", ID03.Elo);
        localStorage.setItem("data8", ID03.Elo_Image);
        localStorage.setItem("data9", ID03.Destaque);
        localStorage.setItem("data10", ID03.Destaque_Image);
        localStorage.setItem("data11", ID03.Fragmentos);
        localStorage.setItem("data12", ID03.Fragmentos_Estelares);
        localStorage.setItem("data13", ID03.Essencia_Mitica);
        localStorage.setItem("data14", ID03.Moedas);
        localStorage.setItem("data15", ID03.Parceria);
        localStorage.setItem("data16", ID03.Cargo);
        localStorage.setItem("data17", ID03.Cargo_Image);
        localStorage.setItem("data18", ID03.Risco);
        localStorage.setItem("data19", ID03.Imune);
        localStorage.setItem("data20", ID03.Divulgacoes);
        localStorage.setItem("data21", ID03.Colaboracoes);
        localStorage.setItem("data22", ID03.Video);
        localStorage.setItem("data23", ID03.Contribuicoes_Federativa);
        localStorage.setItem("data24", ID03.Participacoes);
        localStorage.setItem("data25", ID03.Bonus_Extra);
        localStorage.setItem("data26", ID03.Contribuicoes_Tester);
        localStorage.setItem("data27", ID03.Tarefas);
        localStorage.setItem("data28", ID03.Verificacoes);
        localStorage.setItem("data29", ID03.Progresso);
    }
    else if (username == "jake" && password == "bananinhadoroblox") {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("data1", ID04.Nome);
        localStorage.setItem("data2", ID04.Imagem);
        localStorage.setItem("data3", ID04.Pontos);
        localStorage.setItem("data4", ID04.Rank);
        localStorage.setItem("data5", ID04.Rank_Image);
        localStorage.setItem("data6", ID04.Pontos_Miticos);
        localStorage.setItem("data7", ID04.Elo);
        localStorage.setItem("data8", ID04.Elo_Image);
        localStorage.setItem("data9", ID04.Destaque);
        localStorage.setItem("data10", ID04.Destaque_Image);
        localStorage.setItem("data11", ID04.Fragmentos);
        localStorage.setItem("data12", ID04.Fragmentos_Estelares);
        localStorage.setItem("data13", ID04.Essencia_Mitica);
        localStorage.setItem("data14", ID04.Moedas);
        localStorage.setItem("data15", ID04.Parceria);
        localStorage.setItem("data16", ID04.Cargo);
        localStorage.setItem("data17", ID04.Cargo_Image);
        localStorage.setItem("data18", ID04.Risco);
        localStorage.setItem("data19", ID04.Imune);
        localStorage.setItem("data20", ID04.Divulgacoes);
        localStorage.setItem("data21", ID04.Colaboracoes);
        localStorage.setItem("data22", ID04.Video);
        localStorage.setItem("data23", ID04.Contribuicoes_Federativa);
        localStorage.setItem("data24", ID04.Participacoes);
        localStorage.setItem("data25", ID04.Bonus_Extra);
        localStorage.setItem("data26", ID04.Contribuicoes_Tester);
        localStorage.setItem("data27", ID04.Tarefas);
        localStorage.setItem("data28", ID04.Verificacoes);
        localStorage.setItem("data29", ID04.Progresso);
    }
    else if (username == "imnotchinna" && password == "shintaro433") {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("data1", ID05.Nome);
        localStorage.setItem("data2", ID05.Imagem);
        localStorage.setItem("data3", ID05.Pontos);
        localStorage.setItem("data4", ID05.Rank);
        localStorage.setItem("data5", ID05.Rank_Image);
        localStorage.setItem("data6", ID05.Pontos_Miticos);
        localStorage.setItem("data7", ID05.Elo);
        localStorage.setItem("data8", ID05.Elo_Image);
        localStorage.setItem("data9", ID05.Destaque);
        localStorage.setItem("data10", ID05.Destaque_Image);
        localStorage.setItem("data11", ID05.Fragmentos);
        localStorage.setItem("data12", ID05.Fragmentos_Estelares);
        localStorage.setItem("data13", ID05.Essencia_Mitica);
        localStorage.setItem("data14", ID05.Moedas);
        localStorage.setItem("data15", ID05.Parceria);
        localStorage.setItem("data16", ID05.Cargo);
        localStorage.setItem("data17", ID05.Cargo_Image);
        localStorage.setItem("data18", ID05.Risco);
        localStorage.setItem("data19", ID05.Imune);
        localStorage.setItem("data20", ID05.Divulgacoes);
        localStorage.setItem("data21", ID05.Colaboracoes);
        localStorage.setItem("data22", ID05.Video);
        localStorage.setItem("data23", ID05.Contribuicoes_Federativa);
        localStorage.setItem("data24", ID05.Participacoes);
        localStorage.setItem("data25", ID05.Bonus_Extra);
        localStorage.setItem("data26", ID05.Contribuicoes_Tester);
        localStorage.setItem("data27", ID05.Tarefas);
        localStorage.setItem("data28", ID05.Verificacoes);
        localStorage.setItem("data29", ID05.Progresso);
    }
    else {
        loginErrorMsg.style.opacity = 1;
        localStorage.clear();
    }
})
