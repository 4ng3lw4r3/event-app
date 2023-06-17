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
import SearchedEvent from "../components/SearchedEvent";
import WidgetWrapper from "../components/WidgetWrapper";
import UserImage from "../components/UserImage";


const SearchResultsWidget = ({ 
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

{/* <div>
  title
{title}
    </div>
<div>
  location
{location}
    </div>  */}


    <div className="results-list">
      {results.map((result, id) => {
        return <SearchedEvent result={result.title} key={id} />;
      })}
    </div>


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


<FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {username}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      </FlexBetween>
      <Typography
        color={main}
        fontWeight="400"
        variant="h5"
        sx={{ mt: "3rem", mb: "1rem" }}
      >

        {title}
      </Typography>
      <FlexBetween>
        <Typography color={main} sx={{ mt: "1rem" }}>
          <CategoryIcon />
          {category}
        </Typography>
        <Typography color={main} sx={{ mt: "1rem" }}>
          <CalendarMonthIcon />
          {date}
        </Typography>
        <Typography color={main} sx={{ mt: "1rem" }}>
          <LocationOnIcon />
          {location}
        </Typography>
      </FlexBetween>
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="event"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
<FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
        </FlexBetween>
        <FlexBetween>
          <FlexBetween gap="0.3rem">
          <Link
          to={{ pathname: `` }}
          >
            <IconButton
            >
              <EditIcon />
            </IconButton>
            </Link>
          </FlexBetween>
        </FlexBetween>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default SearchResultsWidget