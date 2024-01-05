import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../AxiosConfig/Api"
import { TypeProduct } from "../Types/TypeProduct"

const CreatePromotion= ()=>{
    const { arrayproductstring }: { arrayproductstring?: string } = useParams()
    const [products, setProducts] = useState<TypeProduct[] | null>(null)
    const [newprice, setNewprice] = useState<string>('')
    const [date, setDate] = useState<number | null>(null)

    const getproduct = async (event: TypeProduct)=>{
        if (newprice && date && products) {
            const product = await Api({url: 'createpromotion', method: 'post', product: {id:event.id, newprice, discount: date}})
            if (product.sucess) {
                setProducts(products.slice(1))
            }   
        }
   
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
        <div className=" w-screen text-center">
            <h1>Criar Promoção</h1>
            <div className="flex justify-center items-center">
                {products && 
                <div className=" bg-headeTable w-90%">
                    <div className="flex flex-row bg-slate-600 rounded-md  gap-4">
                        <ul>
                            <li>Codigo: {products[0].id}</li>
                            <li>Titulo : {products[0].title}</li>
                            <li>Descrição: {products[0].description}</li>
                            <li>Preço: {products[0].price}</li>
                            <li>Unidades: {products[0].unit}</li>
                            <li>Custo de produção: {products[0].productionprice}</li>
                        </ul>   
                    </div>
                    <div className="mt-5">
                        <div className="flex flex-row justify-around items-center">
                            <div className="flex flex-col text-left">
                                <label htmlFor="">Data de expiração</label>
                                <input className="p-3 border bg-slate-500 rounded-md cursor-pointer" 
                                min={new Date().toISOString().split('T')[0]} 
                                 onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                                    const selectedDate = new Date(e.target.value);
                                    const currentDate = new Date();
                                
                                    // Ajusta as horas, minutos, segundos e milissegundos para zero
                                    selectedDate.setHours(0, 0, 0, 0);
                                    currentDate.setHours(0, 0, 0, 0);
                                
                                    // Calcula a diferença em milissegundos
                                    const differenceInMilliseconds = currentDate.getTime() - selectedDate.getTime();
                                
                                    // Converte a diferença para dias
                                    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
                                    setDate(-differenceInDays + 1)
                                }}
                                type="date" />
                            </div>
                            <div className="flex flex-col text-left">
                                <label htmlFor="">Preço</label>
                                <input className="p-3 border bg-slate-500 rounded-md" type="text" placeholder="Preço da promoção" value={newprice} onChange={(e)=>{setNewprice(e.target.value)  }} />
                            </div>
                            
                        </div>
                        <button className="p-3 border bg-green-600 hover:bg-green-700 rounded-md" onClick={()=>getproduct(products[0])}>Enviar</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default CreatePromotion