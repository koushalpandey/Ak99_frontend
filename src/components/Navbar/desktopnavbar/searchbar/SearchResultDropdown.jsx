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
import { motion, AnimatePresence } from "framer-motion";

function SearchResultDropdown({
    loading,
    products,
    search,
    onClose,
}) {
    const navigate = useNavigate();
    if (!search.trim()) return null;

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.25,
                ease: "easeOut",
                staggerChildren: 0.05,
            },
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
        hover: {
            scale: 1.02,
            backgroundColor: "#f8f9fb",
            transition: {
                duration: 0.2,
            },
        },
    };

    const loadingVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };

    const emptyStateVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    const emptyTextVariants = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <AnimatePresence>
            <Box
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
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
                    transformOrigin: "top center",
                    "&::-webkit-scrollbar": {
                        width: 6,
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#f5f5f5",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#ddd",
                        borderRadius: 3,
                        "&:hover": {
                            backgroundColor: "#ccc",
                        },
                    },
                }}
            >
                {loading ? (
                    <Box
                        component={motion.div}
                        variants={loadingVariants}
                        animate="animate"
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
                                product.images?.[0]?.url || "N/A";

                            return (
                                <Box
                                    key={product.id}
                                    component={motion.div}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                >
                                    <ListItemButton
                                        onClick={() => {
                                            onClose?.();
                                            navigate(`/productDetail/${product.slug}`);
                                        }}
                                        sx={{
                                            px: 2,
                                            py: 1.5,
                                            transition: ".25s",
                                            position: "relative",
                                            overflow: "hidden",
                                            "&::before": {
                                                content: '""',
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                bottom: 0,
                                                width: 3,
                                                backgroundColor: "primary.main",
                                                transform: "scaleY(0)",
                                                transition: "transform 0.3s ease",
                                            },
                                            "&:hover::before": {
                                                transform: "scaleY(1)",
                                            },
                                        }}
                                    >
                                        <motion.div
                                            whileHover={{
                                                scale: 1.05,
                                                rotate: 2,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                            style={{
                                                marginRight: 16,
                                            }}
                                        >
                                            <Avatar
                                                variant="rounded"
                                                src={image}
                                                alt={product.name}
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: 2,
                                                    bgcolor: "#f5f5f5",
                                                }}
                                            />
                                        </motion.div>

                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                component={motion.div}
                                                whileHover={{
                                                    color: "primary.main",
                                                }}
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: "#222",
                                                    mb: 0.5,
                                                    transition: "color 0.2s ease",
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

                                        <motion.div
                                            whileHover={{
                                                x: 5,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: 12,
                                                    color: "primary.main",
                                                    fontWeight: 500,
                                                    opacity: 0,
                                                    transition: "opacity 0.3s ease",
                                                    "&:hover": {
                                                        opacity: 1,
                                                    },
                                                }}
                                            >
                                                →
                                            </Typography>
                                        </motion.div>
                                    </ListItemButton>

                                    {index !== products.length - 1 && (
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.05,
                                            }}
                                            style={{
                                                transformOrigin: "left",
                                            }}
                                        >
                                            <Divider />
                                        </motion.div>
                                    )}
                                </Box>
                            );
                        })}
                    </List>
                ) : (
                    <Box
                        component={motion.div}
                        variants={emptyStateVariants}
                        initial="hidden"
                        animate="visible"
                        sx={{
                            py: 5,
                            textAlign: "center",
                        }}
                    >
                        <motion.div
                            variants={emptyTextVariants}
                            whileHover={{
                                scale: 1.05,
                                rotate: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    color: "#333",
                                    fontSize: 18,
                                }}
                            >
                                🔍 No products found
                            </Typography>
                        </motion.div>

                        <motion.div
                            variants={emptyTextVariants}
                            whileHover={{
                                y: -2,
                            }}
                        >
                            <Typography
                                sx={{
                                    mt: 0.5,
                                    fontSize: 13,
                                    color: "#888",
                                }}
                            >
                                Try searching with another keyword.
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.3,
                                type: "spring",
                                stiffness: 200,
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 360,
                            }}
                            sx={{
                                mt: 2,
                                fontSize: 40,
                                display: "inline-block",
                            }}
                        >
                            🛒
                        </motion.div>
                    </Box>
                )}
            </Box>
        </AnimatePresence>
    );
}

export default SearchResultDropdown;