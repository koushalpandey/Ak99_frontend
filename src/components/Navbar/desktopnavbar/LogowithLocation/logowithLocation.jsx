import { Box, Typography, } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import logo from "../../../../assets/ak99-logo.png";
import { useNavigate } from "react-router-dom";

function HeaderTop() {
    const navigate = useNavigate()

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

                <FmdGoodOutlinedIcon
                    sx={{
                        color: "primary.main",
                        fontSize: "18x",
                        alignSelf: "center",
                        mt: 0.5,


                    }}
                />

                <Box>
                    <Typography
                        variant="caption"
                        sx={{
                            color: "text.secondary",
                            fontSize: "12px",
                            display: "block",
                            lineHeight: 1.2
                        }}
                    >
                        Deliver to
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
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
                            Mumbai, 400001
                        </Typography>


                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default HeaderTop;