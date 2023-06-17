import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../state/index.js";
import FlexBetween from "./FlexBetween.jsx";
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

function Navbar({ onStateChange }) {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1300px)");
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;


  const username = `Hi, ${user.username}`;

  const onClick = (searchTerm) => {
    console.log(searchTerm);
    onStateChange(searchTerm !== "" ? searchTerm : "");
  };

  return (
    <>
      <FlexBetween padding="1rem 6%" backgroundColor={alt}

      >
        <FlexBetween gap="1.75rem">
          <Typography
            fontWeight="italian"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            fontFamily= "monospace"
            color="primary"
            onClick={() => navigate("/home")}
            sx={{
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
          ✧⭐Qu33n 3v3ntSs⭐✧
          </Typography>
        </FlexBetween>

        <FlexBetween gap="1.75rem">
          <Typography
            fontWeight="italian"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            fontFamily= "monospace"
            color="primary"
            onClick={() => navigate("/events")}
            sx={{
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
          ⭐3v3ntSs⭐
          </Typography>
        </FlexBetween>


        {/* DESKTOP NAV */}
        {isNonMobileScreens ? (
          <FlexBetween gap="2rem">
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={username}>
              <Select
                value={username}
                sx={{
                  backgroundColor: neutralLight,
                  width: "250px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={username}>
                  <Typography>{username}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        ) : (
          <IconButton
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu />
          </IconButton>
        )}

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
              gap="1rem"
            >
                          <FormControl variant="standard" value={username}>
                <Select
                  value={username}
                  sx={{
                    backgroundColor: neutralLight,
                    width: "250px",
                    borderRadius: "9px",
                    p: "0.25rem 1rem",
                    "& .MuiSvgIcon-root": {
                      pr: "0.25rem",
                      width: "3rem",
                    },
                    "& .MuiSelect-select:focus": {
                      backgroundColor: neutralLight,
                    },
                  }}
                  input={<InputBase />}
                >
                  <MenuItem value={username}>
                    <Typography>{username}</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => dispatch(setLogout())}>
                    Log Out
                  </MenuItem>
                </Select>
              </FormControl>


              <FlexBetween
                            display="block"
                            justifyContent="center"
                            alignItems="center"
                            gap="2rem"
                             >
              <IconButton
                onClick={() => dispatch(setMode())}
                sx={{ fontSize: "25px" }}
              >
                {theme.palette.mode === "dark" ? (
                  <DarkMode sx={{ fontSize: "25px" }} />
                ) : (
                  <LightMode sx={{ color: dark, fontSize: "25px" }} />
                )}
              </IconButton>
              <Message sx={{ fontSize: "25px" }} />
              <Notifications sx={{ fontSize: "25px" }} />
              <Help sx={{ fontSize: "25px" }} />
              </FlexBetween>
              
  

              <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <IconButton
                onClick={() => onClick("Fantasy Life")}
                sx={{ fontSize: "20px", fontFamily: "monospace"}}
              >
                {" "}
                Fantasy Life NOTWORKING!
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
                New Age XXXX
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
    </>
  );
};

export default Navbar;
