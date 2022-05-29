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
  Destaque: "0",
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
    }
    else {
        loginErrorMsg.style.opacity = 1;
        localStorage.clear();
    }
})
