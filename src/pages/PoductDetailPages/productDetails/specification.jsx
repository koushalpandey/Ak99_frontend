import {
    Container,
    Typography,
    Grid,
    Paper,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,

    Box,
} from "@mui/material";
import {
    WorkspacePremiumOutlined,
    ExpandMore as ExpandMoreIcon,
    LocalShippingOutlined,
    GppGoodOutlined,
    AccessTimeOutlined,


} from "@mui/icons-material";

export default function Specification() {

    const product = {
         specifications: {
            "Material": "100% Full-Grain Italian Leather",
            "Lining": "Premium Satin & Cotton Blend",
            "Closure": "Heavy-Duty YKK Zipper with Snap Buttons",
            "Pockets": "2 Front Zipper Pockets, 2 Inner Pockets",
            "Collar": "Classic Notch Lapel",
            "Sleeves": "Full Sleeves with Zip Cuffs",
            "Fit": "Regular Fit (True to Size)",
            "Care": "Professional Leather Clean Only",
            "Country of Origin": "Handcrafted in Italy",
            "Sustainability": "Ethically Sourced Leather, Eco-Friendly Dyes",
        },



        warranty: "5 Year Craftsmanship Warranty",
        returns: "60-Day Easy Returns",


    };

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Grid container spacing={3}>

                <Grid size={12}>
                      {/* Electrical Specifications Panel */}
                          <Box sx={{ mb: 4 }}>
                            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>

                              <Typography  sx={{ fontWeight: 600, color: "#1a202c",  letterSpacing: 0.5 }}>
                                 Specifications
                              </Typography>
                            </Stack>
                            <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#f7fafc", borderColor: "#e2e8f0", borderRadius: "8px" }}>
                              <Grid container spacing={2}>
                                {[
                                  { label: "Input Voltage", value: "100-240V AC, 50/60Hz" },
                                  { label: "Power Consumption", value: "5W Max (LED Illumination Mode)" },
                                  { label: "Power Connection", value: "USB-C Detachable Interface (5V 1A)" },
                                  { label: "Smart Connectivity", value: "Bluetooth Low Energy (BLE) Mesh" },
                                ].map((spec, index) => (
                                  <Grid item xs={12} sm={6} key={index}>
                                    <Typography variant="caption" display="block" sx={{ color: "#718096", fontWeight: 500 }}>
                                      {spec.label}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#2d3748", fontWeight: 600 }}>
                                      {spec.value}
                                    </Typography>
                                  </Grid>
                                ))}
                              </Grid>
                            </Paper>
                          </Box>
                     {/* Warranty & Returns Accordion */}
                    <Accordion
                        sx={{
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: 2,
                            "&:before": { display: "none" },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                backgroundColor: "action.hover",
                                borderRadius: "8px 8px 0 0",
                                "&.Mui-expanded": {
                                    borderRadius: "8px 8px 0 0",
                                }
                            }}
                        >
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <GppGoodOutlined color="success" />
                                <Typography  sx={{
                                    fontWeight:500
                                }}>
                                    Warranty & Returns
                                </Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack spacing={2}>
                                <Paper variant="outlined" sx={{ p: 2 }}>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <WorkspacePremiumOutlined color="primary" />
                                        <Box>
                                            <Typography variant="body2" fontWeight="600">
                                                {product.warranty}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Covers manufacturing defects and craftsmanship
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                                <Paper variant="outlined" sx={{ p: 2 }}>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <AccessTimeOutlined color="info" />
                                        <Box>
                                            <Typography variant="body2" fontWeight="600">
                                                {product.returns}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Free returns within 60 days of purchase
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                                <Paper variant="outlined" sx={{ p: 2 }}>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <LocalShippingOutlined color="secondary" />
                                        <Box>
                                            <Typography variant="body2" fontWeight="600">
                                                Free Worldwide Shipping
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Ships within 24-48 hours
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>

                </Grid>

            </Grid>
        </Container>
    );
}