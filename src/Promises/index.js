//import axios from "/axios";

const axios = {}
const findUserInDB = (id) => {}

const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data)
})

const promise2 = findUserInDB(1)
promise2.then( (user) => {
    console.log(user)
})
console.log('finish')