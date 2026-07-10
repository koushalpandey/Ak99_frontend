import {
  Avatar,
  Box,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import useAuthStore from "../../../../store/userStore/store.js";
import { useEffect } from "react";



function HeaderActions() {
  const userData = useAuthStore((state) => state?.Data);
  const fetchUserData = useAuthStore((state) => state?.fetchUserData);




  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "15px",
        py: 1,
      }}
    >

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <Avatar
          src={userData?.picture}
          alt="User"
          sx={{
            width: 30,
            height: 30,
            border:"2px solid #0D6EFD"
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
          textDecoration: "none",
        }}
      >
        <FavoriteBorderIcon
          sx={{
            fontSize: "22px",
            color: "primary.main",

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
            fontSize: "22px",
            color: "primary.main",
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