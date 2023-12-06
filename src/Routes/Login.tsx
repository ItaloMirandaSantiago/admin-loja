import { useState } from "react"
import Api from "../AxiosConfig/Api"
import { useNavigate } from "react-router-dom"
import { json } from "stream/consumers"



const Login = ()=>{
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const navigate = useNavigate()

    async function Enter() {
        if (password && login) {
            const data = {login, password}
            const res = await Api({url: "/login", method: "get", data})
           
            if (res.data.sucess) {
                localStorage.setItem("login", JSON.stringify(data))
                navigate('/home')
            }
        }
    }

    return(
        <div className=" text-lg text-white text-center flex justify-center items-center w-screen h-screen">
            <div className=" bg-gray-800 p-10  text-center  flex flex-col gap-4 ">
                <h1 className="text-start inline mb-5"><span className="border-b border-white">Login</span></h1>
                <input className="bg-transparent border-b border-white" value={login} onChange={(e)=>setLogin(e.target.value)} type="name" placeholder="login" />
                <input className="bg-transparent border-b border-white" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Senha"/>
                <button className="bg-blue-700 py-2 px-6 rounded-lg" onClick={Enter}>Entrar</button>
            </div>
        </div>
    )
}

export default Login