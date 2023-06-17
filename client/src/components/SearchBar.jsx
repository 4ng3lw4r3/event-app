import * as React from "react";
import { useState } from "react";
import { IconButton, InputBase, useTheme, useMediaQuery } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ setResults }) {
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const alt = theme.palette.background.alt;
  const isNonMobileScreens = useMediaQuery("(min-width: 1300px)");
  const token = useSelector((state) => state.token);
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:3001/events", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((event) => {
          return (
            (value &&
              event &&
              event.title &&
              event.title.toLowerCase().includes(value)) ||
            (event.username && event.username.toLowerCase().includes(value)) ||
            (event.date && event.date.toLowerCase().includes(value)) ||
            (event.category && event.category.toLowerCase().includes(value)) ||
            (event.location && event.location.toLowerCase().includes(value))
          );
        });
        setResults(results);
      });
  };
  //
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleClear = () => {
    setInput("");
    fetchData("");
  };

  return (
    <FlexBetween
      padding="1rem 6%"
      backgroundColor={alt}
      display={isNonMobileScreens ? "flex" : "block"}
    >
      <FlexBetween
        backgroundColor={neutralLight}
        borderRadius="9px"
        gap="3rem"
        padding="0.1rem 1.5rem"
      >
        <InputBase
          placeholder="Search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          endAdornment={
            input && (
              <IconButton onClick={handleClear}>
                <CloseIcon />
              </IconButton>
            )
          }
        />
      </FlexBetween>
    </FlexBetween>
  );
}

export default SearchBar;
