import { useContext, useState } from "react"
import { EditContext } from "../context/EditContext"
import Api from "../AxiosConfig/Api"

import { RefreshContext } from "../context/Refresh"
import Loading from "./Loading"

const EditProduct = ()=>{
    const Edit = useContext(EditContext)
    const [title, setTitle] = useState(Edit?.EditResApi?.title)
    const [price, setPrice] = useState(Edit?.EditResApi?.price)
    const [unit, setUnit] = useState(Edit?.EditResApi?.unit)
    const [description, setDescription] = useState(Edit?.EditResApi?.description ? Edit?.EditResApi?.description : '')
    const refresh = useContext(RefreshContext)
    const [loading, setLoading] = useState<boolean>(false)

    async function put() {
        try{
           const response = await Api({url: 'edit', method: 'put', product: {title, description, unit, price, id: Edit?.EditResApi?.id}})
           if (response.sucess) {
                Edit?.setEditResApi(null)
                refresh?.setRefresh(true)
                setLoading(false)
           }
        }catch(err){
            alert('servidor fora do ar! Tente mais tarde')
        }
    }

    return(
        <div className="absolute w-3/4 h-full bg-slate-400 rounded flex flex-col justify-center items-center">
            <h1 className="text-2xl font-extrabold">Editar</h1>
            <form className="text-white w-3/4">
                <div className="flex flex-col items-center gap-3">
                    <div className=" bg-slate-700 rounded p-5 w-full flex justify-center items-center gap-3">
                        <label className="text-white" htmlFor="title">Nome</label>
                        <input name="title" className=" bg-transparent border-b w-3/4" type="text" value={title} onChange={(e)=> setTitle(e.target.value)}  />
                    </div>
                    <div className=" bg-slate-700 p-5 w-full flex justify-center items-center gap-3">
                        <label className="text-white" htmlFor="preco">Preço</label>
                        <input name="preco" className=" bg-transparent border-b w-3/4"  type="text" value={price} onChange={(e)=> setPrice(e.target.value)} />
                    </div>
                    <div className=" bg-slate-700 p-5 w-full flex justify-center items-center gap-3">
                        <label className="text-white" htmlFor="unit">Unidades</label>
                        <input name="unit" className=" bg-transparent border-b w-3/4"  type="number" value={unit} onChange={(e)=> setUnit(parseFloat(e.target.value))}  />
                    </div>
                    <textarea name="description" className=" border p-2 bg-slate-700 w-full" placeholder="Descrição" rows={6} value={description} onChange={(e)=> {description.length < 200 && setDescription(e.target.value)}}  />
                    <div className="text-right w-full">
                        <p className="">{description.length}/200</p>
                    </div>
                </div>
               
                <button onClick={()=>{put(); setLoading(true)}} type="button" className="py-2 px-3 bg-green-600 hover:bg-green-700 rounded mr-4 ">Concluir</button>
                <button onClick={()=>Edit?.setEditResApi(null)} className="py-2 mt-5 px-3 bg-red-600 hover:bg-slate-600 rounded">Voltar</button>
            </form>

            {loading && <Loading />}
        </div>
    )
}

export default EditProduct