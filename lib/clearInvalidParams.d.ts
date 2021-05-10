declare const clearInvalidParams: <T extends {
    [key: string]: any;
}>(params: T) => T;
export default clearInvalidParams;
