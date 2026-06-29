// ProductImages.jsx
import { useState } from "react";
import { Card, CardMedia, Grid, Box, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

// Replace with your actual image imports
import dummyImage1 from "../../../assets/hero-banner.png";

const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const images = [
    { id: 1, url: dummyImage1, alt: "Product main view" },
    { id: 2, url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", alt: "Product side view" },
    { id: 3, url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", alt: "Product top view" },
    { id: 4, url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", alt: "Product packaging" },
  ];

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: 0, md: 3 },

      }}
    >
      {/* Wishlist Button */}
      <Box sx={{ position: "relative", mb: 2 }}>
        <IconButton
          onClick={() => setIsWishlisted(!isWishlisted)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(255,255,255,0.9)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            zIndex: 10,
            padding: "6px",
            "&:hover": {
              backgroundColor: "#ffffff",
              transform: "scale(1.05)",
            },
            transition: "all 0.2s ease",
          }}
        >
          {isWishlisted ? (
            <FavoriteIcon sx={{ color: "#e74c3c", fontSize: 20 }} />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: 20 }} />
          )}
        </IconButton>

        {/* Main Image */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 2,
            backgroundColor: "#f8f9fa",
            border: "1px solid #f0f0f0",
          }}
        >
          <Card
            elevation={0}
            sx={{
              width: "100%",
              height: { xs: 280, md: 580 },
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={images[selectedImage].url}
              alt={images[selectedImage].alt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Card>

          {/* Image Counter */}
          <Box
            sx={{
              position: "absolute",
              bottom: 12,
              left: 12,
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "#fff",
              padding: "2px 10px",
              borderRadius: 1,
              fontSize: "0.7rem",
              fontWeight: 500,
            }}
          >
            {selectedImage + 1}/{images.length}
          </Box>

          {/* Zoom Icon */}
          <Box
            sx={{
              position: "absolute",
              bottom: 12,
              right: 12,
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: "50%",
              padding: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              opacity: 0,
              transform: "scale(0.8)",
              transition: "all 0.3s ease",
              pointerEvents: "none",
            }}
            className="zoom-icon"
          >
            <ZoomInIcon sx={{ fontSize: 18, color: "#333" }} />
          </Box>
        </Box>
      </Box>

      {/* Thumbnails */}
      <Grid container spacing={1}>
        {images.map((img, index) => (
          <Grid size={{ xs: 3, }} key={img.id}>
            <Card
              onClick={() => handleThumbnailClick(index)}
              elevation={0}
              sx={{
                height: { xs: 60, md: 80 },
                borderRadius: 1.5,
                overflow: "hidden",
                cursor: "pointer",
                border: selectedImage === index ? "2px solid #1976d2" : "2px solid transparent",
                boxShadow: selectedImage === index ? "0 2px 10px rgba(25, 118, 210, 0.2)" : "0 1px 4px rgba(0,0,0,0.06)",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={img.url}
                alt={img.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Mobile Dots */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          gap: 0.5,
          mt: 1.5,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleThumbnailClick(index)}
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: selectedImage === index ? "#1976d2" : "#ddd",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductImages;