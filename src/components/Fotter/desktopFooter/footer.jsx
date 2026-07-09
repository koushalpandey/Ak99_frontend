import { Box, Container, Grid, Typography, TextField, Button, Link, Divider } from "@mui/material";
import { footerLinks } from "../../dummyData/footerData";

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: "secondary.main", color: "dark.main", pt: 6, pb: 3, borderTop: "1px solid #000" }}>
            <Container maxWidth={false}>
                <Grid container spacing={4}>

                    {/* Brand & Newsletter Column */}
                    <Grid size xs={12} md={4}>

                        <Typography

                            sx={{ fontWeight: 800, color: "#ffffff", mb: 2, fontFamily: "sans-serif", tracking: "wider" }}
                        >
                            MY<span style={{ color: "#3182ce" }}>SHOP</span>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
                            Your ultimate destination for top-quality electronics, home essentials, and fashion. Shop smart, live better.
                        </Typography>

                        {/* Newsletter SignUp Section */}
                        <Typography variant="subtitle2" sx={{ color: "dark.main", fontWeight: 600, mb: 1 }}>
                            Subscribe to our newsletter
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Enter your email"
                                sx={{
                                    backgroundColor: "#2d3748",
                                    borderRadius: "4px",
                                    input: { color: "#ffffff", fontSize: "14px" },
                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                    flexGrow: 1
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#3182ce",
                                    color: "#ffffff",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    "&:hover": { backgroundColor: "#2b6cb0" }
                                }}
                            >
                                Join
                            </Button>
                        </Box>
                    </Grid>

                    {/* Dynamic Map Links Columns */}
                    {footerLinks.map((section, index) => (
                        <Grid size xs={6} sm={4} md={2} key={index}>
                            <Typography

                                sx={{ color: "primary.main", fontWeight: 500, mb: 2, fontSize: "14px",  }}
                            >
                                {section.title}
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
                                {section.links.map((link, linkIndex) => (
                                    <Link
                                        key={linkIndex}
                                        href={link.url}
                                        underline="none"
                                        sx={{
                                            color: "black.main",
                                            fontSize: "14px",
                                            transition: "color 0.2s",

                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </Box>
                        </Grid>
                    ))}

                    {/* Connect / Socials Column */}
                    <Grid size xs={6} sm={4} md={2}>
                        <Typography
                            variant="subtitle1"
                            sx={{ color: "#ffffff", fontWeight: 700, mb: 2, fontSize: "15px", fontFamily: "sans-serif" }}
                        >
                            Connect With Us
                        </Typography>
                        {/* <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                            <IconButton size="small" sx={{ color: "#a0aec0", "&:hover": { color: "#3b5998" } }}>
                                <Facebook size={20} />
                            </IconButton>
                            <IconButton size="small" sx={{ color: "#a0aec0", "&:hover": { color: "#e1306c" } }}>
                                <Instagram size={20} />
                            </IconButton>
                            <IconButton size="small" sx={{ color: "#a0aec0", "&:hover": { color: "#1da1f2" } }}>
                                <Twitter size={20} />
                            </IconButton>
                            <IconButton size="small" sx={{ color: "#a0aec0", "&:hover": { color: "#ff0000" } }}>
                                <Youtube size={20} />
                            </IconButton>
                        </Box> */}
                    </Grid>

                </Grid>

                <Divider sx={{ my: 4, borderColor: "#2d3748" }} />

                {/* Bottom copyright and compliance section */}
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
                    <Typography variant="caption" sx={{ fontSize: "12px" }}>
                        © {new Date().getFullYear()} MyShop Ltd. All rights reserved.
                    </Typography>

                    {/* Static Payment Icons Wrapper */}
                    <Box sx={{ display: "flex", gap: 1.5, opacity: 0.7 }}>
                        <Box component="img" src="https://img.icons8.com/color/36/visa.png" alt="Visa" />
                        <Box component="img" src="https://img.icons8.com/color/36/mastercard.png" alt="Mastercard" />
                        <Box component="img" src="https://img.icons8.com/color/36/google-pay.png" alt="Google Pay" />
                        <Box component="img" src="https://img.icons8.com/color/36/apple-pay.png" alt="Apple Pay" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}