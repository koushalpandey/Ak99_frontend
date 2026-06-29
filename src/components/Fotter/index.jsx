import { Box, useMediaQuery, useTheme } from "@mui/material";
import Footer from "./desktopFooter/footer";


function FooterLayout() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box

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
                    Mobile fotter
                </Box>
            ) : (
                <Box>
                    <Footer />
                </Box>
            )}
        </Box>
    );
}

export default FooterLayout;