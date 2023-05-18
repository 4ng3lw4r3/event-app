import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "../components/UserImage";
import WidgetWrapper from "../components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../state/index.js";
import hellookitty from "../assets/hellookitty.jpg"
import * as yup from "yup";

const postEventSchema = yup.object({
  title: yup
    .string()
    .required("required")
    .min(3, "must be at least 3 characters long"),
  date: yup.date().required("required").nullable().min(new Date(2023, 5, 22)),
  location: yup
    .string()
    .required("required")
    .min(3, "must be at least 3 characters long"),
  description: yup
    .string()
    .required("required")
    .min(11, "must be at least 11 characters long"),
  picture: yup.string(),
});

const initialValuesPostEvent = {
  title: "",
  location: "",
  date: "",
  description: "",
  picture: "",
};

const PostEventWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user); //i backend
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handleEvent = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("title", title);
    formData.append("date", date);
    formData.append("location", location);
    formData.append("description", description);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(" http://localhost:3001/events", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const events = await response.json();
    dispatch(setEvents({ events }));
    setImage(null);
    setTitle("");
    setDate("");
    setLocation("");
    setDescription("");
  };

  return (
    <WidgetWrapper>
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          "& > div": { gridColumn: "span 4" },
        }}
      >
        <FlexBetween>
          {/* <UserImage image={picturePath} /> */}
          <UserImage img src={hellookitty} />
          <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
            Where are we going next?
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <InputBase
            // onSubmit={handleEvent}
            // initialvalues={initialValuesPostEvent}
            // validationschema={postEventSchema}
            label="Title"
            placeholder="What?"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            sx={{
              width: "45%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
          />
          <InputBase
            // onSubmit={handleEvent}
            // initialValues={initialValuesPostEvent}
            // validationSchema={postEventSchema}
            label="Date"
            placeholder="When?"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            name="title"
            sx={{
              width: "45%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
          />
          <InputBase
            // onSubmit={handleEvent}
            // initialValues={initialValuesPostEvent}
            // validationSchema={postEventSchema}
            placeholder="Where?"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            sx={{
              width: "45%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
          />
        </FlexBetween>
        <InputBase
          // onSubmit={handleEvent}
          // initialValues={initialValuesPostEvent}
          // validationSchema={postEventSchema}
          placeholder="Describe it"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          sx={{
            gridColumn: "span 4",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
      </Box>
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>

        {isNonMobileScreens ? (
          <>
            <FlexBetween gap="0.25rem">
              <GifBoxOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Clip</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem">
              <AttachFileOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Attachment</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem">
              <MicOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <FlexBetween gap="0.25rem">
            <MoreHorizOutlined sx={{ color: mediumMain }} />
          </FlexBetween>
        )}

        <Button
          disabled={!title || !description || !location || !date}
          onClick={handleEvent}
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default PostEventWidget;
