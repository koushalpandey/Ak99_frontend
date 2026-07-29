import { Box, Skeleton } from "@mui/material";


function CategorySkeletonComponent() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                overflowX: "auto",
                backgroundColor: "#fff",
                width: "100%",
                gap: 5,
                py: 2,
                px: 1,
                "::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
            }}
        >
            {[...Array(12)].map((_, index) => (
                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexShrink: 0,
                    }}
                >
                    <Skeleton
                        variant="circular"
                        width={90}
                        height={90}
                        animation="wave"
                    />

                    <Skeleton
                        variant="text"
                        width={70}
                        height={18}
                        animation="wave"
                        sx={{ mt: 1 }}
                    />

                    <Skeleton
                        variant="text"
                        width={50}
                        height={18}
                        animation="wave"
                    />
                </Box>
            ))}
        </Box>
    );


}


export default CategorySkeletonComponent