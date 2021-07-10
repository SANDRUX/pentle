import axios from "axios";

const submit = document.querySelector("#submit") as HTMLButtonElement
const nameInputs = document.querySelectorAll<HTMLInputElement>(".playerIn");

submit.addEventListener("click", ()=> {
    nameInputs.forEach(e => {
        if((e.value).trim() !== ''){
            axios.post("users/users", {
                p1: nameInputs[0].value,
                p2: nameInputs[1].value,
              },
            )
              .then((response) => console.log(response))
              .catch((err) => console.log(err));
        }
    })
})