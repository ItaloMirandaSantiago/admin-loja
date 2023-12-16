import { ReactNode, createContext, useState } from "react"


type RefreshType = {
    refresh: boolean
    setRefresh: (n: boolean) => void
}

export const RefreshContext = createContext<RefreshType | null>(null)

type Props = {children: ReactNode}

export const RefreshProvider = ({children}: Props) =>{
    const [refresh, setRefresh] = useState<RefreshType['refresh']>(false)
    return(
        <RefreshContext.Provider value={{ refresh, setRefresh }}>
            {children}
        </RefreshContext.Provider>
    )
}