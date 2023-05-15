import User from "../models/User.js";

// READ

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);

    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getUserEvents = async (req, res) => { // friends
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const events = await Promise.all(
            user.events.map((id) => User.findById(id))
        );
        const formattedEvents = events.map(
            ({ _id, title, username, location, picturePath }) => {
                return { _id, title, username, location, picturePath };
            }
        );
        res.status(200).json(formattedEvents);

    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// UPDATE
 
export const addRemoveEvent = async (req, res) => {
    try {
        const { id, eventId } = req.params;
        const user = await User.findById(id);
        const event = await User.findById(eventId);

        if (user.events.includes(eventId)) {
            user.events = user.events.filter((id) => id !== eventId);
            event.events = event.events.filter((id) => id !== id);
        } else {
            user.events.push(eventId);
            event.events.push(id);
        }
        await user.save();
        await event.save();

        const events = await Promise.all(
            user.events.map((id) => User.findById(id))
        );
        const formattedEvents = events.map(
            ({ _id, title, username, location, picturePath }) => {
                return { _id, title, username, location, picturePath };
            }
        );
        
        res.status(200).json(formattedEvents);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

