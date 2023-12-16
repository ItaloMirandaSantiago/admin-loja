import Api from "../AxiosConfig/Api"


const DeleteProduct = async (id: number)=>{

    try{
        await Api({url: "deleteproduct", method: "delete", product:{id}}) 
    }catch(err){

    }
}

export default DeleteProduct