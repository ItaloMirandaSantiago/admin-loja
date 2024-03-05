import { useEffect, useState } from "react"
import Api from "../AxiosConfig/Api"
import GraphicDoughnut from "./GraphicDoughnut"
import GraphicInfor from "./GraphicInfor"

const Graphic = ()=>{
    const [resApiGraphicBar, setresApiGraphicBar] = useState<any>([])
    const [resApiGraphicDoughmut, setResApiGraphicDoughmut] = useState<any>([])
    const [resApiGraphicDoughmutLoss, setResApiGraphicDoughmutLoss] = useState<any>([])
    
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
        if (resApiGraphicBar.length) {
            console.log('nininini')
        }
        console.log(resApiGraphicDoughmut)
        console.log(resApiGraphicBar)
    }, [resApiGraphicDoughmut, resApiGraphicBar ])

    useEffect(()=>{
        informationApi()
    }, [])

    return(
        <>
            {
                resApiGraphicDoughmut.length && resApiGraphicBar.length ?
                <div className="flex justify-center items-center">
                    <div className="flex mt-4 gap-3 bg-graphic container rounded-md">
                        <div className="flex flex-col justify-around items-center">
                            <GraphicDoughnut solds={resApiGraphicDoughmut} titleGraphic={'Itens mais vendidos'}/>
                            <GraphicDoughnut solds={resApiGraphicDoughmutLoss} titleGraphic={'Itens com maior lucro'}/>
                        </div>
                        <div className="flex flex-col w-full">
                            <GraphicInfor data={resApiGraphicBar}/>
                        </div>
                    </div>
                </div>
            :
                <div className="bg-graphic text-center mt-4 p-4">
                    <h2>Aqui aparecerão seus dados em dahsbord quando houver algum.</h2>
                </div>
            }
            
        </>

    )
}

export default Graphic