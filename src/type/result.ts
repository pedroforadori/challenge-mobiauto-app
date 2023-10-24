import { ReactNode } from "react";

export type PriceContextType = {
    valueResult: string;
    modelResult: string;
    ageModelResult: string;
    handleResult: (brand: number, model: number, age: string) => void;
    progress?: boolean;
}

export type DataResultType = {
    Valor: string;
    Modelo: string;
    AnoModelo: string;
}

export type PropsType = {
    children?: ReactNode
}