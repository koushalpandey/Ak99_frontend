import { useEffect } from 'react';
import { Box, Grid, Card, CardMedia, CircularProgress, Typography } from '@mui/material';
import useSliderStore from '../../../store/sliderStore';

function SliderComponent() {
    const sliderData = useSliderStore((state) => state?.slider);
    const loading = useSliderStore((state) => state?.loading);
    const error = useSliderStore((state) => state?.error);
    const fetchSlider = useSliderStore((state) => state?.fetchSlider);

    useEffect(() => {
        fetchSlider();
    }, [fetchSlider]);

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
    const imageUrl =firstSlider?.image?.original || firstSlider?.image?.large ||firstSlider?.image?.url ||'N/A';

    const imageAlt = firstSlider?.title || "Banner";

    return (
        <Box sx={{ width: '100%', p: { xs: 2, sm: 3 }, mt: 2, bgcolor: "secondary.main" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card
                        sx={{
                            width: "100%",
                            borderRadius: 2,
                            boxShadow: "none",
                            height: 400
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={imageUrl}
                            alt={imageAlt}
                            sx={{
                                width: "100%",
                                height:"100%",
                                objectFit: "contain",
                            }}
                        />
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
}

export default SliderComponent;