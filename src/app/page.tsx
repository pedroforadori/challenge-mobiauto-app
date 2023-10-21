"use client";

import { Global } from "@emotion/react";
import { Container } from "./styles";
import { global } from "./globals";
import SearchTerm from "@/components/searchTerm/searchTerm";
import { PriceProvider } from "@/context/result";

export default function Home() {
  return (
    <main>
      <PriceProvider>
        <Global styles={global} />
        <Container>
          <SearchTerm />
        </Container>
      </PriceProvider>
    </main>
  );
}
