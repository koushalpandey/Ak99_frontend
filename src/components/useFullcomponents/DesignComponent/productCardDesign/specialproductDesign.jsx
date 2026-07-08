
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import useProductListStore from "../../../../store/productListStores/homepageProductlist";


export default function SpecailProductPicks() {
     const ProductData = useProductListStore((state) => state?.Data);
    const loading = useProductListStore((state) => state?.loading);
    const error = useProductListStore((state) => state?.error);
    const fetchProductList = useProductListStore((state) => state?.fetchProductList);

    console.log(ProductData);

    return (
        <Box sx={{ backgroundColor: "#fff", width: "100%", }}>
            {/* Header Section */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography
                    sx={{ fontWeight: 600, color: "#000" }}
                >
                   {}
                </Typography>

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
                {ProductData?.map((product) => (
                    <Card
                        key={product?.id}
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
                                image={product?.images[0]?.url}
                                alt={product?.title}
                                sx={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%" }}
                            />
                        </Box>

                        {/* Product Details */}
                        <CardContent sx={{ pt: 0, "&:last-child": { pb: 2 } }}>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 500, color: "#212121", mb: 0.5, fontSize: "14px" }}
                            >
                                {product?.name}
                            </Typography>

                            {/* Pricing Row */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 700, color: "#d32f2f", fontSize: "16px" }}
                                >
                                    ₹{product?.price}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ textDecoration: "line-through", color: "#9e9e9e", fontSize: "13px" }}
                                >
                                    ₹{product?.comparePrice}
                                </Typography>
                            </Box>

                            {/* Discount Tag */}
                            <Typography
                                variant="caption"
                                sx={{ fontWeight: 600, color: "#2e7d32", fontSize: "12px" }}
                            >
                                {product?.discount}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}