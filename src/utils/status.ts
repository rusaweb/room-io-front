import {STATUS} from "../types/controllers.ts";

export function statusClassNames(status: STATUS): string {
    switch (status) {
        case STATUS.ERROR:
            return "badge badge-error text-white"
        case STATUS.EMPTY:
            return "badge "
        case STATUS.PROCESSING:
            return "loading loading-dots text-[0px]"
        default:
            return "badge badge-success text-white"
    }
}
