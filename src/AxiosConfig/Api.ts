import axios from "axios";

const ModalApi = axios.create({
    baseURL: 'http://localhost:4000',
    headers : {
        accept: 'application/x-www-form-urlencoded',
      }
})


type TypeApi  = {
    url: string,
    Authorization?: string,
    method: 'get' | 'post' | 'put' | 'delete',
    data: {
        login: string,
        password: string
    }
}

const Api = async ({url, method, data} : TypeApi)=>{
    const res = await ModalApi.request({
        url,
        method,
        data: new URLSearchParams(data),
        
        
    })
    return res
}

export default Api