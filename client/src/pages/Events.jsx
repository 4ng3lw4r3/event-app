import Navbar from "../components/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import EventsWidget from "../widgets/EventsWidget";
import CategoriesNavbar from "../components/CategoriesNavbar";
// import SearchBar from "../components/SearchBar"; SITO REKIA
// import SearchedEvent from "../components/SearchedEvent.jsx";

//
import SearchBar from "../components/SearchBar";
import SearchResultsWidget from "../widgets/SearchResultsWidget";

const Events = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  // const searchParams = new URLSearchParams(window.location.search);
  // const category = searchParams.get("category");
  const [showContent, setShowContent] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  //
  const [locationResults, setLocationResults] = useState([]);
  const [titleResults, setTitleResults] = useState([]);
  const [results, setResults] = useState([]);

  // Callback function to receive child state
  const handleChildState = (state) => {
    setSearchTerm(state);
    setShowContent(!showContent);
  };

  return (

 

    <Box>


      <Navbar />
      <CategoriesNavbar onStateChange={handleChildState} />
      {/* SITO REIKIA!!pries keitima i navbar */}
      {/* <SearchBar onStateChange={handleChildState} /> */}

      {/* <SearchBar 
      setLocationResults={setLocationResults} 
      setTitleResults={setTitleResults}
      /> */}

<SearchBar setResults={setResults} setLocationResults={setLocationResults} setTitleResults={setTitleResults} />





      <Box
        width="100%"
        padding="2rem 6%"
        // display={isNonMobileScreens ? "flex" : "block"}
        display="flex"
        jus
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>

        {/* {locationResults && locationResults.length > 0 && 
        <SearchResultsWidget 
        locationResults={locationResults} 
        />} */}

        {/* {titleResults && titleResults.length > 0 && 
        <SearchResultsWidget 
        titleResults={titleResults} 
        />} */}


              {results && results.length > 0 && 
        <SearchResultsWidget results={results} />}

        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >



          {/* <EventsWidget userId={_id} /> */}
          {/* <SearchedEvent/> */}




          {/* <div style={{ display: "flex", flexDirection: "column-reverse" }}> */}
            <EventsWidget
              // display="flex"
              // flexDirection="column-reverse"
              userId={_id}
              category={searchTerm}
            />
          {/* </div> */}
        </Box>

        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <Box m="2rem 0" />
          </Box>
        )}
      </Box>

     


     </Box>

  );


};



export default Events;
