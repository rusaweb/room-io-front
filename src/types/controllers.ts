export interface InitialType {
    first: string
    second: string
    third: string
    fourth: string
}

export enum STATUS {
    EMPTY = "Empty",
    PROCESSING = "Processing",
    ERROR = "Error",
    SUCCEED = "Succeed",
}

export interface Controllers {
    id: number
    select: boolean
    createdAt: string
    ipAddress: string
    macAddress: string
    status: STATUS
    version: string
}

export interface ControllerHeaders {
    select: any,
    createdAt: string
    ipAddress: string
    macAddress: string
    status: string
    version: string
}
