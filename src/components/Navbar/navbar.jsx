import { Box, useMediaQuery, useTheme } from "@mui/material";
import DesktopHeader from "./desktopnavbar/desktopnavbar";

function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                height: "70px",
                width: "100%",
            }}
        >
            {isMobile ? (
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        px: 2,
                    }}
                >
                    Mobile Navbar
                </Box>
            ) : (
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",

                    }}
                >
                    <DesktopHeader />
                </Box>
            )}
        </Box>
    );
}

export default Navbar;