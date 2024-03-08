import Api from "../AxiosConfig/Api"

const VerificationLogin = async ()=>{
    const dataCru = (localStorage.getItem('login') ? localStorage.getItem('login') : '')
    if (dataCru) {
        const data = JSON.parse(dataCru)

        const res = await Api({url: "login", method: "get", data})
        console.log(`resposta do res  ${res}`)
        if (res.sucess) {
            return true
        }else{
            return false
        }
    }else{
        return  false
    }  
}

export default VerificationLogin