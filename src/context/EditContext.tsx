import { ReactNode, createContext, useState } from "react"

type EditContextType = {
    EditResApi: {
        title?: string,
        description?: string,
        unit?: number,
        price?: number, 
        id?: number
    } | null
    setEditResApi: (n: {
        title: string,
        description: string,
        unit: number,
        price: number, 
        id: number
    } | null) => void
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