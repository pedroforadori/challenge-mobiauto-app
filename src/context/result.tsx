import { getResult } from "@/api";
import { DataResultType, PriceContextType, PropsType } from "@/type/result";
import { createContext, useState } from "react";

export const PriceContext = createContext<PriceContextType>(
  {} as PriceContextType
);

export const PriceProvider = ({ children }: PropsType) => {
  const [valueResult, setValueResult] = useState("");
  const [modelResult, setModelResult] = useState("");
  const [ageModelResult, setAgeModelResult] = useState("");
  const [progress, setProgress] = useState(false);

  const handleResult = (brand: number, model: number, age: string) => {
    setProgress(true);

    getResult(brand, model, age).then((response: DataResultType) => {
      setProgress(false);
      setValueResult(response.Valor);
      setModelResult(response.Modelo);
      setAgeModelResult(response.AnoModelo);
    })
  };

  return (
    <PriceContext.Provider
      value={{ valueResult, modelResult, ageModelResult, handleResult, progress }}
    >
      {children}
    </PriceContext.Provider>
  );
};
