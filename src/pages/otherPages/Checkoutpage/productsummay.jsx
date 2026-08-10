// components/ProductSummary.jsx
import {
    Box,
    Grid,
    Card,
    Typography,
    Chip,
    Stack,
} from '@mui/material';

export default function ProductSummary({ product }) {
    return (
        <Card
            sx={{
                p: 2,
                mb: 2,
                bgcolor: '#FFFFFF',
                border: '1px solid #F1F5F9',
                borderRadius: 4,
                boxShadow: 'none'
            }}
        >
            <Stack spacing={2}>
                <Box
                    sx={{
                        p: 2.5,
                        border: "1px solid #F1F5F9",
                        borderRadius: 3,
                        bgcolor: "#FFF",
                        transition: "all .25s ease",
                        "&:hover": {
                            borderColor: "#E2E8F0",
                            boxShadow: "0 4px 16px rgba(15,23,42,.06)",
                        },
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid
                            size={{ xs: 12, sm: 2 }}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    bgcolor: "#F8FAFC",
                                    borderRadius: 2,
                                    width: 90,
                                    height: 80,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={product?.images?.[0]?.original}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid
                            size={{ xs: 12, sm: 6 }}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Box sx={{ width: "100%" }}>
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        color: "secondary.main",
                                    }}
                                >
                                    {product?.name}
                                </Typography>

                                <Typography
                                    sx={{
                                        mt: 0.8,
                                        color: "#64748B",
                                        fontSize: "13px",
                                    }}
                                >
                                    {product?.category?.name}
                                </Typography>

                                <Typography
                                    sx={{
                                        mt: 0.5,
                                        color: "#94A3B8",
                                        fontSize: 13,
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {product?.name}
                                </Typography>

                                <Chip
                                    label="In Stock"
                                    size="small"
                                    sx={{
                                        mt: 2,
                                        bgcolor: "#DCFCE7",
                                        color: "#15803D",
                                        fontWeight: 700,
                                        borderRadius: 1.5,
                                        height: 24,
                                    }}
                                />
                            </Box>
                        </Grid>

                        <Grid
                            size={{ xs: 12, sm: 4 }}
                            sx={{
                                display: "flex",
                                justifyContent: {
                                    xs: "flex-start",
                                    sm: "flex-end",
                                },
                            }}
                        >
                            <Stack
                                spacing={2}
                                sx={{
                                    alignItems: {
                                        xs: "stretch",
                                        sm: "flex-end",
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        textAlign: {
                                            xs: "left",
                                            sm: "right",
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: "secondary.main",
                                        }}
                                    >
                                        ₹{product?.price}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Card>
    );
}