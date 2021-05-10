declare const getElementPosition: (element: Element | null) => {
    x: number;
    y: number;
    bottom: number;
    left: number;
    right: number;
    top: number;
    width: number;
    height: number;
} | undefined;
