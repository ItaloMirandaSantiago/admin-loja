import { useState } from "react"
import Api from "../AxiosConfig/Api"
import { useNavigate } from "react-router-dom"

const CreateProduct = ()=> {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [unit, setUnit] = useState(0)
    const [description, setDescription] = useState('')
    const [check, setCheck] = useState(false)
    async function enviar() {
        let save = localStorage.getItem('login')

        if (save !== null) {
            const product = {
                title, price, unit, description
            }
            const data = JSON.parse(save)
        
            const res = await Api({url:'/admin', method:"post", data, product}) 
            console.log(res)  
        }
        if (check) {
            navigate("/home")
        }
    }

    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className=" text-4xl font-extrabold mb-3">Cadastrar novo produto</h1>
            <form className="text-white">
                <div className="flex flex-col items-center gap-3">
                    <div className=" bg-slate-700 p-5 w-full">
                        <label className="text-white" htmlFor="title">Nome</label>
                        <input name="title" className=" bg-transparent border-b" type="text" value={title} onChange={(e)=> setTitle(e.target.value)}  />
                    </div>
                    <div className=" bg-slate-700 p-5 w-full">
                        <label className="text-white" htmlFor="preco">Preço R$</label>
                        <input name="preco" className=" bg-transparent border-b"  type="number" value={price} onChange={(e)=> setPrice(parseFloat(e.target.value))} />
                    </div>
                    <div className=" bg-slate-700 p-5 w-full">
                        <label className="text-white" htmlFor="unit">Unidades</label>
                        <input name="unit" className=" bg-transparent border-b"  type="number" value={unit} onChange={(e)=> setUnit(parseFloat(e.target.value))}  />
                    </div>
                    <textarea name="description" className=" bg-transparent border p-2 bg-slate-700 w-full" placeholder="Descrição" rows={6} value={description} onChange={(e)=> {description.length < 200 && setDescription(e.target.value)}}  />
                    <div className="text-right w-full">
                        <p className="">{description.length}/200</p>
                    </div>

                </div>
               
                <label htmlFor="meuCheckbox" className="flex items-center">
                    <input
                    type="checkbox"
                    onClick={()=>setCheck(!check)}
                    id="meuCheckbox"
                    name="meuCheckbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">Continuar cadastrando produtos</span>
                </label>
                <button className="py-2 px-3 bg-green-600 rounded" onClick={enviar}>Concluir</button>
            </form>
        </div>
    )
}

export default CreateProduct