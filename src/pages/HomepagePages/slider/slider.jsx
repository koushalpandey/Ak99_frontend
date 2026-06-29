import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import bannerImage from "../../../assets/hero-banner.png"
import useSliderStore from '../../../store/sliderStore';

// --- UTILS FUNCTION ---
export function calculateRemainingTime(hours = 12, minutes = 32, seconds = 33) {
    return (hours * 3600) + (minutes * 60) + seconds;
}

export function formatTimeFromSeconds(totalSeconds) {
    if (totalSeconds <= 0) return { hrs: "00", mins: "00", secs: "00" };
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return {
        hrs: String(hrs).padStart(2, '0'),
        mins: String(mins).padStart(2, '0'),
        secs: String(secs).padStart(2, '0')
    };
}
// ----------------------

function SliderComponent() {
    const [timeLeft, setTimeLeft] = useState(calculateRemainingTime(12, 32, 33));
    const slider = useSliderStore((state) => state.slider);
    const loading = useSliderStore((state) => state.loading);
    const error = useSliderStore((state) => state.error);
    const fetchSlider = useSliderStore((state) => state.fetchSlider);

    useEffect(() => {
        fetchSlider();
    }, [fetchSlider]);
;



    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeStrings = formatTimeFromSeconds(timeLeft);

    return (
        <Box sx={{ width: '100%', p: { xs: 2, sm: 3 }, mt: 2, bgcolor: "secondary.main" }}>
            <Grid container spacing={3}>

                {/* LEFT COLUMN: MAIN BANNER SLIDER */}
                <Grid item size={{ xs: 12, sm: 12, md: 7, lg: 8 }}>


                    <Card
                        sx={{
                            width: "100%",
                            borderRadius: 2,
                            boxShadow: "none",

                        }}
                    >
                        <CardMedia
                            component="img"
                            image={bannerImage}
                            alt="Banner"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",

                            }}
                        />
                    </Card>
                </Grid>

                {/* RIGHT COLUMN: PROMO SIDE CARDS */}
                <Grid item size={{ xs: 12, sm: 12, md: 5, lg: 4 }} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>

                    {/* TOP CARD: MEGA DEALS */}
                    <Box
                        sx={{
                            flex: 1,
                            bgcolor: '#fff3e0',
                            borderRadius: '20px',
                            p: 3,
                            display: 'flex',
                            justifyContent: 'space-between',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', zIndex: 1 }}>
                            <Box>
                                <Typography sx={{ color: '#1a1a1a', fontWeight: 800, fontSize: '20px', lineHeight: 1.2 }}>
                                    Mega Deals
                                </Typography>
                                <Typography sx={{ color: '#1a1a1a', fontWeight: 800, fontSize: '20px', lineHeight: 1.2 }}>
                                    Under ₹99
                                </Typography>
                                <Typography sx={{ color: '#757575', fontSize: '13px', mt: 0.5, fontWeight: 500 }}>
                                    Limited time offers!
                                </Typography>
                            </Box>

                            {/* Countdown Layout Blocks */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mt: 2 }}>
                                {[
                                    { val: timeStrings.hrs, label: "Hrs" },
                                    { val: timeStrings.mins, label: "Mins" },
                                    { val: timeStrings.secs, label: "Secs" }
                                ].map((t, idx) => (
                                    <Box key={idx} sx={{ textAlign: 'center' }}>
                                        <Box
                                            sx={{
                                                bgcolor: '#e74c3c',
                                                color: '#ffffff',
                                                fontWeight: 800,
                                                fontSize: '13px',
                                                px: '6px',
                                                py: '4px',
                                                borderRadius: '5px',
                                                minWidth: '26px'
                                            }}
                                        >
                                            {t.val}
                                        </Box>
                                        <Typography sx={{ fontSize: '9px', color: '#757575', mt: 0.2, fontWeight: 600 }}>
                                            {t.label}
                                        </Typography>
                                    </Box>
                                ))}

                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#e74c3c',
                                        color: '#ffffff',
                                        fontWeight: 700,
                                        fontSize: '11px',
                                        textTransform: 'none',
                                        borderRadius: '6px',
                                        px: 2,
                                        py: 0.6,
                                        ml: 0.5,
                                        boxShadow: 'none',
                                        '&:hover': { bgcolor: '#c0392b', boxShadow: 'none' }
                                    }}
                                >
                                    Shop Now
                                </Button>
                            </Box>
                        </Box>

                        <CardGiftcardIcon
                            sx={{
                                fontSize: '85px',
                                color: '#ff9800',
                                opacity: 0.8,
                                alignSelf: 'center',
                                mr: 1
                            }}
                        />
                    </Box>

                    {/* BOTTOM CARD: SUPER SAVER ZONE */}
                    <Box
                        sx={{
                            flex: 1,
                            bgcolor: '#f3e8ff',
                            borderRadius: '20px',
                            p: 3,
                            display: 'flex',
                            justifyContent: 'space-between',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', zIndex: 1 }}>
                            <Box>
                                <Typography sx={{ color: '#4a148c', fontWeight: 800, fontSize: '20px', lineHeight: 1.2 }}>
                                    Super Saver Zone
                                </Typography>
                                <Typography sx={{ color: '#212121', fontSize: '14px', mt: 0.5, fontWeight: 600 }}>
                                    Everything Under ₹99
                                </Typography>
                            </Box>

                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#6200ea',
                                    color: '#ffffff',
                                    fontWeight: 700,
                                    fontSize: '13px',
                                    textTransform: 'none',
                                    borderRadius: '8px',
                                    px: 2.5,
                                    py: 0.8,
                                    width: 'fit-content',
                                    mt: 2,
                                    boxShadow: 'none',
                                    '&:hover': { bgcolor: '#4a00b0', boxShadow: 'none' }
                                }}
                            >
                                Shop Now
                            </Button>
                        </Box>

                        <Inventory2OutlinedIcon
                            sx={{
                                fontSize: '80px',
                                color: '#7e57c2',
                                opacity: 0.8,
                                alignSelf: 'center',
                                mr: 1.5
                            }}
                        />
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
}

export default SliderComponent;