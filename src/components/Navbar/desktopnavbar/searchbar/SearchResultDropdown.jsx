import {
    Avatar,
    Box,
    CircularProgress,
    Divider,
    List,
    ListItemButton,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function SearchResultDropdown({
    loading,
    products,
    search,
    onClose,
}) {
    const navigate = useNavigate();
    if (!search.trim()) return null;

    return (
        <Box
            sx={{
                position: "absolute",
                top: "110%",
                left: 0,
                width: "100%",
                bgcolor: "#fff",
                borderRadius: 3,
                border: "1px solid #ececec",
                boxShadow: "0 16px 40px rgba(0,0,0,.12)",
                overflow: "hidden",
                zIndex: 9999,
                maxHeight: 420,
                overflowY: "auto",
            }}
        >
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        py: 4,
                    }}
                >
                    <CircularProgress size={28} />
                </Box>
            ) : products.length ? (
                <List disablePadding>
                    {products.map((product, index) => {
                        const image =
                            product.images?.[0]?.original ||
                            product.images?.[0]?.url || "No Product Found";

                        return (
                            <Box key={product.id}>
                                <ListItemButton
                                    onClick={() => {
                                        onClose?.();
                                        navigate(`/productDetail/${product.slug}`);
                                    }}
                                    sx={{
                                        px: 2,
                                        py: 1.5,
                                        transition: ".25s",
                                        "&:hover": {
                                            bgcolor: "#f8f9fb",
                                        },
                                    }}
                                >
                                    <Avatar
                                        variant="rounded"
                                        src={image}
                                        alt={product.name}
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            mr: 2,
                                            borderRadius: 2,
                                            bgcolor: "#f5f5f5",
                                        }}
                                    />

                                    <Box sx={{ flex: 1 }}>
                                        <Typography
                                            sx={{
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: "#222",
                                                mb: 0.5,
                                            }}
                                        >
                                            {product.name}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: 12,
                                                color: "#777",
                                            }}
                                        >
                                            {product.category?.name}
                                        </Typography>
                                    </Box>


                                </ListItemButton>

                                {index !== products.length - 1 && <Divider />}
                            </Box>
                        );
                    })}
                </List>
            ) : (
                <Box
                    sx={{
                        py: 5,
                        textAlign: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 600,
                            color: "#333",
                        }}
                    >
                        No products found
                    </Typography>

                    <Typography
                        sx={{
                            mt: 0.5,
                            fontSize: 13,
                            color: "#888",
                        }}
                    >
                        Try searching with another keyword.
                    </Typography>
                </Box>
            )}
        </Box>
    );
}

export default SearchResultDropdown;