import { Chart } from "chart.js/auto"
import { useEffect, useRef } from "react"

type DateType = {
    data: {
        id: number, 
        data: string,
        result: number
    }[] | null
}

const GraphicInfor = ({data} : DateType)=>{

    const graphicRef = useRef(null)

    useEffect(()=>{
        
        if (graphicRef.current && data) {
            const ctx = graphicRef.current

            const colors = data.map(res=> res.result < 0 ? 'red' : 'green')
            const labels = data.map(res=>res.data)
            const results = data.map(res => res.result)

            const myChart = new Chart(ctx,{
                    type: 'bar',
                    data: {
                        labels,
                        datasets: [
                            {
                                label: 'Lucros/Prejuizos',
                                data: results,
                                backgroundColor: colors
                            }
                        ]
                    }
                }
            )   
            return ()=>{
                myChart.destroy()
            }
        }
        
    }, [data])

    return(
        <div className=" w-full text-center">
            <h2>Lucros/Prejuízos</h2>
            <div>
                <canvas ref={graphicRef} className=" " id="graphic"></canvas>
            </div>
        </div>
    )
}

export default GraphicInfor
