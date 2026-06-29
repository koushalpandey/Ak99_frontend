import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const ProductCard = ({
  image,
  title,
  currentPrice,
  originalPrice,
  discount,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "16px",
        width: "210px",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.06)",
        },
      }}
    >
      {/* Product Image */}
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "170px",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            borderRadius: "12px",
            objectFit: "contain",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </Box>

      {/* Product Details */}
      <CardContent sx={{ pt: 0, px: 2, pb: "12px !important" }}>
        <Typography
          variant="body1"
          noWrap
          sx={{
            fontWeight: 500,
            color: "black.main",
            fontSize: "0.9rem",
            mb: 0.5,
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            gap: 1,
            mb: 0.5,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: "custom.danger",
              fontSize: "1rem",
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
                fontSize: "0.8rem",
              }}
            >
              ₹{originalPrice}
            </Typography>
          )}
        </Box>

        <Typography
          sx={{
            color: "primary.main",
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        >
          {discount}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;