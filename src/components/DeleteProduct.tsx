import { useEffect, useState } from "react"
import Product from "./Product"
import Api from "../AxiosConfig/Api"
import { useNavigate } from "react-router-dom"



const DeleteProduct = async (id: number)=>{

    let save = localStorage.getItem('login')

    if (save !== null) {
        const data = JSON.parse(save)
        const res = await Api({url: "deleteproduct", data, method: "delete", product:{id}}) 
        console.log(res, id)
    }
}

export default DeleteProduct