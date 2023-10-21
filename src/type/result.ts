import { ReactNode } from "react";

export type PriceContextType = {
    value: string;
    model: string;
    ageModel: string;
    handleResult: (brand: string, model: string, age: string) => void;
    progress: boolean;
}

export type PropsType = {
    children?: ReactNode
}