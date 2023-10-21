import { PriceContext } from "@/context/result";
import React, { useContext } from "react";

import { Container, Price, Obs, Title } from "./styles";

const Result = () => {
  const { value, model, ageModel } = useContext(PriceContext);

  return (
    <Container>
      <Title>
        Tabela Fipe: Preço {model} {ageModel}
      </Title>
      <Price>{value}</Price>
      <Obs>Este é o preço de compra do veículo</Obs>
    </Container>
  );
};

export default Result;
