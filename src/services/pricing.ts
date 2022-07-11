export interface ICompany {
    name: string
    address: string
    phone: string
    email: string
    cnpj: string
    person: string
}

export interface IProduct {
    description: string
    quantity: number | string
    unit: string
}
    

export interface IPricing {
    id?: number
    company: ICompany
    product: IProduct
}


