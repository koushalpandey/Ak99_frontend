import {
  Box,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import useAuthStore from "../../../../store/userStore/store.js";
import { useEffect } from "react";
import { UserRoundCheck } from "lucide-react";


function HeaderActions() {
 const userData = useAuthStore((state) => state?.Data);
 const fetchUserData = useAuthStore((state) => state?.fetchUserData);

console.log(userData);


 useEffect(()=>{
  fetchUserData()
 },[fetchUserData])

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "25px",
        py: 1,
      }}
    >
      {/* Wishlist Item */}
      <Box
      component={NavLink}
      to={'wishlist'}
      sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          textDecoration:"none",
         }}
      >
        <UserRoundCheck
          sx={{
            fontSize: "18px",
            color: "secondary.main",

          }}
        />
        <Typography
          sx={{
            fontSize: "13.5px",
            fontWeight: 500,
            color: "black.main",


          }}
        >
          {userData?.name}
        </Typography>
      </Box>
      {/* Wishlist Item */}
      <Box
      component={NavLink}
      to={'wishlist'}
      sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          textDecoration:"none",
         }}
      >
        <FavoriteBorderIcon
          sx={{
            fontSize: "18px",
            color: "secondary.main",

          }}
        />
        <Typography
          sx={{
            fontSize: "13.5px",
            fontWeight: 500,
            color: "black.main",


          }}
        >
          Wishlist
        </Typography>
      </Box>



      {/* Cart Item */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer"
        }}
      >
        <ShoppingCartOutlinedIcon
          sx={{
            fontSize: "18px",
            color: "secondary.main",
          }}
        />
        <Typography
          sx={{
            fontSize: "13.5px",
            fontWeight: 500,
            color: "text.black",

          }}
        >
          Cart
        </Typography>
      </Box>
    </Box>
  );
}

export default HeaderActions;