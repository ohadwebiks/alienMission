export interface Mission{
    id: string,
    name: string,
    status: Status,
    planet: string,
    description: string,
    soldiers: string
}


export enum Status{
    pending= "pending",
    inProgress = "in-progress",
    completed="completed"
}