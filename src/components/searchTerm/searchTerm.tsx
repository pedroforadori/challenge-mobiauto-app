import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { useState } from "react";

export default function SearchTerm() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [age, setAge] = useState("");
  const [buttonActive, setButtonActive] = useState(true);

  const handleSelectBrand = (event: SelectChangeEvent) => {
    setBrand(event.target.value);
  };

  const handleSelectModel = (event: SelectChangeEvent) => {
    setModel(event.target.value);
    enableButton(event);
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

  return (
    <>
      <h1>Tabela Fipe</h1>
      <h2>Consulte o preço de um veiculo de forma gratuíta</h2>
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "70%",
            md: "60%",
            lg: "30%",
            xl: "30%"
          },
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <FormControl variant="filled" sx={{ m: 1, minWidth: "90%" }}>
          <InputLabel
            id="demo-simple-select-filled-label"
            sx={{
              color: "#000",
              marginLeft: "3px",
              marginTop: "4px",
            }}
          >
            Marca
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={brand}
            label="Age"
            onChange={handleSelectBrand}
            variant="outlined"
            sx={{
              color: "gray",
              border: "1px solid darkgrey",
              paddingTop: "8px",
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, minWidth: "90%" }}>
          <InputLabel
            id="demo-simple-select-filled-label"
            sx={{
              color: "#000",
              marginLeft: "3px",
              marginTop: "4px",
            }}
          >
            Modelo
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={model}
            label="Age"
            onChange={handleSelectModel}
            variant="outlined"
            sx={{
              color: "gray",
              border: "1px solid darkgrey",
              paddingTop: "8px",
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        {model !== "" ? (
          <FormControl variant="filled" sx={{ m: 1, minWidth: "90%" }}>
            <InputLabel
              id="demo-simple-select-filled-label"
              sx={{
                color: "#000",
                marginLeft: "3px",
                marginTop: "4px",
              }}
            >
              Ano
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleSelectAge}
              variant="outlined"
              sx={{
                color: "gray",
                border: "1px solid darkgrey",
                paddingTop: "8px",
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        ) : undefined}

        <Button
          variant="contained"
          disabled={buttonActive}
          sx={{
            minWidth: "40%",
            paddingTop: "8px",
            paddingBottom: "8px",
            paddingLeft: "6px",
            paddingRight: "6px",
            margin: "8px",
            backgroundColor: "#5d02bf",
          }}
        >
          Consultar preço
        </Button>
      </Box>
    </>
  );
}
