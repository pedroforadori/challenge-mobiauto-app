import Result from "@/components/result/result";
import SearchTerm from "@/components/searchTerm/searchTerm";
import { PriceContext } from "@/context/result";
import { useContext } from "react";

const Home = () => {
  const { valueResult } = useContext(PriceContext);
  
  return (
    <>
      <SearchTerm />
      {valueResult && <Result />}
    </>
  );
};

export default Home;
