import { Link, useNavigate } from "react-router-dom"
import Product from "../components/Product"
import GraphicInfor from "../components/GraphicInfor"
import GraphicDoughnut from "../components/GraphicDoughnut"

const Home = ()=>{

    return(
        <div className="flex flex-col bg-headeTable">

            <div className="flex flex-col mt-4 gap-3">
                <div className="flex flex-row justify-around items-center">
                    <GraphicDoughnut />
                    <GraphicDoughnut />
                </div>
                <div className="flex justify-center">
                    <GraphicInfor />
                </div>
            </div>

            <h1 className=" text-center text-lg">Produtos Criados</h1>
            <Product />
            <div className="my-3 flex justify-center items-center gap-3">
                <Link className="py-2 px-3 bg-green-500 rounded hover:bg-green-600" to={'/create'}>Criar produto</Link>
                
                <Link className="py-2 px-3 bg-yellow-300 rounded hover:bg-yellow-500" to={'/createpromotion'}>Criar Promoção</Link>
            </div>

        </div>
    )
}

export default Home