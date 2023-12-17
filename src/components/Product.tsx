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
        <div className="flex items-center justify-center">
            <table className="my-5 container border border-custom h-10 bg-white" border={1}>
                <thead className="border-b-2 border-custom ">
                    <tr className=" border-custom">
                        <th className=" border-custom font-bold">id</th>
                        <th className=" border-custom font-bold">nome</th>
                        <th className=" border-custom max-w-[100px]">descrição</th>
                        <th className=" border-custom">Preço</th>
                        <th className=" border-custom">Unidades</th>
                        <th className=" border-custom">Excluir</th>
                        <th className=" border-custom">Editar</th>
                    </tr>
                </thead >
                <tbody className=" border-custom">
                    {arrayproduct ? arrayproduct.map((res)=>{
                        return(
                            <tr className=" border-custom" key={res.id}>
                                <th className="truncate max-w-[100px] opacity-50 border-custom bg-green-400">{res.id}</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom">{res.title}</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom">{res.description}</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom">R$:{res.price}</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom">{res.unit}</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom cursor-pointer" onClick={async ()=>{ await DeleteProduct(res.id); refresh?.setRefresh(true)}}>Excluir</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom cursor-pointer" onClick={()=>{Edit?.setEditResApi(res)}}>Editar</th>

                            </tr>
                        )
                    }) 
                    :
                    <Loading />
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Product