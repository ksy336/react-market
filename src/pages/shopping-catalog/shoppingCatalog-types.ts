export interface IHeadPhone {
    id: string,
    img: string,
    title: string,
    price: string,
    rate: string,
    count: string,
    totalPrice: string
}

export interface IHeadphones {
    headphones: IHeadPhone[]
}

export type Headphones = IHeadphones['headphones']
