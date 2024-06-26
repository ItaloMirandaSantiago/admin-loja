import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Api from "../AxiosConfig/Api"

const CreateCount = ()=>{
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')
    const [login, setLogin] = useState('')
    const navigate = useNavigate()
    const [nameButton, setNameButton] = useState('Entrar')
    const [hoverClass, setHoverClass] = useState('hover:bg-blue-900')
    const [botaoDesabilitado, setBotaoDesabilitado] = useState(false);

    async function Enter() {
        if (password && login && password1) {
            const NewCount = {email: login, password, password1}
            setBotaoDesabilitado(true)
            setNameButton('...')
            setHoverClass('')
            try{
                const res = await Api({url: "/createuser", method: "post", NewCount})
                console.log(res)
                if (res.sucess) {
                    localStorage.setItem("login", JSON.stringify({login, password}))
                    navigate('/home')
                }else{
                    alert('Usuário já consta no sistema')
                }
            }catch(err){
                alert(`a api está fora do ar no momento ${err}`)
            }
            setHoverClass('hover:bg-blue-900')
            setNameButton('Entrar')
            setBotaoDesabilitado(false)

        }
    }

    return (
        <div className=" text-lg text-white text-center flex justify-center items-center w-screen h-screen">
        <div className=" bg-gray-800 p-10  text-center  flex flex-col gap-4 ">
            <h1 className="text-start inline mb-5"><span className="border-b border-white">Criar conta</span></h1>
            <input className="bg-transparent border-b border-white" value={login} onChange={(e)=>setLogin(e.target.value)} type="name" placeholder="Email" />
            <input className="bg-transparent border-b border-white" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Senha"/>
            <input className="bg-transparent border-b border-white" value={password1} onChange={(e)=>setPassword1(e.target.value)} type="password" placeholder="Confirmar senha"/>
            <button disabled={botaoDesabilitado} className={`bg-blue-700 hover:bg-blue-900 py-2 px-6 rounded-lg ${hoverClass}`} onClick={Enter}>{nameButton}</button>
            <p>Tem conta? Clique <Link className="underline text-blue-700 cursor-pointer" to={'/'}>aqui</Link></p>
        </div>
    </div>
    )

}

export default CreateCount