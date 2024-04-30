import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { TypeProduct } from "../Types/TypeProduct"
import Api from "../AxiosConfig/Api"

type productsIdorSale = {
    id: number,
    sale: number
}

const Sale = ()=>{
    const { arrayproductstring }: { arrayproductstring?: string } = useParams()
    const [products, setProducts] = useState<TypeProduct[] | []>([])
    const [productsIdorSale, setproductsIdorSale] = useState<productsIdorSale[] | []>([])
    const [botaoDesabilitado, setBotaoDesabilitado] = useState(false);
    const [nameButton, setNameButton] = useState('Vender')
    const navigate = useNavigate()
    
    useEffect(()=>{
        if (arrayproductstring) {
            const arrayid = JSON.parse(arrayproductstring)
            setProducts(arrayid)  
        }
    }, [arrayproductstring])

    async function SaleProductApi() {
        setBotaoDesabilitado(true)
        setNameButton('Carregando...')
        try {
            const dataCru = localStorage.getItem('login')
            if (dataCru) {
                const data = JSON.parse(dataCru)
            
            const resapi =  await Api({url: "products", method:"put", products: productsIdorSale, data})
            console.log(resapi)
            if (resapi.sucess) {
                navigate('/home')
            }else{
                alert(resapi.error)
            }
        }else{
            localStorage.removeItem('login')
            alert('problema no email ou senha salvos localmente, excluindo dados...')
        }} catch (error) {
            alert(`algo deu errado, error: ${error}`)
        }
        setBotaoDesabilitado(false)
        setNameButton('Vender')
    }

    function inputvalueid(product: TypeProduct, sale: number) {
        let verification = true
        if(product.unit >= sale && productsIdorSale){
            for (let i = 0; i < productsIdorSale.length; i++) {
                if (productsIdorSale[i].id === product.id) {
                    verification = false
                    let modification = productsIdorSale
                    modification[i].sale = sale
                    setproductsIdorSale(modification)
                }
                
            }

            if (verification) {

                setproductsIdorSale([...productsIdorSale, {id:product.id, sale}])
            }

        }
    }

    return(
        <div className="flex flex-col justify-center items-center gap-5">
            <h2>Escolha a quantidade de produtos para serem vendidos</h2>
            {products.length > 0 && 
            <div>

                <table className="container border border-custom bg-white" border={1}>
                    <thead className="border-b-2 border-custom ">
                        <tr className=" border-custom">
                            <th className=" border-custom font-bold">id</th>
                            <th className=" border-custom font-bold">nome</th>
                            <th className=" border-custom">Preço</th>
                            <th className=" border-custom">Unidades</th>
                            <th className=" border-custom">Venda</th>
                        </tr>
                    </thead >
                    <tbody className=" border-custom">
                        {products.map((res)=>{
                            return(
                                <tr className=" border-custom" key={res.id}>
                                    <th className="truncate max-w-[100px] opacity-50 border-custom bg-green-400">{res.id}</th>
                                    <th className="truncate max-w-[100px] opacity-50 border-custom">{res.title}</th>
                                    <th className="truncate max-w-[100px] opacity-50 border-custom">R$:{res.price}</th>
                                    <th className="truncate max-w-[100px] opacity-50 border-custom">{res.unit}</th>
                                    <input className=" w-90%" type="number" placeholder="digite a quantidade que vai vender" onChange={(e)=>inputvalueid(res, Number(e.target.value))}/>
                                </tr>
                            )
                        }) 
                        
                        }
                    </tbody>
                </table>

                <div className="flex justify-center items-center">
                    <button disabled={botaoDesabilitado} className="py-3 rounded-md bg-green-400 hover:bg-green-700" onClick={SaleProductApi}>{nameButton}</button>
                </div>
            </div>
            }
        </div>
    )
}

export default Sale