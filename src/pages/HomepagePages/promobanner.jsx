import {Grid, Box, Typography, Button, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const bannerData = [
  {
    tag: "UP TO 50% OFF",
    title: "Summer\nSale",
    actionText: "Shop Now",
    actionLink: "#",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=600&auto=format&fit=crop",
    bgColor: "#D5E5DA",
    textColor: "#2E5036",
  },
  {
    tag: "NEW ARRIVALS",
    title: "Check Out\nWhat's New",
    actionText: "Explore Now",
    actionLink: "#",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop",
    bgColor: "#F4E3D7",
    textColor: "#7C6E65",
  },
  {
    tag: "TRENDING NOW",
    title: "Best Sellers\nCollection",
    actionText: "Shop Now",
    actionLink: "#",
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=600&auto=format&fit=crop",
    bgColor: "#CBE5DA",
    textColor: "#2E4D41",
  },
];

const PromoBanners = () => {
  return (
    <Box sx={{ width: "100%"}}>
      <Grid container spacing={3}>
        {bannerData.map((banner, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Box
              sx={{
                backgroundColor: banner.bgColor,
                borderRadius: "20px",
                height: "260px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: { xs: 3, sm: 4 },
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  top: 0,
                  width: "50%",
                  backgroundImage: `url(${banner.image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  pointerEvents: "none",
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1, maxWidth: "55%" }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: banner.textColor,
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    fontSize: "0.75rem",
                    display: "block",
                    mb: 2,
                    opacity: 0.8,
                  }}
                >
                  {banner.tag}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#000000",
                    fontSize: { xs: "1.75rem", lg: "2.1rem" },
                    lineHeight: 1.2,
                    whiteSpace: "pre-line",
                  }}
                >
                  {banner.title}
                </Typography>
              </Box>

              <Box sx={{ position: "relative", zIndex: 1, mt: "auto" }}>
                <Button
                  component={Link}
                  href={banner.actionLink}
                  underline="none"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: "1.1rem !important" }} />}
                  sx={{
                    color: "#000000",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    p: 0,
                    minWidth: 0,
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "transparent",
                      opacity: 0.7,
                    },
                  }}
                >
                  {banner.actionText}
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PromoBanners;