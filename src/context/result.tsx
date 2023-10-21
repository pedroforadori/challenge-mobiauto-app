import { api } from "@/lib";
import { PriceContextType, PropsType } from "@/type/result";
import { createContext, useState } from "react";

export const PriceContext = createContext<PriceContextType>(
  {} as PriceContextType
);

export const PriceProvider = ({ children }: PropsType) => {
  const [value, setValue] = useState("");
  const [model, setModel] = useState("");
  const [ageModel, setAgeModel] = useState("");
  const [progress, setProgress] = useState(false)

  const handleResult = (brand: string, model: string, age: string) => {
    setProgress(true)
    api.get(`/marcas/${brand}/modelos/${model}/anos/${age}`)
      .then((response) => {
        setProgress(false)
        setValue(response.data.Valor);
        setModel(response.data.Modelo);
        setAgeModel(response.data.AnoModelo);
      });
  }

  return (
    <PriceContext.Provider value={{ value, model, ageModel, handleResult, progress }}>
      {children}
    </PriceContext.Provider>
  );
};
