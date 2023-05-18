import { Box } from "@mui/material"
import hellookitty from "../assets/hellookitty.jpg"

const UserImage = ({ image, size }) => {
  return (
    <Box
     width={size} height={size}
     >
        <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width="80rem"
        height="80rem"
        // width={size}
        // height={size}
        alt="user"
        src={hellookitty}        
        // src={`http://localhost:3001/user/picturePath}`}        
        />
    </Box>
    )
}

export default UserImage