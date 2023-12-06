import { useNavigate } from "react-router-dom"
import InfoApi from "../components/InfoApi"
import Product from "../components/Product"

const Home = ()=>{
    const navigate = useNavigate()

    function button() {
        navigate('/create')
    }

    return(
        <div className="flex flex-col items-center">
            <InfoApi />
            <div className="my-3">
                <button className="py-2 px-3 bg-green-500 rounded" onClick={button}>Criar produto</button>
                <button></button>
                <button></button>
            </div>
            <Product />
        </div>
    )
}

export default Home