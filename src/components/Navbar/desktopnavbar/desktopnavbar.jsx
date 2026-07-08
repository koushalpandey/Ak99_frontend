import { Box, Container } from "@mui/material";

import HeaderTop from "./LogowithLocation/logowithLocation";
import HeaderSearch from "./searchbar/searchbar";
import HeaderActions from "./headeraction/header.action";

function DesktopHeader() {
    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: 80,
                bgcolor: "#fff",
                borderBottom: "1px solid #e5e7eb",
                zIndex: 999,

            }}
        >
            <Container maxWidth={false}>
                <Box
                    sx={{
                        height: 80,
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                    }}
                >
                    <Box
                        sx={{
                            width: 260,
                            flexShrink: 0,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <HeaderTop />
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                        }}
                    >
                        <HeaderSearch />
                    </Box>

                    <Box
                        sx={{
                            width: 320,
                            flexShrink: 0,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <HeaderActions />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default DesktopHeader;