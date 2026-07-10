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

                <img
                    src={`https://flagcdn.com/24x18/${locationData?.address?.country_code}.png`}
                    alt={locationData?.address?.country}
                    width={24}
                    height={18}
                />

                <Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: "center",
                        gap: 0.5
                    }}>

                        <Typography
                            variant="caption"
                            sx={{
                                color: "black.main",
                                fontSize: "12.5px",
                                display: "block",
                                lineHeight: 1.2
                            }}
                        >
                            {locationData?.address?.country}
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "text.secondary",
                                fontSize: "12px",
                                display: "block",
                                lineHeight: 1.2
                            }}
                        >
                            {locationData?.address?.state}
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
                            variant="body2"
                            fontWeight={600}
                            sx={{
                                color: "text.black",
                                fontSize: "14px"
                            }}
                        >
                            {locationData?.address?.state_district}
                        </Typography>
                        <Typography
                            fontWeight={500}
                            sx={{
                                color: "black.main",
                                fontSize: "9.5px"
                            }}
                        >
                            {locationData?.address?.postcode}
                        </Typography>


                    </Box>
                    <Typography
                        fontWeight={600}
                        sx={{
                            color: "black.main",
                            fontSize: "11px"
                        }}
                    >
                        {locationData?.address?.suburb}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default HeaderTop;