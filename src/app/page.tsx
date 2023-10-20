'use client'

import { Global } from "@emotion/react";
import { Container } from "./style";
import { global } from "./globals"
import SearchTerm from "@/components/searchTerm/searchTerm";

export default function Home() {
  return (
    <main>
      <Global styles={global} />
      <Container>
        <SearchTerm />
      </Container>
    </main>
  )
}
