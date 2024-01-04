import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

const CreatePromotion= ()=>{
    const { arrayproduct }: { arrayproduct?: string } = useParams()
    
    useEffect(()=>{
        if (arrayproduct) {
            const teste = JSON.parse(arrayproduct)
            console.log(teste)   
        }
    }, [arrayproduct])

    return(
        <div>
            <h1></h1>
        </div>
    )
}

export default CreatePromotion