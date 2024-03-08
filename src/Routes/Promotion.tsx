import { useEffect, useState } from "react";
import Api from "../AxiosConfig/Api";
import Loading from "../components/Loading";
import { TypeProduct } from "../Types/TypeProduct";
import { Link, useNavigate } from "react-router-dom";
import VerificationLogin from "../components/VerificationLogin";

const Promotion = ()=>{

    const [arrayPromotion, setArrayPromotion] = useState<TypeProduct[] | null>(null)
    const navigate = useNavigate()

    const productgetapi = async ()=>{
        try{
            const res = await Api({url: "promotion", method: "get"})
            console.log(res)
            setArrayPromotion(res.data)
        }catch(err){
            alert(`Algo deu errado ${err}` )
    }}

    const Verification = async ()=>{
        const login = await VerificationLogin()
        if (!login) {
            navigate('/')
        }else{
            productgetapi()
        }
     }

    useEffect(()=>{
        Verification()
        console.log('rodouuu')
    }, [])

    return(
        <div>
            <h1 className=" text-center font-extrabold text-xl">Promoções ativas</h1>
            <div className="flex items-center justify-center">
            {arrayPromotion ? 
                <div className="w-90% text-center">
                    <table className="my-5 container border border-custom h-10 bg-white" border={1}>
                        <thead className="border-b-2 border-custom ">
                            <tr className=" border-custom">
                                <th className=" border-custom font-bold">id</th>
                                <th className=" border-custom font-bold">nome</th>
                                <th className=" border-custom max-w-[100px]">descrição</th>
                                <th className=" border-custom">Preço original</th>
                                <th className=" border-custom">Preço atual</th>
                                <th className=" border-custom">Unidades</th>
                                <th className=" border-custom">Promoção</th>

                            </tr>
                        </thead >
                        <tbody className=" border-custom">
                            {arrayPromotion.map((res)=>{
                                return(
                                    <tr className=" border-custom" key={res.id}>
                                        <th className="truncate max-w-[100px] opacity-50 border-custom bg-green-400">{res.id}</th>
                                        <th className="truncate max-w-[100px] opacity-50 border-custom">{res.title}</th>
                                        <th className="truncate max-w-[100px] opacity-50 border-custom">{res.description}</th>
                                        <th className="truncate max-w-[100px] opacity-50 border-custom">R$:{res.price}</th>
                                        <th className="truncate max-w-[100px] opacity-50 border-custom">R$:{res.newprice}</th>
                                        <th className="truncate max-w-[100px] opacity-50 border-custom">{res.unit}</th>
                                        <th className="truncate max-w-[100px] opacity-50 border-custom">{res.discount}</th>
                                    </tr>
                                )
                            })}
                        </tbody> 
                    </table>

                    <div>
                        
                            <Link className="py-3 px-3 bg-yellow-500 rounded" to={`/createpromotion`}>Criar Promoção</Link>    
                        
                    </div>
                </div>
                :
                <Loading />
            }
        </div>
        </div>
    )
}

export default Promotion