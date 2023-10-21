import { PriceContext } from "@/context/result";
import { ButtonType } from "@/type/button";
import { Button, CircularProgress } from "@mui/material";
import { useContext } from "react";

const ButtonFind = ({ buttonActive } : ButtonType) => {
  const { progress } = useContext(PriceContext);

  return (
    <Button
      variant="contained"
      disabled={buttonActive}
      type="submit"
      sx={{
        minWidth: "40%",
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingLeft: "6px",
        paddingRight: "6px",
        margin: "8px",
        backgroundColor: "#5d02bf",
        "&:hover": {
          opacity: "0.7",
          backgroundColor: "#5d02bf",
        },
      }}
    >
      Consultar preço
      {progress && (
        <CircularProgress
          size={20}
          sx={{
            color: "#fff",
            width: "5px",
            marginLeft: "4px",
          }}
        />
      )}
    </Button>
  );
};

export default ButtonFind;
