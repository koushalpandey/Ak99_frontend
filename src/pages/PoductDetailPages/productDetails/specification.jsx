import {
    Container,
    Typography,
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
        <Container maxWidth="xl" sx={{ py: 4 }} disableGutters>


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
                        <Typography sx={{
                            fontWeight: 500
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


        </Container>
    );
}