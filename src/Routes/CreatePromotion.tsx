import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../AxiosConfig/Api"
import { TypeProduct } from "../Types/TypeProduct"

const CreatePromotion= ()=>{
    const { arrayproductstring }: { arrayproductstring?: string } = useParams()
    const [products, setProducts] = useState<TypeProduct[] | null>(null)
    
    const getproduct = async (event: TypeProduct)=>{
    
        const product = await Api({url: 'createpromotion', method: 'post', product: {id:event.id},})
   
    }

    useEffect(()=>{
        console.log('useeffect')
        console.log(arrayproductstring)
        if (arrayproductstring) {
            const arrayid = JSON.parse(arrayproductstring)
            setProducts(arrayid)  
        }
    }, [arrayproductstring])

    return(
        <div className=" w-screen">
            <h1>Criar Promoção</h1>
            <div className="flex justify-center items-center">
                {products && 
                <div>
                    <div className="flex bg-slate-600 rounded-md w-90% gap-4">
                        <ul>
                            <li>Codigo: {products[0].id}</li>
                            <li>Titulo : {products[0].title}</li>
                            <li>Descrição: {products[0].description}</li>
                        </ul>
                        <ul>
                            <li>Preço: {products[0].price}</li>
                            <li>Unidades: {products[0].unit}</li>
                            <li>Custo de produção: {products[0].productionprice}</li>
                        </ul>
                            
                    </div>
                    <div className="mt-5">
                        <div>
                            <input className="py-3 border bg-slate-500 rounded-md" min={new Date().toISOString().split('T')[0]} type="date" />
                            <input className="py-3 border bg-slate-500 rounded-md" type="text" placeholder="Preço da promoção" />
                        </div>
                        <button onClick={()=>getproduct(products[0])}>Enviar</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default CreatePromotion