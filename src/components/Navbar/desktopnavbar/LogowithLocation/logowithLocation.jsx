import { Box, Typography, } from "@mui/material";
import logo from "../../../../assets/ak99-logo.png";
import { useNavigate } from "react-router-dom";
import useLocationStore from "../../../../store/userLoactionStore/store";
import { useEffect, useState } from "react";
import axios from "axios";

function HeaderTop() {
    const location = useLocationStore((state) => state.location);
    const [locationData, setLocationData] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        if (!location?.latitude || !location?.longitude) return;

        const fetchLocation = async () => {
            try {
                const { data } = await axios.get(
                    "https://nominatim.openstreetmap.org/reverse",
                    {
                        params: {
                            lat: location.latitude,
                            lon: location.longitude,
                            format: "json",
                        },
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );

                setLocationData(data);
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        fetchLocation();
    }, [location]);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
            }}
        >
            {/* Logo Section */}
            <Box
                onClick={() => navigate('/')}
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                    height: 80,
                    width: "auto",
                    objectFit: "contain",
                    cursor: "pointer",
                }}
            />

            {/* Location Section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>



                <Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: "center",
                        gap: 0.8
                    }}>
                        <img
                            src={`https://flagcdn.com/24x18/${locationData?.address?.country_code}.png`}
                            alt={locationData?.address?.country}
                            width={24}
                            height={18}
                        />

                        <Typography

                            sx={{
                                color: "black.main",
                                fontSize: "14px",
                                display: "block",
                                lineHeight: 1.2
                            }}
                        >

                            {locationData?.address?.country}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5
                        }}
                    >
                        <Typography

                            sx={{
                                color: "black.main",
                                fontSize: "12px",
                                display: "block",
                                lineHeight: 1.2
                            }}
                        >
                            {locationData?.address?.state}
                        </Typography>
                        <Typography
                            fontWeight={500}
                            sx={{
                                color: "black.main",
                                fontSize: "12px"
                            }}
                        >
                            {locationData?.address?.state_district}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                    }}>

                        <Typography
                            fontWeight={600}
                            sx={{
                                color: "black.main",
                                fontSize: "11px"
                            }}
                        >
                            {locationData?.address?.suburb}
                        </Typography>
                        <Typography
                            fontWeight={500}
                            sx={{
                                color: "primary.main",
                                fontSize: "9.5px"
                            }}
                        >
                            {locationData?.address?.postcode}
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}

export default HeaderTop;