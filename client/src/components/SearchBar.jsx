import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useRef } from "react";
import {
  IconButton,
  InputBase,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";


const categories = [
  { title: "Fantasy Life" },
  { title: "New Age" },
  { title: "For Animals" },
  { title: "Concert" },
  { title: "Theater" },
  { title: "Rave" },
  { title: "Club" },
];

function SearchBar({ onStateChange, setResults }) {
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const alt = theme.palette.background.alt;
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1300px)");
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();
  const token = useSelector((state) =>state.token)


  const [category, setCategory] = useState("") 
  const [searchResults, setSearchResults] = useState([]);

  //
  const [input, setInput] = useState("");

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setSearchTerm(value);
  // }; reikia sito pries tai

  const onClick = (searchTerm) => {
    console.log(searchTerm);
    onStateChange(searchTerm !== '' ? searchTerm : '');
  };


  const fetchData = (value) => {
    fetch("http://localhost:3001/events", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((event) => {
          return (
            value &&
            event &&
            event.title &&
            event.title.toLowerCase().includes(value)
            // event.username &&
            // event.username.toLowerCase().includes(value) || 
            // event.date &&
            // event.date.toLowerCase().includes(value)  ||
            // event.category  &&
            // event.category.toLowerCase().includes(value) ||
            // event.location &&
            // event.location.toLowerCase().includes(value) 
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

  return (
    <FlexBetween 
    padding="1rem 6%" 
    backgroundColor={alt}
    // display={isNonMobileScreens ? "flex" : "block"}
    >

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{ fontSize: "25px" }} />
          ) : (
            <LightMode sx={{ color: dark, fontSize: "25px" }} />
          )}
          <IconButton
            onClick={() => onClick("Fantasy Life")}
            sx={{ fontSize: "1rem", fontFamily: "monospace" }}
            
          >
            Fantasy Life
          </IconButton>
          <IconButton
            onClick={() => onClick("New Age")}
            sx={{ fontSize: "1rem", fontFamily: "monospace"  }}
          >
            {" "}
            New Age
          </IconButton>
          <IconButton
            onClick={() => onClick("For Animals")}
            sx={{ fontSize: "1rem", fontFamily: "monospace"  }}
          >
            {" "}
            For Animals
          </IconButton>
          <IconButton
            onClick={() => onClick("Concert")}
            sx={{ fontSize: "1rem", fontFamily: "monospace"  }}
          >
            {" "}
            Concert
          </IconButton>
          <IconButton
            onClick={() => onClick("Theater")}
            sx={{ fontSize: "1rem", fontFamily: "monospace"  }}
          >
            {" "}
            Theater
          </IconButton>
          <IconButton 
          onClick={() => onClick("Rave")} 
          sx={{ fontSize: "1rem", fontFamily: "monospace"  }}>
            {" "}
            Rave
          </IconButton>
          <IconButton 
          onClick={() => onClick("Club")} 
          sx={{ fontSize: "1rem", fontFamily: "monospace"  }}>
            {" "}
            Club
          </IconButton>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
        </IconButton>
      )}

      <FlexBetween gap="1.75rem">
        <FlexBetween
          // backgroundColor={neutralLight}
          borderRadius="9px"
          gap="1rem"
          padding="0.1rem 1.5rem"
          // width="200px"
          
        
        >

          {/* <InputBase

            placeholder="e. g. 'Fantasy Life'"
            type="text"
            ref={inputRef}
            // onChange={handleFilterChange}
            // onChange={(e) => setSearchTerm(e.target.value)}
            onChange={handleChange}
          />
          <IconButton onClick={() => onClick(searchTerm)}>
            <Search />
          </IconButton> */}


<FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
  


        </FlexBetween>
      </FlexBetween>      
    </FlexBetween>
  );
}

export default SearchBar;
