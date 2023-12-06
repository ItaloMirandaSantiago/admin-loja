import { useNavigate } from "react-router-dom"
import InfoApi from "../components/InfoApi"

const Home = ()=>{
    const navigate = useNavigate()

    function button() {
        navigate('/create')
    }

    return(
        <div className="flex flex-col items-center">
            <InfoApi />
            <div>
                <button onClick={button}>Criar produto</button>
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default Home