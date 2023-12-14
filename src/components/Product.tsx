import { useEffect, useState } from "react"
import Api from "../AxiosConfig/Api"
import DeleteProduct from "./DeleteProduct"

type typeProduct = {
    title: string,
    description: string,
    unit: number,
    price: number,
    id: number
}

const Product = ()=>{
    const [arrayproduct, setArrayproduct] = useState<typeProduct[] | null>(null)
    useEffect(()=>{
        const productgetapi = async ()=>{
                const res = await Api({url: "products", method: "get"})
                setArrayproduct(res.data.data)
            }
        productgetapi()
    }, [])

    
    return(
        <table className="my-5 container border border-custom" border={1}>
            <thead className="border border-custom bg-headeTable">
                <tr className="border border-custom">
                    <th className="border border-custom font-bold">id</th>
                    <th className="border border-custom font-bold">nome</th>
                    <th className="border border-custom max-w-[100px]">descrição</th>
                    <th className="border border-custom">Preço</th>
                    <th className="border border-custom">Unidades</th>
                    <th className="border border-custom">Excluir</th>
                    <th className="border border-custom">Editar</th>
                </tr>
            </thead >
            <tbody className="border border-custom">
                {arrayproduct && arrayproduct.map((res)=>{
                    return(
                        <tr className="border border-custom" key={res.id}>
                            <th className="truncate max-w-[100px] border border-custom">{res.id}</th>
                            <th className="truncate max-w-[100px] border border-custom">{res.title}</th>
                            <th className="truncate max-w-[100px] border border-custom">{res.description}</th>
                            <th className="truncate max-w-[100px] border border-custom">{res.price}</th>
                            <th className="truncate max-w-[100px] border border-custom">{res.unit}</th>
                            <th className="truncate max-w-[100px] border border-custom cursor-pointer" onClick={()=>{DeleteProduct(res.id)}}>Excluir</th>
                            <th className="truncate max-w-[100px] border border-custom cursor-pointer" onClick={()=>{DeleteProduct(res.id)}}>Editar</th>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Product