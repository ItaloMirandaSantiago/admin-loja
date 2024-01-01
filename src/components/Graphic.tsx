import { useEffect, useState } from "react"
import Api from "../AxiosConfig/Api"
import GraphicDoughnut from "./GraphicDoughnut"
import GraphicInfor from "./GraphicInfor"

const Graphic = ()=>{
    const [resApiGraphicBar, setresApiGraphicBar] = useState<any>()
    const [resApiGraphicDoughmut, setResApiGraphicDoughmut] = useState<any>()
    const [resApiGraphicDoughmutLoss, setResApiGraphicDoughmutLoss] = useState<any>()
    
    const informationApi = async ()=>{
        try{
            const resApi = await Api({url: "information", method: 'get'})
            console.log(resApi)
            setresApiGraphicBar(resApi.date)
            setResApiGraphicDoughmut(resApi.solds)
            setResApiGraphicDoughmutLoss(resApi.loss)
        }catch(err){
            alert('não foi possivel se conectar a api, tente novamente mais tarde')
        }
    }

    useEffect(()=>{
        informationApi()
    }, [])

    return(
        <div className="flex justify-center items-center">
            <div className="flex mt-4 gap-3 bg-graphic container rounded-md">
                <div className="flex flex-col justify-around items-center">
                    <GraphicDoughnut solds={resApiGraphicDoughmut} titleGraphic={'Itens mais vendidos'}/>
                    <GraphicDoughnut solds={resApiGraphicDoughmutLoss} titleGraphic={'Itens com estoque negativado'}/>
                </div>
                <div className="flex flex-col w-full">
                    <GraphicInfor data={resApiGraphicBar}/>
                    <GraphicInfor data={resApiGraphicBar}/>
                </div>
            </div>
        </div>
    )
}

export default Graphic