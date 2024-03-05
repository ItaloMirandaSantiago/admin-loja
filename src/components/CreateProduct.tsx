import { useEffect, useState } from "react"
import Api from "../AxiosConfig/Api"
import { useNavigate } from "react-router-dom"
import Loading from "./Loading"

const CreateProduct = ()=> {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState<string>('')
    const [productionprice, setProductionPrice] = useState<string>('')
    const [unit, setUnit] = useState(0)
    const [description, setDescription] = useState('')
    const [check, setCheck] = useState(true )
    const [loading, setLoading] = useState<boolean>(false)
    
    async function enviar() {
        let save = localStorage.getItem('login')

        if (save !== null && !isNaN(Number(price)) && title.length && description.length && unit > 0) {
            console.log(Number(price))
            
            const product = {
                title, price, unit, description, productionprice
            }
            const data = JSON.parse(save)
            try{
                const res = await Api({url:'/admin', method:"post", data, product}) 

                if (res.sucess) {
    
                    if (check) {
                        navigate("/home")
                    }else{
                        console.log('else')
                        setDescription('')
                        setUnit(0)
                        setTitle('')
                        setPrice('')
                        setProductionPrice('')
                        setLoading(false)
                    }
                }else{
                    console.log(res)
                    setLoading(false)
                    alert('Parâmetros invalídos')
                }
            }catch(err){
                setLoading(false)
                alert(`servidor fora do ar! Error: 
                ${err}`)
            }
            
        }else{
            setLoading(false)
            alert('parâmetros invalidos, verifique se não passou alguma letra em "unidade" ou "preço" e se preencheu todos os campos')
        }
    }

    const verificationmonew = (e: string)=>{
        console.log(e)
        if (!isNaN(parseFloat(e))) {
            const formattedValue = parseFloat(price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).replace('R$', '');
              setPrice(formattedValue)
        }
    }


    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className=" mt-3 text-4xl font-extrabold mb-3 title-CreateProduct">Cadastrar novo produto</h1>
            <form className="text-white mb-3">
                <div className="flex flex-col items-center gap-3">

                        <input name="title" className="input_tap" type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Nome"  />
                    
                        <input name="preco" className="input_tap"  type="text" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="Preço" />
                    
                        <input name="preco" className="input_tap"  type="text" value={productionprice} onChange={(e)=> setProductionPrice(e.target.value)} placeholder="Preço de produção/compra" />
                    
                        <input name="unit" className="input_tap"  type="number" value={unit} onChange={(e)=> setUnit(parseFloat(e.target.value))} placeholder="Unidades"  />
                    
                    <textarea name="description" className=" border p-2 border-blue-600 w-full" placeholder="Descrição" rows={6} value={description} onChange={(e)=> {setDescription(e.target.value.length < 200 ? e.target.value : e.target.value.substring(0, 200))}}  />
                    <div className="text-right w-full">
                        <p className=" text-black">{description.length}/200</p>
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
                <button type="button" className="py-2 px-3 bg-green-600 rounded mr-4" onClick={()=>{setLoading(true); enviar() }}>Concluir</button>
                <button onClick={()=>navigate('/home')} className="py-2 mt-5 px-3 bg-red-600 hover:bg-slate-600 rounded">Voltar</button>

            </form>
            {loading && <Loading />}
        </div>
    )
}

export default CreateProduct