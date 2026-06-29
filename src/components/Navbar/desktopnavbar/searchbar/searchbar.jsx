import {
    Box,
    Button,
    InputBase,
    Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function HeaderSearch() {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                border: "1px solid",
                borderColor: "#e0e0e0",
                borderRadius: "10px",
                overflow: "hidden",
                height: 45,
                bgcolor: "#ffffff",
                boxShadow: "none",
            }}
        >
            {/* Categories Dropdown Section */}
            <Box
                sx={{
                    minWidth: 160,
                    pl: 3,
                    pr: 2,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRight: "1px solid",
                    borderColor: "#e0e0e0",
                    cursor: "pointer",
                    flexShrink: 0,
                    "&:hover": {
                        bgcolor: "rgba(0, 0, 0, 0.02)",
                    },
                }}
            >
                <Typography
                    sx={{
                        fontSize: "14px",
                        color: "text.black",
                        fontWeight: 400,
                        userSelect: "none",
                    }}
                >
                    All Categories
                </Typography>
                <KeyboardArrowDownIcon
                    sx={{
                        color: "#4a4a4a",
                        fontSize: "20px",
                        ml: 0.5
                    }}
                />
            </Box>

            {/* Input Field Section */}
            <InputBase
                placeholder="Search for products, brands and more..."
                sx={{
                    flex: 1,
                    px: 3,
                    height: "100%",
                    fontSize: "16px",
                    color: "#212121",
                    "& input::placeholder": {
                        color: "#878787",
                        opacity: 1,
                    },
                }}
            />

            {/* Search Button Section */}
            <Button
                variant="contained"
                disableElevation
                sx={{
                    height: "calc(100% - 8px)",
                    marginRight: "4px",
                    borderRadius: "6px",
                    px: 4,
                    flexShrink: 0,
                    bgcolor: "#1877f2",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "16px",
                    "&:hover": {
                        bgcolor: "#166fe5",
                    },
                }}
            >
                Search
            </Button>
        </Box>
    );
}

export default HeaderSearch;