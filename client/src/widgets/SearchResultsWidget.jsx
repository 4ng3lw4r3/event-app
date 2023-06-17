import * as React from "react";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setEvent, setEvents } from "../state/index.js";
import { SearchedEvent } from "../components/SearchedEvent";
import WidgetWrapper from "../components/WidgetWrapper";
import UserImage from "../components/UserImage";
import SearchedEventWidget from "./SearchedEventWidget";


const SearchResultsWidget = ({ 
  _id,
  results,
  title,
  location,
  titleResults,
  locationResults,
  friendId, subtitle,
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
    console.log(results) //I'm baddest of them all
    // console.log(titleResults) //I'm baddest of them all
    // console.log("Title:", title);
    // console.log("Location:", location);

    const { palette } = useTheme();
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

  return (
    <WidgetWrapper m="2rem 0">
<FlexBetween>

  <SearchedEventWidget  key={_id}
                  
                    results={results} 
                     />

{/* <div className="results-list">
      {titleResults.map((result, id) => {
        return <SearchedEvent result={result.title} key={id} />;
      })}
    </div> */}

{/* <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.title} key={id} />;
      })}
    </div>
<div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.location} key={id} />;
      })}
    </div> */}

      </FlexBetween>
    </WidgetWrapper>
  );
};

export default SearchResultsWidget