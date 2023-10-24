import { PriceContext } from "@/context/result";
import React, { useContext } from "react";

import { Container, Price, Obs, Title } from "./styles";

const Result = () => {
  const { valueResult, modelResult, ageModelResult } = useContext(PriceContext);

  return (
    <Container>
      <Title>
        Tabela Fipe: Preço {modelResult} {ageModelResult}
      </Title>
      <Price>{valueResult}</Price>
      <Obs>Este é o preço de compra do veículo</Obs>
    </Container>
  );
};

export default Result;
