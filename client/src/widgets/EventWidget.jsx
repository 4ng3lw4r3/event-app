import * as React from "react";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import Friend from "../components/Friend";
import FlexBetween from "../components/FlexBetween";
import WidgetWrapper from "../components/WidgetWrapper";
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


const EventWidget = ({
  eventId,
  eventUserId,
  username,
  title,
  category,
  date,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const events = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user); //i backend
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;
  const [open, setOpen] = React.useState(false);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;


  // useEffect(() => {
  //   dispatch(setEvents())
  // }, [events]);

  const patchLike = async () => {
    const response = await fetch(
      `http://localhost:3001/events/${eventId}/like`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      }
    );
    const updatedEvent = await response.json();
    dispatch(setEvent({ event: updatedEvent }));
  };

  const deleteEvent = async () => {
    try {
      const response = await fetch(`http://localhost:3001/events/${eventId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        setOpen(true);
        console.log("Event deleted successfully");
      } else {
        console.log("Error deleting event");
      }
    } catch (error) {
      console.log("Error deleting event:", error);
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={deleteEvent}>
        Delete
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={eventUserId}
        username={username}
        userPicturePath={userPicturePath}
      />

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

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Are you sure? This cannot be undone. Refresh the page after lol"
        action={action}
      />

      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween>
          <IconButton>
            <ShareOutlined />
          </IconButton>

          <FlexBetween>
            <IconButton onClick={handleClick}>
              <DeleteOutlineIcon />
            </IconButton>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
          <Link
          to={{ pathname: `` }}
          >
            <IconButton
            // onClick={updateEvent}
            >
              <EditIcon />
            </IconButton>
            </Link>

          </FlexBetween>
        </FlexBetween>
      </FlexBetween>

      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${username}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default EventWidget;
