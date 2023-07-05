import { PrismaClientError } from "src/errors/PrismaClientError";

export const isPrismaError = (e: PrismaClientError): boolean => {
    return typeof e.code === 'string' &&
        typeof e.clientVersion === 'string' &&
        (typeof e.meta === 'undefined' ||
            (typeof e.meta === 'object' &&
                !!e.meta.target)
        )
}