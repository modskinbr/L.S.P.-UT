const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const mostrar = document.getElementById("logged")
const pop = document.getElementById("Pop");

mostrar.addEventListener("click", (e) => {
    e.preventDefault();
    const visibled = pop.style.visibility;

    if (visibled == hidden) {
        pop.style.visibility = "visible";
    }
    if (visibled == visible) {
        pop.style.visibility = "hidden";
    }
})

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const urlhref = "https://modskinbr.github.io/L.S.P.-UT/testers-logged.html"

    if (username === "Porito#0000" && password === "0000") {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
    }
    if (username === "user" && password === "web_dev") {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
    } 
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
