const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Porito#0000" && password === "0000") {
        location.href = ("https://testsmodskin2.w3spaces.com/testers-logged.html");
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
    }
    if (username === "user" && password === "web_dev") {
        location.href = ("https://testsmodskin2.w3spaces.com/testers-logged.html");
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
    } 
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
