import { Chart } from "chart.js/auto"
import { useEffect, useRef } from "react"

type DataTypesDoughnut = {
   solds: {
        title: string,
        description: string,
        unit: number,
        price: string,
        id: number,
        discount: string,
        newprice?: number,
        sold: number,
   }[] | null,
   titleGraphic: string
    
}

const GraphicDoughnut = ({solds, titleGraphic} : DataTypesDoughnut)=>{
    const graphicRef = useRef(null)

    useEffect(()=>{
           
        if (graphicRef.current && solds) {
            const ctx = graphicRef.current

            const data = solds.map(res=> res.sold)
            const labels = solds.map(res=>res.title)

            const colors = data.map(res=> `#${Math.floor(Math.random()*16777215).toString(16)}`)
            

            const myChart = new Chart(ctx,{
                    type: 'doughnut',
                    data: {
                        labels,
                        datasets: [
                            {
                                data,
                                backgroundColor: colors
                            }
                        ]
                    }
                }
            )   
            return ()=>{
                myChart.destroy()
            }
    }}, [solds])

    return(
        <div className="text-center ">
            <h2 className=" text-lg">{titleGraphic}</h2>
            <div className=" flex justify-center">
                <canvas ref={graphicRef} className="w-90% max-w-sm max-h-96" id="graphic"></canvas>
            </div>
        </div>
    )
}

export default GraphicDoughnut