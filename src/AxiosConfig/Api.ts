import axios from "axios";
import { TypeProductOptional } from "../Types/TypeProduct";

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
    data?: {
        login: string,
        password: string
    }
    product?: TypeProductOptional | null
}

const Api = async ({url, method, data, product} : TypeApi)=>{
    console.log('req')

    if (!data) {
        console.log('foi')
        const save = localStorage.getItem('login')
        if (save) {
            data = JSON.parse(save)
        }else{
           alert('senha ou login não constam no sistema, volte a home')
        }
       
    }
    const res = await ModalApi.request({
        url,
        method,
        data: {
            title: product?.title,
            description: product?.description,
            unit: product?.unit,
            price: product?.price,
            productionprice: product?.productionprice,
            id: product?.id
        },
        headers: {
            admin: data?.login,
            password: data?.password
        }
        
    })
    return res.data
}

export default Api