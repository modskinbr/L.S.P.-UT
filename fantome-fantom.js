// Formulario de Login //
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Notificaçoes //
localStorage.setItem("read","2");

// Ganhador do Mes //
localStorage.setItem("winner", "fehtheworld#9360");

// Mensagems //
localStorage.setItem("msg_title", "Testando novas formas de notificiar o publico!");
localStorage.setItem("msg_box", "Apenas uma mensagem de testes, Mas gostaria de agradecer por voce estar aqui!");
localStorage.setItem("msg_title2", "Divulgue nosso modskin!");
localStorage.setItem("msg_box2", "Gostaria que voce divulga-se meu modskin, ele é bom neh?!");

// Data Base das Imagens e Variaveis //
var sem_nivel = "https://cdn.discordapp.com/emojis/946445227609165925.png?size=80";
var nivel_1 = "https://cdn.discordapp.com/emojis/945768989198532708.png?size=80";
var nivel_2 = "https://cdn.discordapp.com/emojis/945769010899861554.png?size=80";
var nivel_3 = "https://cdn.discordapp.com/emojis/945769038280278056.png?size=80";
var nivel_4 = "https://cdn.discordapp.com/emojis/945769155607552030.png?size=80";
var nivel_5 = "https://cdn.discordapp.com/emojis/945769222582206534.png?size=80";
var nivel_6 = "https://cdn.discordapp.com/emojis/945769259194265640.png?size=80";
var nivel_7 = "https://cdn.discordapp.com/emojis/945769293906321438.png?size=80";
var sequencia_0 = "https://cdn.discordapp.com/emojis/946444972356411472.png?size=80";
var sequencia_1 = "https://cdn.discordapp.com/emojis/945769435183083570.png?size=80";
var sequencia_2 = "https://cdn.discordapp.com/emojis/945769435497648238.png?size=80";
var sequencia_3 = "https://cdn.discordapp.com/emojis/945769435552165958.png?size=80";
var sequencia_4 = "https://cdn.discordapp.com/emojis/945769585024593920.png?size=80";
var sem_ranked = "https://cdn.discordapp.com/emojis/946504906796331088.png?size=80";
var ranked_bronze = "https://cdn.discordapp.com/emojis/945787021534851092.png?size=80";
var ranked_prata = "https://cdn.discordapp.com/emojis/945787021086052422.png?size=80";
var ranked_ouro = "https://cdn.discordapp.com/emojis/945787019622252604.png?size=80";
var ranked_platina = "https://cdn.discordapp.com/emojis/945787022201741352.png?size=80";
var ranked_diamante = "https://cdn.discordapp.com/emojis/945787022168195162.png?size=80";
var ranked_mestre = "https://cdn.discordapp.com/emojis/945787021861986407.png?size=80";
var ranked_desafiante = "https://cdn.discordapp.com/emojis/945787022688276520.png?size=80";
var cargo_dev = "https://cdn.discordapp.com/emojis/946447648011993178.png?size=80";
var cargo_mod = "https://cdn.discordapp.com/emojis/946447648410468492.png?size=80";
var cargo_supp = "https://cdn.discordapp.com/emojis/946447648464994405.png?size=80";
var cargo_tester = "https://cdn.discordapp.com/emojis/946447648062337034.png?size=80";
var cargo_corretor = "https://cdn.discordapp.com/emojis/946447647982645278.png?size=80";
var cargo_designer = "https://cdn.discordapp.com/emojis/946447647886159963.png?size=80";
var vfalse = "hidden";
var vtrue = "revert"
var imune = "∾"
var sem = "Sem";
var prata = "Prata";
var ouro = "Ouro";
var platina = "Platina";
var diamante = "Diamante";
var mestre = "Mestre";
var desafiante = "Desafiante";
var dev = "Dev";
var mod = "Mod";
var supp = "Supp";
var supp_ini = "Supp Ini.";
var tester = "Tester"
var corretor = "Corretor"
var designer = "Designer"
const urlhref = "https://modskinbr.github.io/L.S.P.-UT/verification.html"

// Url do Perfil //
var url = "https://modskinbr.github.io/L.S.P.-UT/image/Profile/"


