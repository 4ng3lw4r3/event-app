import * as React from "react";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import WidgetWrapper from "../components/WidgetWrapper";
import SearchedEventWidget from "./SearchedEventWidget";

const SearchResultsWidget = ({
  _id,
  results,
  title,
  location,
  titleResults,
  locationResults,
  friendId,
  subtitle,
  eventId,
  eventUserId,
  username,
  category,
  date,
  description,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  console.log(results); //I'm baddest of them all

  const { palette } = useTheme();

  return (
    <WidgetWrapper m="2rem 0">
      <FlexBetween>
        <SearchedEventWidget key={_id} results={results} />
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default SearchResultsWidget;
