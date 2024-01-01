import { Link } from "react-router-dom"
import Product from "../components/Product"
import Graphic from "../components/Graphic"

const Home = ()=>{

    return(
        <div className="flex flex-col bg-headeTable">
            <Graphic />
            <div className="mt-4">
                <h1 className=" text-center text-lg">Produtos Criados</h1>
                <Product />
            </div>
        </div>
    )
}

export default Home