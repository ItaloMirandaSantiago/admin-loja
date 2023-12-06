import { useEffect, useState } from "react"
import Api from "../AxiosConfig/Api"

type typeProduct = {
    title: string,
    description: string,
    unit: number,
    price: number,
    id: number
}

const Product = ()=>{
    const [arrayproduct, setArrayproduct] = useState<typeProduct[] | null>(null)
    useEffect(()=>{
        const productgetapi = async ()=>{
                const res = await Api({url: "products", method: "get"})
                setArrayproduct(res.data.data)
            }
        productgetapi()
    }, [])

    
    return(
        <table className="w-full border border-yellow-400" border={1}>
            <thead className="border border-yellow-400">
                <tr>
                    <th>nome</th>
                    <th>descrição</th>
                    <th>Preço</th>
                    <th>Unidades</th>
                </tr>
            </thead>
            <tbody>
                {arrayproduct && arrayproduct.map((res)=>{
                    return(
                        <tr key={res.id}>
                            <th>{res.title}</th>
                            <th>{res.description}</th>
                            <th>{res.price}</th>
                            <th>{res.unit}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Product