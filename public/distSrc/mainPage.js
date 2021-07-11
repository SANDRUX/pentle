"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var submit = document.querySelector("#submit");
var nameInputs = document.querySelectorAll(".playerIn");
submit.addEventListener("click", function () {
    nameInputs.forEach(function (e) {
        if ((e.value).trim() !== '') {
            axios_1.default.post("users/users", {
                p1: nameInputs[0].value,
                p2: nameInputs[1].value,
            })
                .then(function (response) { return console.log(response); })
                .catch(function (err) { return console.log(err); });
        }
    });
});
