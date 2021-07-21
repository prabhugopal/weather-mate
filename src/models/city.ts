type Cord = {
    lon : number,
    lat : number
}


type City = {
    id: number,
    name: string,
    state: string,
    country: string,
    coord: Cord
}

export type Location = {
    city: City
}