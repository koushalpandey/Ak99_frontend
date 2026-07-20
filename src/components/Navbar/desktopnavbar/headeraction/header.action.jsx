import {
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import useAuthStore from "../../../../store/userStore/store.js";
import { useEffect } from "react";
import wishlistimg from '../../../../assets/shopping-basket.png'
import addTocardimg from '../../../../assets/shopping-cart.png'



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
            border: "2px solid #0D6EFD"
          }}
        />
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 500,
            color: "white.main",

          }}
        >
          {userData?.name||"Guest"}
        </Typography>
      </Box>
      {/* Wishlist Item */}
      <Box
        component={NavLink}
        to={'wishlist'}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <Avatar
          src={wishlistimg}
          alt="wishlist"
          sx={{
            width: 24,
            height: 24,
            "& img": {
              filter:
                "brightness(0) saturate(100%) invert(32%) sepia(95%) saturate(1955%) hue-rotate(204deg) brightness(97%) contrast(94%)",
            },

          }}
        />
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 500,
            color: "white.main",
            mt: 0.8
          }}
        >
          Wishlist
        </Typography>
      </Box>



      {/* Cart Item */}
      <Box
        component={NavLink}
        to={'checkout'}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <Avatar
          src={addTocardimg}
          alt="wishlist"
          sx={{
            width: 32,
            height: 32,


          }}
        />

        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 500,
            color: "white.main",
            mt:0.8

          }}
        >
          Cart
        </Typography>
      </Box>
    </Box>
  );
}

export default HeaderActions;