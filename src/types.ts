declare global {
    namespace Express {
      interface Request {
        user?: User | null;
      }
    }
    interface Error {
        status?: number;
        httpStatusCode?: number;
    }
}