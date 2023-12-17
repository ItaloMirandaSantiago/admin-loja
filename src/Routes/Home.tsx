import { Link, useNavigate } from "react-router-dom"
import Menu from "../components/Menu"
import Product from "../components/Product"
import { useContext } from "react"
import { EditContext } from "../context/EditContext"
import EditProduct from "../components/EditProduct"

const Home = ()=>{
    const Edit = useContext(EditContext)

    return(
        <div className="flex flex-col w-screen h-screen bg-headeTable">
            <Menu />
            <Product />
            <div className="my-3 flex justify-center items-center">
                <Link className="py-2 px-3 bg-green-500 rounded" to={'/create'}>Criar produto</Link>
            </div>
            {Edit?.EditResApi && 
                <EditProduct />
            }
        </div>
    )
}

export default Home