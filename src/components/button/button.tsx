import { PriceContext } from "@/context/result";
import { ButtonType } from "@/type/button";
import { Button, CircularProgress } from "@mui/material";
import { useContext } from "react";

const ButtonSearch = ({ buttonActive, text } : ButtonType) => {
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
        paddingLeft: "20px",
        paddingRight: "20px",
        margin: "8px",
        backgroundColor: "#5d02bf",
        "&:hover": {
          opacity: "0.7",
          backgroundColor: "#5d02bf",
        },
        "&:disabled": {
          backgroundColor: "#e0e0e0"
        }
      }}
    >
      {text}
      {progress && (
        <CircularProgress
          size={20}
          sx={{
            color: "#fff",
            width: "5px",
            marginLeft: "8px",
          }}
        />
      )}
    </Button>
  );
};

export default ButtonSearch;
