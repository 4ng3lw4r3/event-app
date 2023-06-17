import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";
import { SearchedEvent } from "../components/SearchedEvent";
import WidgetWrapper from "../components/WidgetWrapper";
import UserImage from "../components/UserImage";

const SearchedEventWidget = ({
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
  const main = palette.neutral.main;

  return (
    <WidgetWrapper m="2rem 0">
      <FlexBetween>
        <FlexBetween gap="1rem">
          <UserImage image={userPicturePath} size="55px" />
          <Box>
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
              {results.map((result, _id) => {
                return <SearchedEvent result={result.username} key={_id} />;
              })}
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
        {results.map((result, _id) => {
          return <SearchedEvent result={result.title} key={_id} />;
        })}
      </Typography>
      <FlexBetween>
        <Typography color={main} sx={{ mt: "1rem" }}>
          <CategoryIcon />
          {results.map((result, _id) => {
            return <SearchedEvent result={result.category} key={_id} />;
          })}{" "}
        </Typography>
        <Typography color={main} sx={{ mt: "1rem" }}>
          <CalendarMonthIcon />
          {results.map((result, _id) => {
            return <SearchedEvent result={result.date} key={_id} />;
          })}
        </Typography>
        <Typography color={main} sx={{ mt: "1rem" }}>
          <LocationOnIcon />
          {results.map((result, _id) => {
            return <SearchedEvent result={result.location} key={_id} />;
          })}
        </Typography>
      </FlexBetween>
      <Typography color={main} sx={{ mt: "1rem" }}>
        {results.map((result, _id) => {
          return <SearchedEvent result={result.description} key={_id} />;
        })}
      </Typography>
    </WidgetWrapper>
  );
};

export default SearchedEventWidget;
