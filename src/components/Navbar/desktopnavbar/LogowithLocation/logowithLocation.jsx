import { Box } from "@mui/material";
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
        ml:3,
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
        sx={{
          height: 100,
          cursor: "pointer",
        }}
      />


    </Box>
  );
}

export default HeaderTop;