import { useEffect, useState } from "react"
import Product from "./Product"
import Api from "../AxiosConfig/Api"
import { useNavigate } from "react-router-dom"



const DeleteProduct = ()=>{

    const [arrayproduct, setArrayproduct] = useState<typeProduct[] | null>(null)
    const navigate = useNavigate()

    type typeProduct = {
        title: string,
        description: string,
        unit: number,
        price: number,
        id: number
    }
    
        useEffect(()=>{
            const productgetapi = async ()=>{
                    const res = await Api({url: "products", method: "get"})
                    setArrayproduct(res.data.data)
                }
            productgetapi()
        }, [])

        async function excluir(id: number) {
            console.log(id)
            let save = localStorage.getItem('login')
            if (save !== null) {
                const data = JSON.parse(save)
                const res = await Api({url: "deleteproduct", data, method: "delete", product:{id}}) 
                navigate("/delete")
                console.log(res)  
            }
             
        }

    return(
        <div className=" text-center">
            <h2 className=" font-bold text-4xl">Excluir produtos</h2>
            <ul className="grid grid-cols-4 justify-center items-center justify-items-center">
                {arrayproduct && arrayproduct.map((res)=>{
                    return(
                        <li key={res.id} onClick={()=>excluir(res.id)} className="p-4 h-3/4 cursor-pointer hover:bg-slate-600 w-3/4 mt-4 rounded bg-emerald-500 text-white">{res.id} - {res.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DeleteProduct