import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Grouped({ data, inputRef, label }) {
  return (
    <Autocomplete
      id="grouped-demo"
      options={data}
      ref={inputRef}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} required label={label} />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
