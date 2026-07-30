import {
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

  // Shake animation variants with repeat
  const shakeAnimation = {
    shake: {
      x: [0, -10, 10, -10, 10, -5, 5, -3, 3, 0],
      rotate: [0, -5, 5, -5, 5, -3, 3, -2, 2, 0],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0.2,
      },
    },
    idle: {
      x: 0,
      rotate: 0,
    },
  };

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
            ? navigate("/")
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

        <motion.div
          initial="idle"
          animate={!isAuthenticated ? "shake" : "idle"}
          variants={shakeAnimation}
          whileHover={!isAuthenticated ? {
            scale: 1.1,
            transition: { duration: 0.2 }
          } : {}}
          style={{
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              color: "white.main",
              ...(!isAuthenticated && {
                background: "linear-gradient(45deg, #FF6B6B, #FF4757, #FF6B6B)",
                backgroundSize: "200% 200%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                animation: "gradientShift 2s ease infinite",
                "@keyframes gradientShift": {
                  "0%": { backgroundPosition: "0% 50%" },
                  "50%": { backgroundPosition: "100% 50%" },
                  "100%": { backgroundPosition: "0% 50%" },
                },
              }),
            }}
          >
            {isAuthenticated ? userData?.name : "Login"}
          </Typography>
        </motion.div>
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
          Add to Cart
        </Typography>
      </Box>
    </Box>
  );
}

export default HeaderActions;