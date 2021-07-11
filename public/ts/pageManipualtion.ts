const loginButton = document.querySelector<HTMLButtonElement>(".login")
const signupButton = document.querySelector<HTMLButtonElement>(".signin");
const startupContainer = document.querySelector<HTMLDivElement>('.startup-container')
const exitButton = document.querySelector<HTMLDivElement>(".exit-box");

const registerContainer = document.querySelector(".register-container") as HTMLElement
const loginContainer = document.querySelector(
  ".login-container"
) as HTMLElement;

loginButton?.addEventListener("click", ()=> {
    exitButton?.classList.remove("hidden")
    loginContainer?.classList.remove("hidden");
    startupContainer?.classList.add("hidden")
})

signupButton?.addEventListener("click", () => {
  exitButton?.classList.remove("hidden");
  registerContainer?.classList.remove("hidden")
  startupContainer?.classList.add("hidden");
});

exitButton?.addEventListener("click", ()=> {
    exitButton.classList.add("hidden")
    registerContainer.classList.add("hidden")
    startupContainer?.classList.remove("hidden");
    loginContainer?.classList.add("hidden");
})