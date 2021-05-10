export declare type Procedure = (...args: any[]) => any;
export declare type Options<TT> = {
    isImmediate?: boolean;
    maxWait?: number;
    callback?: (data: TT) => void;
};
declare const debounce: <F extends Procedure>(func: F, wait?: number, options?: Options<ReturnType<F>>) => (this: ThisParameterType<F>, ...args: Parameters<F>) => Promise<ReturnType<F>>;
export default debounce;
