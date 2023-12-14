import { Link, useNavigate } from "react-router-dom"
import InfoApi from "../components/InfoApi"
import Product from "../components/Product"
import EditProduct from "../components/EditProduct"

const Home = ()=>{
    const navigate = useNavigate()

    function button() {
        navigate('/create')
    }

    return(
        <div className="flex flex-col items-center">
            <InfoApi />
            <Product />
            <div className="my-3">
                <Link className="py-2 px-3 bg-green-500 rounded" to={'/create'}>Criar produto</Link>
            </div>
            <EditProduct />
        </div>
    )
}

export default Home