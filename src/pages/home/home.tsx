import Result from "@/components/result/result";
import SearchTerm from "@/components/searchTerm/searchTerm";
import { PriceContext } from "@/context/result";
import { useContext } from "react";

const Home = () => {
  const { value } = useContext(PriceContext);
  
  return (
    <>
      <SearchTerm />
      {value && <Result />}
    </>
  );
};

export default Home;
