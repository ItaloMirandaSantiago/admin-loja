import { Chart } from "chart.js/auto"
import { useEffect, useRef } from "react"

const GraphicDoughnut = ({data} : {data?: string})=>{
    const graphicRef = useRef(null)

    useEffect(()=>{
           
        if (graphicRef.current) {
            const ctx = graphicRef.current

            const data = [300, 50, 100]

            const colors = data.map(res=> res < 0 ? 'red' : 'green')

            const myChart = new Chart(ctx,{
                    type: 'doughnut',
                    data: {
                        labels: ['teste1', 'teeste2', 'teste3'],
                        datasets: [
                            {
                                label: 'quebra',
                                data,
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(54, 162, 235)',
                                    'rgb(255, 205, 86)'
                                  ]
                            }
                        ]
                    }
                }
            )   
            return ()=>{
                myChart.destroy()
            }
    }})

    return(
        <div className=" w-2/5 bg-graphic flex-col items-center justify-center rounded-md text-center">
            <h2>Lucros/Prejuízos</h2>
            <div className=" flex justify-center">
                <canvas ref={graphicRef} className="w-90% max-w-sm max-h-96" id="graphic"></canvas>
            </div>
        </div>
    )
}

export default GraphicDoughnut