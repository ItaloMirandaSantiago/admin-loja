import { useContext, useEffect, useState } from "react"
import Api from "../AxiosConfig/Api"
import DeleteProduct from "./DeleteProduct"
import { EditContext } from "../context/EditContext"
import {TypeProduct} from "../Types/TypeProduct"
import { RefreshContext } from "../context/Refresh"
import Loading from "./Loading"
import { Link } from "react-router-dom"



const Product = ()=>{
    const [arrayproduct, setArrayproduct] = useState<TypeProduct[] | null>(null)
    const [arraychekbox, setArrayCheck] = useState<number[]>([])
    const Edit = useContext(EditContext)
    const refresh = useContext(RefreshContext)

    const productgetapi = async ()=>{
        try{
            const res = await Api({url: "products", method: "get"})
            console.log(res)
            setArrayproduct(res.data)
        }catch(err){

    }}

    const CheckBox = (id: number)=>{
        let verification = true
        for (let i = 0; i < arraychekbox.length; i++) {
            if (arraychekbox[i] === id) {
                const deleteId = arraychekbox.filter(res=> res !== id)

                setArrayCheck(deleteId)

                verification = false
            }
        }
        if(verification) setArrayCheck([...arraychekbox, id])
    }

    useEffect(()=>{
        console.log(arraychekbox)
    }, [arraychekbox])

    useEffect(()=>{
        productgetapi()
        console.log('rodouuu')
        refresh?.setRefresh(false)
    }, [refresh?.refresh])

    
    return(
        <div className="flex items-center justify-center">
            
            {arrayproduct ? 
            <div className="my-5 container border border-custom h-10 bg-white pb-3">
                <table className="container border border-custom bg-white" border={1}>
                    <thead className="border-b-2 border-custom ">
                        <tr className=" border-custom">
                            <th className=" border-custom font-bold">check</th>
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
                        {arrayproduct.map((res)=>{
                            return(
                                <tr className=" border-custom" key={res.id}>
                                    <th className="truncate max-w-[100px] opacity-50 border-custom bg-white"><input type="checkbox" onChange={()=>{CheckBox(res.id)}} value={res.id}/></th>
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
                        
                        }
                    </tbody>
                </table>
                <div className="my-3 flex justify-center items-center gap-3">
                    <Link className="py-2 px-3 bg-green-500 rounded hover:bg-green-600" to={'/create'}>Criar produto</Link>
                    <div>
                        {arraychekbox.length <= 0? 
                            <button className="py-2 px-3 bg-yellow-300 rounded" disabled={false}>Criar Promoção</button>              
                            :
                            <Link className="py-3 px-3 bg-yellow-500 rounded" to={'/createpromotion'}>Criar Promoção</Link>    
                        }
                        
                    </div>
                </div>
            </div>
            :
            <Loading />
        }
        </div>
    )
}

export default Product