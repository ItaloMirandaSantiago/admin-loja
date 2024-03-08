import Product from "../components/Product"
import Graphic from "../components/Graphic"
import VerificationLogin from "../components/VerificationLogin"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Home = ()=>{
    const navigate = useNavigate()

    const Verification = async ()=>{
        const login = await VerificationLogin()
        if (!login) {
            navigate('/')
        }
     }


     useEffect(()=>{
        Verification()
     })

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