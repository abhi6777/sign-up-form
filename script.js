const passwordInput = document.querySelector("#password");
const confPasswordInput = document.querySelector("#conf-password");
const submitButton = document.querySelector("#footer button");
const message = document.querySelector("#message");

check();

document.addEventListener("click", () => {
     check();
});

function check() {
    const passwordValue = passwordInput.value;
    const confPasswordValue = confPasswordInput.value;
    const messagePush = message;
    
    let messageText = "Password do not match";

    if (passwordValue === confPasswordValue) {
        passwordInput.classList.add("password-match");
        confPasswordInput.classList.add("password-match");

        // Remove the password-unMatch class if it exists
        passwordInput.classList.remove("password-unMatch");
        confPasswordInput.classList.remove("password-unMatch");
    } else {
        passwordInput.classList.remove("password-match");
        confPasswordInput.classList.remove("password-match");

        // Add the password-unMatch class
        passwordInput.classList.add("password-unMatch");
        confPasswordInput.classList.add("password-unMatch");
        messagePush.innerHTML = messageText;
        return;
    }
}
