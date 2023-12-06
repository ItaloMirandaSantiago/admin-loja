import { useState } from "react"
import Api from "../AxiosConfig/Api"

const CreateProduct = ()=> {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [unit, setUnit] = useState(0)
    const [description, setDescription] = useState('')
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
    }

    return(
        <div>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Nome" />
            <input type="number" value={price} onChange={(e)=> setPrice(parseFloat(e.target.value))} placeholder="preço" />
            <input type="number" value={unit} onChange={(e)=> setUnit(parseFloat(e.target.value))} placeholder="Unidades" />
            <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Descrição" />
            <button className="py-2 px-3 bg-green-600 rounded" onClick={enviar}>Concluir</button>
        </div>
    )
}

export default CreateProduct