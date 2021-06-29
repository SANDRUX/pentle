import axios from "axios";

const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
.then(resolve => console.log(resolve))
.catch(err => console.log(err))
}

getData()