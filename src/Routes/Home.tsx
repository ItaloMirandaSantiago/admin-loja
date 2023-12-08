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
            <Product />
            <div className="my-3">
                <button className="py-2 px-3 bg-green-500 rounded" onClick={button}>Criar produto</button>
                <button className="py-2 px-3 bg-red-700 rounded mx-5"> Deletar</button>
                <button className="py-2 px-3 bg-yellow-300 rounded">Modificar</button>
            </div>
        </div>
    )
}

export default Home