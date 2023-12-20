import { useContext, useEffect, useState } from "react";
import Api from "../AxiosConfig/Api";
import Loading from "../components/Loading";
import { EditContext } from "../context/EditContext";
import { TypeProduct } from "../Types/TypeProduct";
import { useNavigate } from "react-router-dom";

const Promotion = ()=>{

    const [arrayPromotion, setArrayPromotion] = useState<TypeProduct[] | null>(null)
    const navigate = useNavigate()

    const productgetapi = async ()=>{
        try{
            const res = await Api({url: "promotion", method: "get"})
            console.log(res)
            setArrayPromotion(res.data)
        }catch(err){
            console.log(err)
    }}

    useEffect(()=>{
        productgetapi()
        console.log('rodouuu')
    }, [])

    return(
        <div>
            <h1>Promoção</h1>
            <div className="flex items-center justify-center">
            <table className="my-5 container border border-custom h-10 bg-white" border={1}>
                <thead className="border-b-2 border-custom ">
                    <tr className=" border-custom">
                        <th className=" border-custom font-bold">id</th>
                        <th className=" border-custom font-bold">nome</th>
                        <th className=" border-custom max-w-[100px]">descrição</th>
                        <th className=" border-custom">Preço</th>
                        <th className=" border-custom">Unidades</th>
                        <th className=" border-custom">Promoção</th>
                        <th className=" border-custom">Adicionar</th>

                    </tr>
                </thead >
                <tbody className=" border-custom">
                    {arrayPromotion ? arrayPromotion.map((res)=>{
                        return(
                            <tr className=" border-custom" key={res.id}>
                                <th className="truncate max-w-[100px] opacity-50 border-custom bg-green-400">{res.id}</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom">{res.title}</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom">{res.description}</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom">R$:{res.price}</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom">{res.unit}</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom">{res.discount}</th>
                                <th className="truncate max-w-[100px] opacity-50 border-custom cursor-pointer" onClick={()=>navigate(`/createPromotion/${res}`)}>Adicionar</th>
                            </tr>
                        )
                    }) 
                    :
                    <Loading />
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Promotion