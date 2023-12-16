import { useContext, useEffect, useState } from "react"
import Api from "../AxiosConfig/Api"
import DeleteProduct from "./DeleteProduct"
import { EditContext } from "../context/EditContext"
import {TypeProduct} from "../Types/TypeProduct"
import { RefreshContext } from "../context/Refresh"
import Loading from "./Loading"



const Product = ()=>{
    const [arrayproduct, setArrayproduct] = useState<TypeProduct[] | null>(null)
    const Edit = useContext(EditContext)
    const refresh = useContext(RefreshContext)

    const productgetapi = async ()=>{
        try{
            const res = await Api({url: "products", method: "get"})
            console.log(res)
            setArrayproduct(res.data)
        }catch(err){

    }}

    useEffect(()=>{
        productgetapi()
        console.log('rodouuu')
        refresh?.setRefresh(false)
    }, [refresh?.refresh])

    
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
                {arrayproduct ? arrayproduct.map((res)=>{
                    return(
                        <tr className="border border-custom" key={res.id}>
                            <th className="truncate max-w-[100px] border border-custom">{res.id}</th>
                            <th className="truncate max-w-[100px] border border-custom">{res.title}</th>
                            <th className="truncate max-w-[100px] border border-custom">{res.description}</th>
                            <th className="truncate max-w-[100px] border border-custom">{res.price}</th>
                            <th className="truncate max-w-[100px] border border-custom">{res.unit}</th>
                            <th className="truncate max-w-[100px] border border-custom cursor-pointer" onClick={async ()=>{ await DeleteProduct(res.id); refresh?.setRefresh(true)}}>Excluir</th>
                            <th className="truncate max-w-[100px] border border-custom cursor-pointer" onClick={()=>{Edit?.setEditResApi(res)}}>Editar</th>

                        </tr>
                    )
                }) 
                :
                <Loading />
                }
            </tbody>
        </table>
    )
}

export default Product