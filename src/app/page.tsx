"use client";

import { Global } from "@emotion/react";
import { Container } from "./styles";
import { global } from "./globals";
import SearchTerm from "@/components/searchTerm/searchTerm";
import { PriceProvider } from "@/context/result";
import Home from "@/pages/home/home";

export default function Main() {
  return (
    <main>
      <PriceProvider>
        <Global styles={global} />
        <Container>
          <Home />
        </Container>
      </PriceProvider>
    </main>
  );
}
