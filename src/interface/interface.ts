export interface ITrip {
    busHouseId: string,
    fromStation: string,
    id?: string,
    isBooked?: number,
    price: number,
    seats: number
    toStation: string,
    busHouse?: IBusHouse,
    phone: string,
    startTime: string,
    station: string,
    name: string
}

export interface IBusHouse {
    id: string,
    name: string,
    adress: string,
    phone: string
}