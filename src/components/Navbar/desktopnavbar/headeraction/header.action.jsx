import {
  Box,
  Typography,
} from "@mui/material";
import { Package } from "lucide-react"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function HeaderActions() {


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
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer"
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
            fontSize: "14px",
            fontWeight: 500,
            color: "text.black",


          }}
        >
          Wishlist
        </Typography>
      </Box>

      {/* Orders Item */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer"
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'secondary.main',
            '& svg': {
              width: '18px',
              height: '18px',
            },
          }}
        >
          <Package />
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            color: "text.black",

          }}
        >
          Orders
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
            fontSize: "14px",
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