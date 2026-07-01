
import { useState } from "react";
import { Card, CardMedia, Grid, Box } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import WishlistButton from "../../../components/useFullcomponents/wishListButton/wishlist";



const ProductImages = ({ Productimages , productId ,userId}) => {
 const [selectedImage, setSelectedImage] = useState(0);
 const images = Array.isArray(Productimages) ? Productimages : [];

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
        <WishlistButton
          userId={userId}
          productId={productId}

        />

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
              height: { xs: 280, md: 460 },
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={images[selectedImage]?.original}
              alt={`Product ${selectedImage + 1}`}
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
        {images?.map((img, index) => (
          <Grid size={{ xs: 3, }} key={img?.fileId}>
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
                image={img.thumbnail}
                alt={`Thumbnail ${index + 1}`}
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
        {images?.map((_, index) => (
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