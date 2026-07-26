import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";


const ProductCard = ({
  image,
  name,
  currentPrice,
  originalPrice,
  slug
  // rating,
}) => {


  return (
    <Card
    component={NavLink}
    to={`/productDetail/${slug}`}
      elevation={0}
      sx={{
        textDecoration:"none",
        borderRadius: "16px",
        width: "210px",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "#F5F5F5",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.06)",
        },
      }}
    >



      <IconButton
        size="small"
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          backgroundColor: "#FFF",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
          zIndex: 2,
          p: "5px",
          "&:hover": { backgroundColor: "#FFF" },
        }}
      >
        <FavoriteBorderIcon sx={{ fontSize: "1rem", color: "#666" }} />
      </IconButton>

      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 190,
          width: 200
        }}
      >
        <CardMedia
          component="img"
          image={image[0]?.original}
          alt={name}
          sx={{
            objectFit: "cover",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </Box>

      <CardContent sx={{ pt: 1, px: 1.5, pb: "12px !important", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            color: "#1A1A1A",
            fontSize: "0.8rem",
            lineHeight: 1.3,
            mb: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            height: "2.6em",
          }}
        >
          {name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "auto",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5 }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#1A1A1A",
                fontSize: "0.95rem",
              }}
            >
              ₹{currentPrice}
            </Typography>

            {originalPrice && (
              <Typography
                variant="body2"
                sx={{
                  color: "#9E9E9E",
                  textDecoration: "line-through",
                  fontSize: "0.75rem",
                }}
              >
                ₹{originalPrice}
              </Typography>
            )}
          </Box>

          {/* {rating && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
              <StarIcon sx={{ color: "#FFB400", fontSize: "0.9rem" }} />
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#666" }}>
                {rating}
              </Typography>
            </Box>
          )} */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;