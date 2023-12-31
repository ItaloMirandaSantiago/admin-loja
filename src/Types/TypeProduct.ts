export type TypeProductOptional = {
    title?: string,
    description?: string,
    unit?: number,
    price?: string,
    id?: number,
    discount?: number,
    productionprice?: string,
    newprice?: string,
    
}

export type TypeProduct = {
    title: string,
    description: string,
    unit: number,
    price: string,
    id: number,
    discount: number,
    productionprice: string,
    newprice?: string
}