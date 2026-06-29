import React from "react";
import { Box, Typography, Link, Card, CardMedia, CardContent, Grid } from "@mui/material";


export default function SpecailProductPicks({ productData }) {
    return (
        <Box sx={{ backgroundColor: "#fff", width: "100%", }}>
            {/* Header Section */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography
                    sx={{ fontWeight: 600, color: "#000" }}
                >
                    Top Picks For You
                </Typography>
                <Link
                    href="#"
                    underline="none"
                    sx={{ fontWeight: 600, color: "#1976d2", fontSize: "14px", fontFamily: "Be Vietnam Pro" }}
                >
                    View All
                </Link>
            </Box>


            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                    pb: 1,
                    "::-webkit-scrollbar": { display: "none" },
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                }}
            >
                {productData.map((product) => (
                    <Card
                        key={product.id}
                        sx={{
                            minWidth: 180,
                            maxWidth: 220,
                            borderRadius: "16px",
                            border: "1px solid #eaeaea",
                            boxShadow: "none",
                            backgroundColor: "#fff",
                            flexShrink: 0
                        }}
                    >
                        {/* Product Image Container */}
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2, height: 140 }}>
                            <CardMedia
                                component="img"
                                image={product.image}
                                alt={product.title}
                                sx={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%" }}
                            />
                        </Box>

                        {/* Product Details */}
                        <CardContent sx={{ pt: 0, "&:last-child": { pb: 2 } }}>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 500, color: "#212121", mb: 0.5, fontSize: "14px" }}
                            >
                                {product.title}
                            </Typography>

                            {/* Pricing Row */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 700, color: "#d32f2f", fontSize: "16px" }}
                                >
                                    ₹{product.price}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ textDecoration: "line-through", color: "#9e9e9e", fontSize: "13px" }}
                                >
                                    ₹{product.originalPrice}
                                </Typography>
                            </Box>

                            {/* Discount Tag */}
                            <Typography
                                variant="caption"
                                sx={{ fontWeight: 600, color: "#2e7d32", fontSize: "12px" }}
                            >
                                {product.discount}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}