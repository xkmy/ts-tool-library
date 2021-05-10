declare const throttle: <T extends (...args: any[]) => any>(fn: T, delay: number) => (...args: any[]) => T | undefined;
export default throttle;
