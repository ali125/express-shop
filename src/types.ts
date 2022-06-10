
declare global {
    interface Error {
        status?: number;
        httpStatusCode?: number;
    }
}