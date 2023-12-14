import { useContext, useState } from "react"
import { EditContext } from "../context/EditContext"

const EditProduct = ()=>{
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [unit, setUnit] = useState(0)
    const [description, setDescription] = useState('')
    const Edit = useContext(EditContext)

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
                        <input name="preco" className=" bg-transparent border-b w-3/4"  type="number" value={price} onChange={(e)=> setPrice(parseFloat(e.target.value))} />
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
               
                <button type="button" className="py-2 px-3 bg-green-600 rounded mr-4">Concluir</button>
                <button onClick={()=>Edit?.setEditResApi(null)} className="py-2 mt-5 px-3 bg-red-600 hover:bg-slate-600 rounded">Voltar</button>
            </form>
        </div>
    )
}

export default EditProduct