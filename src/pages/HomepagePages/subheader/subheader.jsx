
import { Box, Typography } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function Subheader() {




    const colors = {
        textPrimary: "#2c3e50",
        textDeals: "#1877f2",
        badgeBg: "#e74c3c",
        promoOrange: "#ff6b00",
        borderBottom: "#f0f0f0"
    };

    const navItems = ["Home", "Super Saver Zone", "Deals", "Top Picks", "New Arrivals"];

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 1,
                bgcolor: "#ffffff",
                borderBottom: `1px solid ${colors.borderBottom}`,
                transition: 'box-shadow 0.2s ease-in-out',
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "32px"
                }}
            >
                {navItems.map((item) => {
                    return (
                        <Box
                            key={item}
                            sx={{
                                cursor: "pointer",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 450,
                                    color: "text.dark",
                                    "&:hover": {
                                        opacity: 1,
                                    },
                                }}
                            >
                                {item}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>

            {/* Right side promo option */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                }}
            >
                <CardGiftcardIcon
                    sx={{
                        color: "secondary.main",
                        fontSize: "20px"
                    }}
                />
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: colors.promoOrange,
                    }}
                >
                    Everything Under ₹99
                </Typography>
            </Box>
        </Box>
    );
}

export default Subheader;