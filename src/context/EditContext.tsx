import { ReactNode, createContext, useState } from "react"
import { TypeProduct, TypeProductOptional } from "../Types/TypeProduct"

type EditContextType = {
    EditResApi: TypeProductOptional | null
    setEditResApi: (n: TypeProduct | null) => void
}

export const EditContext = createContext<EditContextType | null>(null)

type Props = {children: ReactNode}

export const EditProvider = ({children}: Props) =>{
    const [EditResApi, setEditResApi] = useState<EditContextType["EditResApi"]>(null)
    return(
        <EditContext.Provider value={{EditResApi, setEditResApi}}>
            {children}
        </EditContext.Provider>
    )
}