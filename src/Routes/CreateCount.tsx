import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Api from "../AxiosConfig/Api"

const CreateCount = ()=>{
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const navigate = useNavigate()

    async function Enter() {
        if (password && login) {
            const data = {login, password}
            try{
                const res = await Api({url: "/login", method: "get", data})
           
                if (res.sucess) {
                    localStorage.setItem("login", JSON.stringify(data))
                    navigate('/home')
                }else{
                    alert('senha ou login incorreto')
                }
            }catch(err){
                alert(`a api está fora do ar no momento ${err}`)
            }

        }
    }

    return (
        <div className=" text-lg text-white text-center flex justify-center items-center w-screen h-screen">
        <div className=" bg-gray-800 p-10  text-center  flex flex-col gap-4 ">
            <h1 className="text-start inline mb-5"><span className="border-b border-white">Criar conta</span></h1>
            <input className="bg-transparent border-b border-white" value={login} onChange={(e)=>setLogin(e.target.value)} type="name" placeholder="Email" />
            <input className="bg-transparent border-b border-white" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Senha"/>
            <input className="bg-transparent border-b border-white" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Confirmar senha"/>
            <button className="bg-blue-700 py-2 px-6 rounded-lg" onClick={Enter}>Entrar</button>
            <p>Tem conta? Clique <Link className="underline text-blue-700 cursor-pointer" to={'/'}>aqui</Link></p>
        </div>
    </div>
    )

}

export default CreateCount