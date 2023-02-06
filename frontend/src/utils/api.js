import axios from "axios"

export const getContent = ()=>{
    return axios.get('http://localhost:8080/content');
}
export const getData = ()=>{
    return axios.get('http://localhost:8080/statistics');
}
export const postLogin = ()=>{
    return axios.get('http://localhost:8080/statistics');
}
export const postSignup = ()=>{
    return axios.get('http://localhost:8080/statistics');
}
export const updateRole =async(id,data,token)=>{
    const res = await axios.post(`http://localhost:8080/admin/${id}`,data, {
        headers: {
            authorization: token
        }
    })
}