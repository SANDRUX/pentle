"use strict";
var loginButton = document.querySelector(".login");
var signupButton = document.querySelector(".signin");
var startupContainer = document.querySelector('.startup-container');
var exitButton = document.querySelector(".exit-box");
var registerContainer = document.querySelector(".register-container");
var loginContainer = document.querySelector(".login-container");
loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener("click", function () {
    exitButton === null || exitButton === void 0 ? void 0 : exitButton.classList.remove("hidden");
    loginContainer === null || loginContainer === void 0 ? void 0 : loginContainer.classList.remove("hidden");
    startupContainer === null || startupContainer === void 0 ? void 0 : startupContainer.classList.add("hidden");
});
signupButton === null || signupButton === void 0 ? void 0 : signupButton.addEventListener("click", function () {
    exitButton === null || exitButton === void 0 ? void 0 : exitButton.classList.remove("hidden");
    registerContainer === null || registerContainer === void 0 ? void 0 : registerContainer.classList.remove("hidden");
    startupContainer === null || startupContainer === void 0 ? void 0 : startupContainer.classList.add("hidden");
});
exitButton === null || exitButton === void 0 ? void 0 : exitButton.addEventListener("click", function () {
    exitButton.classList.add("hidden");
    registerContainer.classList.add("hidden");
    startupContainer === null || startupContainer === void 0 ? void 0 : startupContainer.classList.remove("hidden");
    loginContainer === null || loginContainer === void 0 ? void 0 : loginContainer.classList.add("hidden");
});
