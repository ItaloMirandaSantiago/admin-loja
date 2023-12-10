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
    data?: {
        login: string,
        password: string
    }
    product?: {
        title?: string,
        description?: string,
        unit?: number,
        price?: number, 
        id?: number
    } | null
}

const Api = async ({url, method, data, product} : TypeApi)=>{
    console.log('req')
    const res = await ModalApi.request({
        url,
        method,
        data: {
            title: product?.title,
            description: product?.description,
            unit: product?.unit,
            price: product?.price,
            id: product?.id
        },
        headers: {
            admin: data?.login,
            password: data?.password
        }
        
    })
    return res
}

export default Api