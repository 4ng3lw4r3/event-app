import Event from "../models/Event.js"
import User from "../models/User.js";

// CREATE

export const createEvent = async (req, res) => {
    try {
        const { 
            userId, 
            title,
            date,
            location, 
            category,
            description, 
            picturePath
        } = req.body;

        const user = await User.findById(userId);

        const newEvent = new Event({
            userId,
            title,
            username: user.username,
            date,
            location,
            description,
            category,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        });
        await newEvent.save();

        const event = await Event.find();
        res.status(201).json(event);

    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

// READ 

export const getEvents = async (req, res) => {
    try {

        const event = await Event.find();
        res.status(200).json(event);

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getUserEvents = async (req, res) => {
    try {

        const { userId } = req.params;
        const event = await Event.find({ userId });
        res.status(200).json(event);

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

  //GET USER FAVORITES


// UPDATE

export const updateEvent = async (req, res) => {
    try {
      const eventId = req.params.id;
      const { 
        title, 
        category, 
        date, 
        description, 
        location, 
        picturePath
     } = req.body;
  
      const event = await Event.findById(eventId);
  
      // Update the event properties
      event.title = title;
      event.category = category;
      event.date = date;
      event.description = description;
      event.location = location;
      event.picturePath = picturePath;
  
      // Save the updated event
      const updatedEvent = await event.save();
  
      res.json(updatedEvent);
    } catch (error) {
      console.log("Error updating event:", error);
      res.status(500).json({ error: "Failed to update the event." });
    }
  };


export const likeEvent = async (req, res) => {
    try {
        
        const { id } = req.params;
        const { userId } = req.body;
        const event = await Event.findById(id);
        const isLiked = event.likes.get(userId);
        
        if (isLiked) {
            event.likes.delete(userId);
        } else {
            event.likes.set(userId, true);
        }

        //for frontend
        const updatedEvent = await Event.findByIdAndUpdate(
            id,
            { likes: event.likes },
            { new: true }
        );

        res.status(200).json(updatedEvent);

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

// DELETE

export const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    await Event.findByIdAndDelete(eventId);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the event' });
  }
};