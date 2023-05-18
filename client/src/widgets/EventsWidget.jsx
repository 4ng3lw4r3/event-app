import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../state/index.js"
import EventWidget from "./EventWidget.jsx"

const EventsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch()
    const events = useSelector((state) => state.events);
    const token = useSelector((state) =>state.token)

    const getEvents = async () => {
        const response = await fetch("http://localhost:3001/events", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = await response.json();
          dispatch(setEvents({ events: data }));
        };
      
        const getUserEvents = async () => {
          const response = await fetch(
            `http://localhost:3001/events/${userId}/events`,
            {
              method: "GET",
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const data = await response.json();
          dispatch(setEvents({ events: data }));
        };
      
        useEffect(() => {
          if (isProfile) {
            getUserEvents();
          } else {
            getEvents();
          }
        }, []); // eslint-disable-line react-hooks/exhaustive-deps
        return (
            <>
              {events.map(
                ({
                  _id,
                  userId,
                  username,
                  description,
                  date,
                  category,
                  location,
                  title,
                  picturePath,
                  userPicturePath,
                  likes,
                  comments,
                }) => (
                  <EventWidget
                    key={_id}
                    // _id={_id}
                    // userId={userId}
                    eventId={_id}
                    eventUserId={userId}
                    username={username}
                    description={description}
                    date={date}
                    title={title}
                    location={location}
                    picturePath={picturePath}
                    userPicturePath={userPicturePath}
                    likes={likes}
                    comments={comments}
                  />
                )
              )}
            </>
          );
        };
        
        export default EventsWidget;
      