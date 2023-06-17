import { useState, useEffect, useRef } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
// import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import axios from "redaxios";
import Tag from "../components/TagButton"
// import SearchedEvent from "../components/SearchedEvent";

// const SearchBar = ({ products, category, theater, setResults, onStateChange }) => {
  function CategoriesNavbar({ onStateChange }) {
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();

  
    const handleChange = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
    };

    const onClick = (searchTerm) => {
      console.log(searchTerm)
      onStateChange(searchTerm !== '' ? searchTerm : '')
    };
  

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          
          <IconButton onClick={() => onClick('Fantasy Life')} sx={{ fontSize: "1rem", fontFamily: "monospace" }}> Fantasy Life</IconButton>
          <IconButton onClick={() => onClick('New Age')} sx={{ fontSize: "1rem", fontFamily: "monospace" }}> New Age</IconButton>
          <IconButton onClick={() => onClick('Concert')} sx={{ fontSize: "1rem", fontFamily: "monospace" }}> Concert</IconButton>
          <IconButton onClick={() => onClick('Theater')} sx={{ fontSize: "1rem", fontFamily: "monospace" }}> Theater</IconButton>
          <IconButton onClick={() => onClick('Rave')} sx={{ fontSize: "1rem", fontFamily: "monospace" }}> Rave</IconButton>
          <IconButton onClick={() => onClick('Club')} sx={{ fontSize: "1rem", fontFamily: "monospace" }}> Club</IconButton>
          <IconButton onClick={() => onClick('For Animals')} sx={{ fontSize: "1rem", fontFamily: "monospace" }}> For Animals</IconButton>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          ⭐c4t3g0r13s⭐
        </IconButton>
      )}

      <FlexBetween gap="1.75rem">
        {/* SEARCH BAR */}
        {/* SEARCH BAR */}
        {/* SEARCH BAR */}

        <FlexBetween
          backgroundColor={neutralLight}
          borderRadius="9px"
          gap="3rem"
          padding="0.1rem 1.5rem"
        >
          <InputBase
            placeholder="Search..."
            type="text"
            ref={inputRef}
            // onChange={handleFilterChange}
            // onChange={(e) => setSearchTerm(e.target.value)}
            onChange={handleChange}
          />
          <IconButton 
          onClick={() => onClick(searchTerm)}
          >
            <Search />
          </IconButton>
        </FlexBetween>
      </FlexBetween>

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
              <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <IconButton
                onClick={() => onClick("Fantasy Life")}
                sx={{ fontSize: "20px", fontFamily: "monospace"}}
              >
                {" "}
                Fantasy Life
              </IconButton>
            </IconButton>

            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <IconButton
                onClick={() => onClick("New Age")}
                sx={{ fontSize: "20px", fontFamily: "monospace" }}
              >
                {" "}
                New Age
              </IconButton>
            </IconButton>

            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <IconButton
                onClick={() => onClick("For Animals")}
                sx={{ fontSize: "20px", fontFamily: "monospace" }}
              >
                {" "}
                For Animals
              </IconButton>
            </IconButton>

            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <IconButton
                onClick={() => onClick("Concert")}
                sx={{ fontSize: "20px", fontFamily: "monospace" }}
              >
                {" "}
                Concert
              </IconButton>
            </IconButton>

            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <IconButton
                onClick={() => onClick("Theater")}
                sx={{ fontSize: "20px", fontFamily: "monospace" }}
              >
                {" "}
                Theater
              </IconButton>
            </IconButton>

            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <IconButton
                onClick={() => onClick("Rave")}
                sx={{ fontSize: "20px", fontFamily: "monospace" }}
              >
                {" "}
                Rave
              </IconButton>
            </IconButton>

            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <IconButton
                onClick={() => onClick("Club")}
                sx={{ fontSize: "20px", fontFamily: "monospace" }}
              >
                {" "}
                Club
              </IconButton>
            </IconButton>


            </FlexBetween>
          </Box>
        )}
      </FlexBetween>
  );
};

export default CategoriesNavbar;
