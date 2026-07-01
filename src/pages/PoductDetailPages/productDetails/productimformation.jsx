import { useState } from "react";
import { Box, Typography, Button, Rating, Stack, IconButton, } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MarketingBannerZone from "../../../components/Trust/ourtrust";

const ProductInformation = ({ productData }) => {



  const [quantity, setQuantity] = useState(1);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",

      }}
    >


      {/* Product Title */}
      <Typography
        sx={{
          fontSize: { xs: "16px", md: "26px" },
          color: "dark.main",
          mb: 1,
        }}
      >
        {productData?.name}
      </Typography>

      {/* Ratings & Reviews */}
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <Rating value={4.8} precision={0.1} readOnly size="small" sx={{ color: "#0D6EFD" }} />
        <Typography
          sx={{
            fontWeight: 500,
            color: "dark.main",
            fontSize: "14px"
          }}>
          4.8
        </Typography>
        <Typography sx={{ color: "#718096" }}>
          |
        </Typography>
        <Typography
        sx={{
            color: "#4a5568",
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          112 Reviews
        </Typography>
      </Stack>

      {/* Pricing Section */}
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 0.5 }}>
        <Typography sx={{ color: "dark.main", fontSize: "22px" }}>
            ₹ {productData?.price}
        </Typography>

        <Typography variant="body1" sx={{ textDecoration: "line-through", color: "#718096" }}>
         ₹ {productData?.comparePrice}
        </Typography>
        <Box
          sx={{

            backgroundColor: "#e6fffa",
            color: "#234e52",
            px: 1,
            py: 0.8,
            borderRadius: "4px",
            fontSize: "0.75rem",
            fontWeight: 600,
            border: "1px solid #b2f5ea",
          }}
        >
          0.1% OFF
        </Box>
      </Stack>

      {/* Stock & Shipping Info */}
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2, mt: 2 }}>
        <Typography variant="body2" sx={{ color: "#2f855a", fontWeight: 600 }}>
          In Stock
        </Typography>
        <Typography variant="body2" sx={{ color: "#718096" }}>
          |
        </Typography>
        <Typography variant="body2" sx={{ color: "#4a5568", fontWeight: 500 }}>
          Free Shipping on orders over $50
        </Typography>
      </Stack>




      {/* Description Paragraph */}
      <Typography
        sx={{
          color: "dark.main",
          lineHeight: 1.6,
          mb: 3,
          fontSize: "16px",
        }}
      >
          {productData?.description}
      </Typography>



      {/* Trust Badges Footer */}
      <Box>
        <MarketingBannerZone />
      </Box>


      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        sx={{
          mt: 4,
          flexWrap: "wrap",
          gap: 1.5
        }}
      >
        {/* Glassmorphic Quantity Counter */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            border: "1px solid rgba(203, 213, 224, 0.4)",
            borderRadius: "8px",
            backgroundColor: "rgba(226, 232, 240, 0.4)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            height: "44px",
            boxSizing: "border-box",
            overflow: "hidden",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.03)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              backgroundColor: "rgba(226, 232, 240, 0.6)",
              borderColor: "rgba(203, 213, 224, 0.8)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05), inset 0 0 8px rgba(255, 255, 255, 0.5)",
            }
          }}
        >
          <IconButton
            size="small"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            sx={{
              p: 0,
              width: "40px",
              height: "100%",
              borderRadius: 0,
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(203, 213, 224, 0.5)",
                "& .MuiSvgIcon-root": { transform: "scale(1.1)" }
              },
              "&:active": { transform: "scale(0.9)" }
            }}
          >
            <RemoveIcon sx={{ fontSize: "1rem", color: "#4a5568", transition: "transform 0.2s" }} />
          </IconButton>

          <Typography
            sx={{
              minWidth: "36px",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "#2d3748",
              userSelect: "none"
            }}
          >
            {quantity}
          </Typography>

          <IconButton
            size="small"
            onClick={() => setQuantity(quantity + 1)}
            sx={{
              p: 0,
              width: "40px",
              height: "100%",
              borderRadius: 0,
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(203, 213, 224, 0.5)",
                "& .MuiSvgIcon-root": { transform: "scale(1.1)" }
              },
              "&:active": { transform: "scale(0.9)" }
            }}
          >
            <AddIcon sx={{ fontSize: "1rem", color: "#4a5568", transition: "transform 0.2s" }} />
          </IconButton>
        </Stack>


        <Button
          variant="contained"
          startIcon={<ShoppingBagIcon />}
          sx={{
            flex: 1,
            minWidth: "160px",
            height: "44px",
            textTransform: "uppercase",
            fontWeight: 600,
            borderRadius: "8px",
            position: "relative",
            background: "linear-gradient(135deg, rgba(29, 64, 105, 0.95), rgba(26, 54, 93, 0.95))",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 15px rgba(26, 54, 93, 0.2)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            overflow: "hidden",

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)",
              transition: "all 0.6s ease",
            },
            "&:hover": {
              background: "linear-gradient(135deg, rgba(26, 54, 93, 0.95), rgba(15, 35, 71, 0.95))",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(26, 54, 93, 0.35)",
              borderColor: "rgba(255, 255, 255, 0.25)",
              "&::before": {
                left: "100%",
              }
            },
            "&:active": {
              transform: "translateY(0px) scale(0.98)",
            }
          }}
        >
          Add to Bag
        </Button>

        {/* Add to Wishlist Button (Frosty Glassmorphism) */}
        <Button
          variant="outlined"
          startIcon={<FavoriteBorderIcon />}
          sx={{
            flex: 1,
            minWidth: "160px",
            height: "44px",
            textTransform: "capitalize",
            fontWeight: 600,
            borderRadius: "8px",
            color: "#4a5568",
            border: "1px solid rgba(203, 213, 224, 0.6)",
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(226, 232, 240, 0.4) 100%)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.02)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              borderColor: "rgba(160, 174, 192, 0.8)",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(237, 242, 247, 0.6) 100%)",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06), inset 0 0 10px rgba(255, 255, 255, 0.5)",
              color: "#1a365d"
            },
            "&:active": {
              transform: "translateY(0px) scale(0.98)",
            }
          }}
        >
          Add to Wishlist
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductInformation;