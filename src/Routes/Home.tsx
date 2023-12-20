import { Link, useNavigate } from "react-router-dom"
import Product from "../components/Product"

const Home = ()=>{

    return(
        <div className="flex flex-col bg-headeTable">
            <Product />
            <div className="my-3 flex justify-center items-center">
                <Link className="py-2 px-3 bg-green-500 rounded hover:bg-green-600" to={'/create'}>Criar produto</Link>
            </div>

        </div>
    )
}

export default Home