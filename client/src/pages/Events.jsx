import Navbar from "../components/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import EventsWidget from "../widgets/EventsWidget";
import CategoriesNavbar from "../components/CategoriesNavbar";
import SearchBar from "../components/SearchBar";
import SearchResultsWidget from "../widgets/SearchResultsWidget";

const Events = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id } = useSelector((state) => state.user);
  const [showContent, setShowContent] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChildState = (state) => {
    setSearchTerm(state);
    setShowContent(!showContent);
  };

  return (
    <Box>
      <Navbar />
      <CategoriesNavbar onStateChange={handleChildState} />
      <SearchBar setResults={setResults} />

      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {results && results.length > 0 && (
            <SearchResultsWidget results={results} />
          )}

          <div style={{ display: "flex", flexDirection: "column-reverse" }}>
            <EventsWidget userId={_id} category={searchTerm} />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
