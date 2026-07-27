import {
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import wishlistimg from "../../../../assets/shopping-basket.png";
import addTocardimg from "../../../../assets/shopping-cart.png";

import { useAuth } from "../../../../hooks/useAuth.js";

function HeaderActions() {
  const navigate = useNavigate();

  const { user, isAuthenticated, loading } = useAuth();

  const userData = user?.user;

  const handleProtectedNavigation = (path) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    navigate(path);
  };

  if (loading) return null;

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
      {/* User */}
      <Box
        onClick={() =>
          isAuthenticated
            ? navigate("/profile")
            : navigate("/login")
        }
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        <Avatar
          src={userData?.picture}
          alt="User"
          sx={{
            width: 30,
            height: 30,
            border: "2px solid #0D6EFD",
          }}
        />

        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 500,
            color: "white.main",
          }}
        >
          {isAuthenticated ? userData?.name : "Login"}
        </Typography>
      </Box>

      {/* Wishlist */}
      <Box
        onClick={() => handleProtectedNavigation("/wishlist")}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
        }}
      >
        <Avatar
          src={wishlistimg}
          alt="Wishlist"
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
            mt: 0.8,
          }}
        >
          Wishlist
        </Typography>
      </Box>

      {/* Cart */}
      <Box
        onClick={() => handleProtectedNavigation("/checkout")}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        <Avatar
          src={addTocardimg}
          alt="Cart"
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
            mt: 0.8,
          }}
        >
          Cart
        </Typography>
      </Box>
    </Box>
  );
}

export default HeaderActions;