import { Link, useNavigate } from "react-router-dom"
import InfoApi from "../components/InfoApi"
import Product from "../components/Product"
import { useContext } from "react"
import { EditContext } from "../context/EditContext"
import EditProduct from "../components/EditProduct"

const Home = ()=>{
    const Edit = useContext(EditContext)

    return(
        <div className="flex flex-col items-center">
            <InfoApi />
            <Product />
            <div className="my-3">
                <Link className="py-2 px-3 bg-green-500 rounded" to={'/create'}>Criar produto</Link>
            </div>
            {Edit?.EditResApi && 
                <EditProduct />
            }
        </div>
    )
}

export default Home