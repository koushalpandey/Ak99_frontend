import { useEffect } from 'react';
import { Box, Card, CardMedia, CircularProgress, IconButton, Typography } from '@mui/material';
import useSliderStore from '../../../store/homepageStores/sliderStore';
import bannerimg from "../../../assets/Gemini_Generated_Image_zeveo9zeveo9zeve.png"
import bannerimg1 from "../../../assets/Gemini_Generated_Image_5dc8js5dc8js5dc8.png"
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function SliderComponent() {
    const bannerImages = [
        { id: 1, src: bannerimg, alt: 'Special Offers Banner 1' },
        { id: 2, src: bannerimg1, alt: 'Special Offers Banner 2' },
    ];
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = bannerImages.length;
    const sliderData = useSliderStore((state) => state?.slider);
    const loading = useSliderStore((state) => state?.loading);
    const error = useSliderStore((state) => state?.error);
    const fetchSlider = useSliderStore((state) => state?.fetchSlider);

    useEffect(() => {
        fetchSlider();
    }, [fetchSlider]);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
        }, 4000);

        return () => clearInterval(timer);
    }, [maxSteps]);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
                <CircularProgress color="secondary" />
            </Box>
        );
    }


    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
                <Typography color="error">Failed to load banners.</Typography>
            </Box>
        );
    }
    const firstSlider = Array.isArray(sliderData) ? sliderData[0] : sliderData?.data?.[0];
    const imageUrl = firstSlider?.image?.original || firstSlider?.image?.large || firstSlider?.image?.url || 'N/A';

    const imageAlt = firstSlider?.title || "Banner";

    return (
          <Box
    sx={{
      width: "100%",
      mt: 2,
      overflow: "hidden",
      position: "relative",
      borderRadius: 2,
      "&:hover .slider-arrow": {
        opacity: 1,
      },
    }}
  >

    <Box
      sx={{
        display: "flex",
        transform: `translateX(-${activeStep * 100}%)`,
        transition: "transform 0.6s ease-in-out",
      }}
    >
      {bannerImages.map((image) => (
        <Box
          key={image.id}
          sx={{
            width: "100%",
            minWidth: "100%",
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: 400,
              borderRadius: 0,
              boxShadow: "none",
            }}
          >
            <CardMedia
              component="img"
              image={image.src}
              alt={image.alt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Card>
        </Box>
      ))}
    </Box>

    {/* Left Arrow */}
    <IconButton
      className="slider-arrow"
      onClick={handleBack}
      sx={{
        position: "absolute",
        top: "50%",
        left: 15,
        transform: "translateY(-50%)",
        bgcolor: "rgba(255,255,255,.8)",
        opacity: 0,
        transition: ".3s",
        "&:hover": {
          bgcolor: "#fff",
        },
      }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>

    {/* Right Arrow */}
    <IconButton
      className="slider-arrow"
      onClick={handleNext}
      sx={{
        position: "absolute",
        top: "50%",
        right: 15,
        transform: "translateY(-50%)",
        bgcolor: "rgba(255,255,255,.8)",
        opacity: 0,
        transition: ".3s",
        "&:hover": {
          bgcolor: "#fff",
        },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>

    {/* Dots */}
    <Box
      sx={{
        position: "absolute",
        bottom: 15,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 1,
      }}
    >
      {bannerImages.map((_, index) => (
        <Box
          key={index}
          onClick={() => setActiveStep(index)}
          sx={{
            width: activeStep === index ? 24 : 8,
            height: 8,
            borderRadius: 10,
            bgcolor:
              activeStep === index
                ? "#fff"
                : "rgba(255,255,255,.5)",
            cursor: "pointer",
            transition: ".3s",
          }}
        />
      ))}
    </Box>
  </Box>

    );
}

export default SliderComponent;