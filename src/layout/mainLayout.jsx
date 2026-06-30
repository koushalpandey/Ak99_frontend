import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar/navbar";
import FooterLayout from "../components/Fotter/index";
import ScrollToTop from "../components/scrolltop/scrolltop";

const MainLayout = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <ScrollToTop />
            <Navbar />

            <Box
                component="main"
                sx={{
                    flex: 1,
                    py: 3,
                }}
            >
                <Container maxWidth={false}>
                    <Outlet />
                </Container>
            </Box>

            <FooterLayout />
        </Box>
    );
};

export default MainLayout;