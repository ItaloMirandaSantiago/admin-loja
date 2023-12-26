import { Chart } from "chart.js/auto"
import { useEffect, useRef } from "react"

const GraphicInfor = ()=>{

    const graphicRef = useRef(null)

    useEffect(()=>{
        
        if (graphicRef.current) {
            const ctx = graphicRef.current

            const data = [10,20,30,]

            const colors = data.map(res=> res < 0 ? 'red' : 'green')

            const myChart = new Chart(ctx,{
                    type: 'bar',
                    data: {
                        labels: ['teste1', 'teeste2', 'teste3'],
                        datasets: [
                            {
                                label: 'Lucros/Prejuizos',
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
        }
        
    }, [])

    return(
        <div className=" w-90% bg-graphic flez-col items-center justify-center rounded-md text-center">
            <h2>Lucros/Prejuízos</h2>
            <div>
                <canvas ref={graphicRef} className=" w-90%" id="graphic"></canvas>
            </div>
        </div>
    )
}

export default GraphicInfor
