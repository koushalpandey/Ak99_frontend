import { Box, Typography } from "@mui/material";
import logo from "../../../../assets/ak99-logo.png";
import { useNavigate } from "react-router-dom";


function HeaderTop() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
        sx={{
          height: 80,
          cursor: "pointer",
        }}
      />

      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              color: "white.main",
              fontSize: 14,
            }}
          >
            will add user address later
          </Typography>


        </Box>



      </Box>
    </Box>
  );
}

export default HeaderTop;