// Perfis dos Usuarios! //
const ID01 = {
  Nome: "Lucas",
  Imagem: url+"Porito.png",
  Pontos: imune,
  Level_Pontos: imune,
  Pontos_Miticos: imune,
  Sequencia: imune,
  Level_Image: sem_nivel,
  Sequencia_Image: sequencia_0,
  Ranked: imune,
  Ranked_Image: sem_ranked,
  Imune: vtrue,
  Risco: vfalse,
  Cargo: dev,
  Cargo_Image: cargo_dev,
};
const ID02 = {
  Nome: "Raguem",
  Imagem: url+"Foxy.png",
  Pontos: 51,
  Fragmentos: 2,
  Level_Pontos: 3,
  Pontos_Miticos: 0,
  Sequencia: 0,
  Level_Image: nivel_3,
  Sequencia_Image: sequencia_0,
  Ranked: sem,
  Ranked_Image: sem_ranked,
  Imune: vfalse,
  Risco: vfalse,
  Cargo: supp,
  Cargo_Image: cargo_supp,
};
const ID03 = {
  Nome: "Gabriel",
  Imagem: url+"Gece.png",
  Pontos: 60,
  Fragmentos: 2,
  Level_Pontos: 4,
  Pontos_Miticos: 0,
  Sequencia: 0,
  Level_Image: nivel_4,
  Sequencia_Image: sequencia_0,
  Ranked: sem,
  Ranked_Image: sem_ranked,
  Imune: vfalse,
  Risco: vfalse,
  Cargo: mod,
  Cargo_Image: cargo_mod,
};
const ID04 = {
  Nome: "Matheus",
  Imagem: url+"Mono.png",
  Pontos: 101,
  Level_Pontos: 1,
  Pontos_Miticos: 0,
  Sequencia: 0,
  Level_Image: nivel_1,
  Sequencia_Image: sequencia_0,
  Ranked: sem,
  Ranked_Image: sem_ranked,
  Imune: vfalse,
  Risco: vfalse,
  Cargo: supp,
  Cargo_Image: cargo_supp,
};
const ID05 = {
  Nome: "Fernanda",
  Imagem: url+"Fehtheworld.png",
  Pontos: 64,
  Fragmentos: 2,
  Level_Pontos: 4,
  Pontos_Miticos: 1,
  Sequencia: 2,
  Level_Image: nivel_4,
  Sequencia_Image: sequencia_2,
  Ranked: sem,
  Ranked_Image: sem_ranked,
  Imune: vfalse,
  Risco: vfalse,
  Cargo: designer,
  Cargo_Image: cargo_designer,
};
const ID06 = {
  Nome: "Gustavo",
  Imagem: url+"Krap.png",
  Pontos: 108,
  Level_Pontos: 1,
  Pontos_Miticos: 0,
  Sequencia: 0,
  Level_Image: nivel_1,
  Sequencia_Image: sequencia_0,
  Ranked: sem,
  Ranked_Image: sem_ranked,
  Imune: vfalse,
  Risco: vfalse,
  Cargo: supp_ini,
  Cargo_Image: cargo_supp,
};
const ID07 = {
  Nome: "Guilherme",
  Imagem: url+"Buddha.png",
  Pontos: 100,
  Level_Pontos: 1,
  Pontos_Miticos: 0,
  Sequencia: 0,
  Level_Image: nivel_1,
  Sequencia_Image: sequencia_0,
  Ranked: sem,
  Ranked_Image: sem_ranked,
  Imune: vfalse,
  Risco: vfalse,
  Cargo: tester,
  Cargo_Image: cargo_tester,
};
const ID08 = {
  Nome: "Vitor",
  Imagem: url+"Trick.png",
  Pontos: 102,
  Level_Pontos: 1,
  Pontos_Miticos: 0,
  Sequencia: 0,
  Level_Image: nivel_1,
  Sequencia_Image: sequencia_0,
  Ranked: sem,
  Ranked_Image: sem_ranked,
  Imune: vfalse,
  Risco: vfalse,
  Cargo: supp_ini,
  Cargo_Image: cargo_supp,
};
const ID09 = {
  Nome: "Leandro",
  Imagem: url+"JasonMiler.png",
  Pontos: 100,
  Level_Pontos: 1,
  Pontos_Miticos: 0,
  Sequencia: 0,
  Level_Image: nivel_1,
  Sequencia_Image: sequencia_0,
  Ranked: sem,
  Ranked_Image: sem_ranked,
  Imune: vfalse,
  Risco: vfalse,
  Cargo: tester,
  Cargo_Image: cargo_tester,
};
const ID10 = {
  Nome: "Nando",
  Imagem: url+"Nando.png",
  Pontos: 74,
  Fragmentos: 1,
  Level_Pontos: 5,
  Pontos_Miticos: 0,
  Sequencia: 0,
  Level_Image: nivel_5,
  Sequencia_Image: sequencia_0,
  Ranked: sem,
  Ranked_Image: sem_ranked,
  Imune: vfalse,
  Risco: vfalse,
  Cargo: tester,
  Cargo_Image: cargo_tester,
};
const ID11 = {
  Nome: "Octávio",
  Imagem: url+"Yashiro.png",
  Pontos: imune,
  Level_Pontos: imune,
  Pontos_Miticos: imune,
  Sequencia: imune,
  Level_Image: sem_nivel,
  Sequencia_Image: sequencia_0,
  Ranked: imune,
  Ranked_Image: sem_ranked,
  Imune: vtrue,
  Risco: vfalse,
  Cargo: dev,
  Cargo_Image: cargo_dev,
};
const ID12 = {
  Nome: "Adne",
  Imagem: url+"Khyago.png",
  Pontos: "Aguardando...",
  Level_Pontos: imune,
  Pontos_Miticos: imune,
  Sequencia: imune,
  Level_Image: sem_nivel,
  Sequencia_Image: sequencia_0,
  Ranked: imune,
  Ranked_Image: sem_ranked,
  Imune: vtrue,
  Risco: vfalse,
  Cargo: tester,
  Cargo_Image: cargo_tester,
};
const ID13 = {
  Nome: "Igor",
  Imagem: url+"Kizumi.png",
  Pontos: "Aguardando...",
  Level_Pontos: imune,
  Pontos_Miticos: imune,
  Sequencia: imune,
  Level_Image: sem_nivel,
  Sequencia_Image: sequencia_0,
  Ranked: imune,
  Ranked_Image: sem_ranked,
  Imune: vtrue,
  Risco: vfalse,
  Cargo: tester,
  Cargo_Image: cargo_tester,
};

