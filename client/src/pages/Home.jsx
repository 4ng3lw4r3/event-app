import Navbar from "../components/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import UserWidget from "../widgets/UserWidget";
import PostEventWidget from "../widgets/PostEventWidget";
import EventsWidget from "../widgets/EventsWidget";
import AdvertWidget from "../widgets/AdvertWidget";
import FriendListWidget from "../widgets/FriendListWidget";
import SearchBar from "../components/SearchBar";
// import SearchedEvent from "../components/SearchedEvent.jsx";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  const searchParams = new URLSearchParams(window.location.search);
  const category = searchParams.get("category");
  const [showContent, setShowContent] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  
    // Callback function to receive child state
    const handleChildState = (state) => {
      setSearchTerm(state);
      setShowContent(!showContent);

    };


  return (
    <Box>
      <Navbar />
      <SearchBar onStateChange={handleChildState}/>

      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <PostEventWidget picturePath={picturePath} />
          {/* <EventsWidget userId={_id} /> */}
          {/* <SearchedEvent/> */}

          <EventsWidget userId={_id} category={searchTerm} />
        </Box>

        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
