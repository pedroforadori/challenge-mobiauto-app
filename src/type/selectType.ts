import { SelectChangeEvent } from "@mui/material";

export type SelectInputType = {
    data: CarType[];
    text: string;
    handleSelect: (event: SelectChangeEvent) => void;
    value: string;
    progress: boolean;
}

export type CarType = {
    codigo: number;
    nome: string;
}