import { useEffect, useState } from "react"
import Api from "../AxiosConfig/Api"
import { TypeProduct } from "../Types/TypeProduct"
import { Link } from "react-router-dom"
import Loading from "./Loading"

const SaleOrPurchase = ()=>{
    const [arrayproduct, setArrayproduct] = useState<TypeProduct[] | null>(null)
    const [arraychekbox, setArrayCheck] = useState<TypeProduct[] | []>([])
    
    const SaleProducts = async ({id} : {id: number})=>{
        await Api({url: "products", method: 'put', product: {id}})
    }

    const productgetapi = async ()=>{
        try{
            const res = await Api({url: "products", method: "get"})
            console.log(res)
            setArrayproduct(res.data)
        }catch(err){

    }}

    const CheckBox = (id: TypeProduct)=>{
        let verification = true
        for (let i = 0; i < arraychekbox.length; i++) {
            if (arraychekbox[i].id === id.id) {
                const deleteId = arraychekbox.filter(res=> res !== id)

                setArrayCheck(deleteId)

                verification = false
            }
        }
        if(verification) setArrayCheck([...arraychekbox, id])
    }

    useEffect(()=>{
        console.log(arraychekbox)
    }, [arraychekbox])

    useEffect(()=>{
        productgetapi()
    }, [])

    return(
        <div>
            <h3>Produtos para venda e compra</h3>
            <p>escolha os produtos e depois selecione venda ou compra</p>
            
            <div>
            <div className="flex items-center justify-center">
            
            {arrayproduct ? 
            <div className="my-5 container border border-custom bg-white pb-3">
                <table className="container border border-custom bg-white" border={1}>
                    <thead className="border-b-2 border-custom ">
                        <tr className=" border-custom">
                            <th className=" border-custom font-bold">check</th>
                            <th className=" border-custom font-bold">id</th>
                            <th className=" border-custom font-bold">nome</th>
                            <th className=" border-custom max-w-[100px]">descrição</th>
                            <th className=" border-custom">Preço</th>
                            <th className=" border-custom">Unidades</th>
                        </tr>
                    </thead >
                    <tbody className=" border-custom">
                        {arrayproduct.map((res)=>{
                            return(
                                <tr className=" border-custom" key={res.id}>
                                    <th className="truncate max-w-[100px] opacity-50 border-custom bg-white"><input type="checkbox" onChange={()=>{CheckBox(res)}} value={res.id}/></th>
                                    <th className="truncate max-w-[100px] opacity-50 border-custom bg-green-400">{res.id}</th>
                                    <th className="truncate max-w-[100px] opacity-50 border-custom">{res.title}</th>
                                    <th className="truncate max-w-[100px] opacity-50 border-custom">{res.description}</th>
                                    <th className="truncate max-w-[100px] opacity-50 border-custom">R$:{res.price}</th>
                                    <th className="truncate max-w-[100px] opacity-50 border-custom">{res.unit}</th>
                                </tr>
                            )
                        }) 
                        
                        }
                    </tbody>
                </table>
                <div className="my-3 flex justify-center items-center gap-3">

                    <div>
                        {arraychekbox.length <= 0? 
                        <div>
                            <button className="py-2 px-3 bg-green-400 rounded" disabled={false}>Comprar</button>
                            <button className="py-2 px-3 bg-yellow-300 rounded" disabled={false}>Vender</button>              
                        </div>
                            :
                            <div>
                            <Link className="py-3 px-3 bg-green-500 rounded hover:bg-green-600" to={`/purchase/${encodeURIComponent(JSON.stringify(arraychekbox))}`}>Comprar</Link>
                            <Link className="py-3 px-3 bg-yellow-500 rounded hover:bg-yellow-600" to={`/sale/${encodeURIComponent(JSON.stringify(arraychekbox))}`}>Vender</Link>               
                        </div>
                            
                        }
                        
                    </div>
                </div>
            </div>
            :
            <Loading />}
            </div>
                

            <button>Venda</button>
            <button>Compra</button>
        </div>
        </div>
    )
}

export default SaleOrPurchase