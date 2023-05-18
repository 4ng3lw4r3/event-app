import React from 'react'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { setEvents } from "../state/index.js"


const SearchedEvent = (
      _id,
  userId,
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
) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchItem, setSearchItem ] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const token = useSelector((state) =>state.token)
    const events = useSelector((state) => state.events);


    const handleSearch = async (searchWord) => {
        try {
          const response = await axios.get(
          "http://localhost:3001/events/${searchWord}",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
          );
          setSearchResults(response.data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };

  return (

    <Box display="flex" flexDirection="column" gap="1.5rem">
    {events.map((event) => (
      <Box
      key={_id}
      // _id={_id}
      // userId={userId}
      eventId={_id}
      eventUserId={userId}
      username={username}
      description={description}
      category={category}
      date={date}
      title={title}
      location={location}
      picturePath={picturePath}
      userPicturePath={userPicturePath}
      likes={likes}
      comments={comments} 
      />
    ))}
  </Box>
   
  )
}

export default SearchedEvent