// Login //
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username == "Porito#0000" && password == "0000" || username == "Porito" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID01.Nome);
        localStorage.setItem("points", ID01.Pontos);
        localStorage.setItem("level_points", ID01.Level_Pontos);
        localStorage.setItem("sequence", ID01.Sequencia);
        localStorage.setItem("points_mitics", ID01.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID01.Ranked);
        localStorage.setItem("imune", ID01.Imune);
        localStorage.setItem("risco", ID01.Risco);
        localStorage.setItem("cargo", ID01.Cargo);
        localStorage.setItem("userdate_img", ID01.Imagem);
        localStorage.setItem("level_points_img", ID01.Level_Image);
        localStorage.setItem("sequence_img", ID01.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID01.Ranked_Image);
        localStorage.setItem("cargo_img", ID01.Cargo_Image);
    }
    else if (username == "Kawai Foxy#3471" && password == "21665" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "Kawai Foxy#3471" && password == "-21665-" || username == "Kawai Foxy" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID02.Nome);
        localStorage.setItem("points", ID02.Pontos);
        localStorage.setItem("level_points", ID02.Level_Pontos);
        localStorage.setItem("sequence", ID02.Sequencia);
        localStorage.setItem("points_mitics", ID02.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID02.Ranked);
        localStorage.setItem("imune", ID02.Imune);
        localStorage.setItem("risco", ID02.Risco);
        localStorage.setItem("cargo", ID02.Cargo);
        localStorage.setItem("userdate_img", ID02.Imagem);
        localStorage.setItem("level_points_img", ID02.Level_Image);
        localStorage.setItem("sequence_img", ID02.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID02.Ranked_Image);
        localStorage.setItem("cargo_img", ID02.Cargo_Image);
    } 
    else if (username == "gece #9960" && password == "94545" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "' gece ✪#9960" && password == "-94545-" || username == "Gece" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID03.Nome);
        localStorage.setItem("points", ID03.Pontos);
        localStorage.setItem("level_points", ID03.Level_Pontos);
        localStorage.setItem("sequence", ID03.Sequencia);
        localStorage.setItem("points_mitics", ID03.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID03.Ranked);
        localStorage.setItem("imune", ID03.Imune);
        localStorage.setItem("risco", ID03.Risco);
        localStorage.setItem("cargo", ID03.Cargo);
        localStorage.setItem("userdate_img", ID03.Imagem);
        localStorage.setItem("level_points_img", ID03.Level_Image);
        localStorage.setItem("sequence_img", ID03.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID03.Ranked_Image);
        localStorage.setItem("cargo_img", ID03.Cargo_Image);
    } 
    else if (username == "Porito#4930" && password == "34777" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "亗𝓟𝓲𝓮𝓬𝓴亗#4930" && password == "-34777-" || username == "Mono" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID04.Nome);
        localStorage.setItem("points", ID04.Pontos);
        localStorage.setItem("level_points", ID04.Level_Pontos);
        localStorage.setItem("sequence", ID04.Sequencia);
        localStorage.setItem("points_mitics", ID04.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID04.Ranked);
        localStorage.setItem("imune", ID04.Imune);
        localStorage.setItem("risco", ID04.Risco);
        localStorage.setItem("cargo", ID04.Cargo);
        localStorage.setItem("userdate_img", ID04.Imagem);
        localStorage.setItem("level_points_img", ID04.Level_Image);
        localStorage.setItem("sequence_img", ID04.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID04.Ranked_Image);
        localStorage.setItem("cargo_img", ID04.Cargo_Image);
    } 
    else if (username == "fehtheworld#9360" && password == "52014" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "fehtheworld#9360" && password == "-52014-" || username == "Fehtheworld" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID05.Nome);
        localStorage.setItem("points", ID05.Pontos);
        localStorage.setItem("level_points", ID05.Level_Pontos);
        localStorage.setItem("sequence", ID05.Sequencia);
        localStorage.setItem("points_mitics", ID05.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID05.Ranked);
        localStorage.setItem("imune", ID05.Imune);
        localStorage.setItem("risco", ID05.Risco);
        localStorage.setItem("cargo", ID05.Cargo);
        localStorage.setItem("userdate_img", ID05.Imagem);
        localStorage.setItem("level_points_img", ID05.Level_Image);
        localStorage.setItem("sequence_img", ID05.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID05.Ranked_Image);
        localStorage.setItem("cargo_img", ID05.Cargo_Image);
    } 
    else if (username == "Krap #1541" && password == "17075" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "Krap ♛#1541" && password == "-17075-" || username == "Krap" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID06.Nome);
        localStorage.setItem("points", ID06.Pontos);
        localStorage.setItem("level_points", ID06.Level_Pontos);
        localStorage.setItem("sequence", ID06.Sequencia);
        localStorage.setItem("points_mitics", ID06.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID06.Ranked);
        localStorage.setItem("imune", ID06.Imune);
        localStorage.setItem("risco", ID06.Risco);
        localStorage.setItem("cargo", ID06.Cargo);
        localStorage.setItem("userdate_img", ID06.Imagem);
        localStorage.setItem("level_points_img", ID06.Level_Image);
        localStorage.setItem("sequence_img", ID06.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID06.Ranked_Image);
        localStorage.setItem("cargo_img", ID06.Cargo_Image);
    } 
    else if (username == "Buddha#5046" && password == "49120" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "Buddha#5046" && password == "-49120-" || username == "Buddha" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID07.Nome);
        localStorage.setItem("points", ID07.Pontos);
        localStorage.setItem("level_points", ID07.Level_Pontos);
        localStorage.setItem("sequence", ID07.Sequencia);
        localStorage.setItem("points_mitics", ID07.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID07.Ranked);
        localStorage.setItem("imune", ID07.Imune);
        localStorage.setItem("risco", ID07.Risco);
        localStorage.setItem("cargo", ID07.Cargo);
        localStorage.setItem("userdate_img", ID07.Imagem);
        localStorage.setItem("level_points_img", ID07.Level_Image);
        localStorage.setItem("sequence_img", ID07.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID07.Ranked_Image);
        localStorage.setItem("cargo_img", ID07.Cargo_Image);
    } 
    else if (username == "Shuba Duck#4828" && password == "73229" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "Shuba Duck#4828" && password == "-73229-" || username == "Trick" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID08.Nome);
        localStorage.setItem("points", ID08.Pontos);
        localStorage.setItem("level_points", ID08.Level_Pontos);
        localStorage.setItem("sequence", ID08.Sequencia);
        localStorage.setItem("points_mitics", ID08.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID08.Ranked);
        localStorage.setItem("imune", ID08.Imune);
        localStorage.setItem("risco", ID08.Risco);
        localStorage.setItem("cargo", ID08.Cargo);
        localStorage.setItem("userdate_img", ID08.Imagem);
        localStorage.setItem("level_points_img", ID08.Level_Image);
        localStorage.setItem("sequence_img", ID08.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID08.Ranked_Image);
        localStorage.setItem("cargo_img", ID08.Cargo_Image);
    } 
    else if (username == "JasonMiler#4652" && password == "27114" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "JasonMiler#4652" && password == "-27114-" || username == "JasonMiler" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID09.Nome);
        localStorage.setItem("points", ID09.Pontos);
        localStorage.setItem("level_points", ID09.Level_Pontos);
        localStorage.setItem("sequence", ID09.Sequencia);
        localStorage.setItem("points_mitics", ID09.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID09.Ranked);
        localStorage.setItem("imune", ID09.Imune);
        localStorage.setItem("risco", ID09.Risco);
        localStorage.setItem("cargo", ID09.Cargo);
        localStorage.setItem("userdate_img", ID09.Imagem);
        localStorage.setItem("level_points_img", ID09.Level_Image);
        localStorage.setItem("sequence_img", ID09.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID09.Ranked_Image);
        localStorage.setItem("cargo_img", ID09.Cargo_Image);
    }
    else if (username == "Nando_#7813" && password == "51450" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "Nando_#7813" && password == "-51450-" || username == "Nando" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID10.Nome);
        localStorage.setItem("points", ID10.Pontos);
        localStorage.setItem("level_points", ID10.Level_Pontos);
        localStorage.setItem("sequence", ID10.Sequencia);
        localStorage.setItem("points_mitics", ID10.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID10.Ranked);
        localStorage.setItem("imune", ID10.Imune);
        localStorage.setItem("risco", ID10.Risco);
        localStorage.setItem("cargo", ID10.Cargo);
        localStorage.setItem("userdate_img", ID10.Imagem);
        localStorage.setItem("level_points_img", ID10.Level_Image);
        localStorage.setItem("sequence_img", ID10.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID10.Ranked_Image);
        localStorage.setItem("cargo_img", ID10.Cargo_Image);
    } 
    else if (username == "Stormrazor#4770" && password == "91209" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "Stormrazor#4770" && password == "-91209-" || username == "Stormrazor" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID11.Nome);
        localStorage.setItem("points", ID11.Pontos);
        localStorage.setItem("level_points", ID11.Level_Pontos);
        localStorage.setItem("sequence", ID11.Sequencia);
        localStorage.setItem("points_mitics", ID11.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID11.Ranked);
        localStorage.setItem("imune", ID11.Imune);
        localStorage.setItem("risco", ID11.Risco);
        localStorage.setItem("cargo", ID11.Cargo);
        localStorage.setItem("userdate_img", ID11.Imagem);
        localStorage.setItem("level_points_img", ID11.Level_Image);
        localStorage.setItem("sequence_img", ID11.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID11.Ranked_Image);
        localStorage.setItem("cargo_img", ID11.Cargo_Image);
    } 
    else if (username == "Khyago?#1455" && password == "35620" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "Khyago?#1455" && password == "-35620-" || username == "Khyago" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID12.Nome);
        localStorage.setItem("points", ID12.Pontos);
        localStorage.setItem("level_points", ID12.Level_Pontos);
        localStorage.setItem("sequence", ID12.Sequencia);
        localStorage.setItem("points_mitics", ID12.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID12.Ranked);
        localStorage.setItem("imune", ID12.Imune);
        localStorage.setItem("risco", ID12.Risco);
        localStorage.setItem("cargo", ID12.Cargo);
        localStorage.setItem("userdate_img", ID12.Imagem);
        localStorage.setItem("level_points_img", ID12.Level_Image);
        localStorage.setItem("sequence_img", ID12.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID12.Ranked_Image);
        localStorage.setItem("cargo_img", ID12.Cargo_Image);
    } 
    else if (username == "!Kizumi#9129" && password == "58267" {
        alert("Servidor em Manuntenção");
    }
    else if (username == "!Kizumi#9129" && password == "-58267-" || username == "Kizumi" && password == "modskin" ) {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("user_name", ID13.Nome);
        localStorage.setItem("points", ID13.Pontos);
        localStorage.setItem("level_points", ID13.Level_Pontos);
        localStorage.setItem("sequence", ID13.Sequencia);
        localStorage.setItem("points_mitics", ID13.Pontos_Miticos);
        localStorage.setItem("ranked_mitico", ID13.Ranked);
        localStorage.setItem("imune", ID13.Imune);
        localStorage.setItem("risco", ID13.Risco);
        localStorage.setItem("cargo", ID13.Cargo);
        localStorage.setItem("userdate_img", ID13.Imagem);
        localStorage.setItem("level_points_img", ID13.Level_Image);
        localStorage.setItem("sequence_img", ID13.Sequencia_Image);
        localStorage.setItem("ranked_mitico_img", ID13.Ranked_Image);
        localStorage.setItem("cargo_img", ID13.Cargo_Image);
    } 
    else {
        loginErrorMsg.style.opacity = 1;
        localStorage.clear();
    }
})
