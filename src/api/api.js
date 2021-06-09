import axios from 'axios'

const userReq = axios.create({
    baseURL: "http://127.0.0.1:8080/api/v1/user"
})

const movieInfoReq = axios.create({
    baseURL: "http://127.0.0.1:8080/api/v1/movie"
})


export const apiUserLogin = (data) => userReq.post("/login", data)
export const apiUserSiginUp = (data) => userReq.post("/signup", data)