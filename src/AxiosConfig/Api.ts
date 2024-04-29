import axios from "axios";
import { TypeProductOptional } from "../Types/TypeProduct";
import VerificationLogin from "../components/VerificationLogin";

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
    product?: TypeProductOptional | null,
    products?: TypeProductOptional[],
    NewCount?: {
        email: string,
        password: string,
        password1: string
    } | null
}

const Api = async ({url, method, data, product, products, NewCount} : TypeApi)=>{


    if (!data) {
        console.log('foi')
        const save = localStorage.getItem('login')
        if (save) {
            data = JSON.parse(save)
        }else{
           VerificationLogin()
        }
    }

    try {
        const res = await ModalApi.request({
            url,
            method,
            data: {
                title: product?.title,
                description: product?.description,
                unit: product?.unit,
                price: product?.price,
                productionprice: product?.productionprice,
                id: product?.id,
                newprice: product?.newprice,
                discount: product?.discount,
                products,
                email: NewCount?.email,
                password: NewCount?.password,
                password1: NewCount?.password1
    
            },
            headers: {
                admin: data?.login,
                password: data?.password
            }
            
        })
        return res.data
    } catch (error) {
        alert('Servidor fora do ar no momento')
    }

}

export default Api