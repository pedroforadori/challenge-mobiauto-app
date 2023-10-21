import { SelectInputType } from "@/type/selectType";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const SelectInput = ({ value, text, handleSelect, data, progress } : SelectInputType) => {
  return (
    <FormControl variant="filled" sx={{ m: 1, width: "90%" }}>
      <InputLabel
        id="demo-simple-select-filled-label"
        sx={{
          color: "#000",
          marginLeft: "3px",
          marginTop: "4px",
        }}
      >
        { text }
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        label={text}
        onChange={handleSelect}
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
        {data.map(element => (
            <MenuItem 
                key={element.codigo} 
                value={element.codigo}>
                    {element.nome}
            </MenuItem>
        ))}
        
      </Select>
      {progress && (
        <LinearProgress />
      )}
    </FormControl>
  );
};

export default SelectInput;
