import {ControllerHeaders, Controllers, STATUS} from "../../types/controllers.ts";

export const controllerHeaders: ControllerHeaders = {
    select: null,
    createdAt: 'Added',
    ipAddress: 'IP - address',
    macAddress: 'MAC - address',
    status: 'Status',
    version: 'Version',
}
export const controllers: Controllers[] = [
    {
        id: 1,
        select: true,
        createdAt: "2024-01-01",
        ipAddress: "192.168.1.1",
        macAddress: "00-B0-D0-63-C2-26",
        status: STATUS.SUCCEED,
        version: "1.0"
    },
    {
        id: 2,
        select: false,
        createdAt: "2024-01-01",
        ipAddress: "192.168.1.1",
        macAddress: "00-B0-D0-63-C2-26",
        status: STATUS.PROCESSING,
        version: "1.0"
    },
    {
        id: 3,
        select: true,
        createdAt: "2024-01-01",
        ipAddress: "192.168.1.1",
        macAddress: "00-B0-D0-63-C2-26",
        status: STATUS.ERROR,
        version: "1.0"
    },
    {
        id: 4,
        select: false,
        createdAt: "2024-01-01",
        ipAddress: "192.168.1.1",
        macAddress: "00-B0-D0-63-C2-26",
        status: STATUS.EMPTY,
        version: "1.0"
    },
    {
        id: 5,
        select: true,
        createdAt: "2024-01-01",
        ipAddress: "192.168.1.1",
        macAddress: "00-B0-D0-63-C2-26",
        status: STATUS.SUCCEED,
        version: "1.0"
    },
]
