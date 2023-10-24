import { Box, SelectChangeEvent } from "@mui/material";
import { Form, SubTitle, Title } from "./styles";
import { FormEvent, useContext, useEffect, useState } from "react";
import SelectInput from "../select/select";
import { getBrand, getModel, getAge } from "@/api";
import { CarType } from "@/type/selectType";
import { PriceContext } from "@/context/result";
import ButtonFind from "../button/button";

export default function SearchTerm() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [age, setAge] = useState("");
  const [brandData, setBrandData] = useState<CarType[]>([]);
  const [modelData, setModelData] = useState<CarType[]>([]);
  const [ageData, setAgeData] = useState<CarType[]>([]);
  const [progressBrand, setProgressBrand] = useState(false);
  const [progressModel, setProgressModel] = useState(false);
  const [progressAge, setProgressAge] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const { handleResult } = useContext(PriceContext);

  useEffect(() => {
    setProgressBrand(true);
    loadBrand();
  }, []);

  const loadBrand = async () => {
    setBrandData(await getBrand());
    setProgressBrand(false);
  };

  const handleSelectBrand = (event: SelectChangeEvent) => {
    setBrand(event.target.value);
    loadModel(+event.target.value);
  };

  const loadModel = async (brand: number) => {
    setProgressModel(true);
    setModelData(await getModel(brand));
    setProgressModel(false);
  };

  const loadAge = async (model: number) => {
    setProgressAge(true);
    setAgeData(await getAge(brand, model));
    setProgressAge(false);
  };

  const handleSelectModel = (event: SelectChangeEvent) => {
    setModel(event.target.value);
    loadAge(+event.target.value);
  };

  const handleSelectAge = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    enableButton(event);
  };

  const enableButton = (event: SelectChangeEvent) => {
    if (event.target.value !== "") {
      setButtonActive(false);
    } else {
      setButtonActive(true);
    }
  };

  const handlePrice = (event: FormEvent) => {
    event.preventDefault();
    handleResult(+brand, +model, age);
  };

  return (
    <>
      <Title>Tabela Fipe</Title>
      <SubTitle>Consulte o preço de um veiculo de forma gratuíta</SubTitle>
      <Box
        sx={{
          width: {
            xs: "85%",
            sm: "70%",
            md: "40%",
            lg: "30%",
            xl: "25%",
          },
          backgroundColor: "#fff",
        }}
      >
        <Form onSubmit={handlePrice}>
          <SelectInput
            value={brand}
            text="Marca"
            handleSelect={handleSelectBrand}
            data={brandData}
            progress={progressBrand}
          />

          <SelectInput
            value={model}
            text="Modelo"
            handleSelect={handleSelectModel}
            data={modelData}
            progress={progressModel}
          />

          {model !== "" ? (
            <SelectInput
              value={age}
              text="Ano"
              handleSelect={handleSelectAge}
              data={ageData}
              progress={progressAge}
            />
          ) : undefined}

          <ButtonFind buttonActive={buttonActive} text="Consultar Preço" />
        </Form>
      </Box>
    </>
  );
}
