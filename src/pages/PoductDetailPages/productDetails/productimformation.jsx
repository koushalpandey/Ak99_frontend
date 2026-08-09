import { Box, Typography, Button, Rating, Stack, } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";


const ProductInformation = ({ productData }) => {
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        product: productData,
      },
    });
  };

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
      <Stack
        direction="row"
        spacing={1.5}

        sx={{
          mt: 4,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent:"center",
          width: '100%'
        }}
      >

        <Button
          variant="contained"
          startIcon={<ShoppingBagIcon />}
          onClick={handleBuyNow}
          sx={{
            width: "460px",
            m: "auto",
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

            "&:hover": {
              background:
                "linear-gradient(135deg, rgba(26, 54, 93, 0.95), rgba(15, 35, 71, 0.95))",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(26, 54, 93, 0.35)",
            },

            "&:active": {
              transform: "translateY(0px) scale(0.98)",
            },
          }}
        >
          Buy Now
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductInformation;