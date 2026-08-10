// components/PriceDetails.jsx
import {
    Box,
    Card,
    Typography,
    Stack,
    Divider,
    Button,
} from '@mui/material';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import RazorpayPaymentButton from '../../../components/Razorpay/Rzorpay';

export default function PricePriceDetail({
    product,
    addressData,
    user,
    onPaymentSuccess
}) {
    return (
        <Card
            sx={{
                p: 2.5,
                mb: 2,
                bgcolor: '#FFFFFF',
                border: '1px solid #F1F5F9',
                borderRadius: 4,
                boxShadow: 'none'
            }}
        >
            <Typography
                sx={{
                    fontWeight: 600,
                    color: 'dark.main',
                    mb: 2
                }}
            >
                Price Details
            </Typography>
            <Stack spacing={1.5}>
                <Stack
                    direction="row"
                    sx={{ gap: 1 }}
                >
                    <Typography
                        sx={{
                            fontSize: "13px",
                            color: '#64748B'
                        }}
                    >
                        Total MRP :
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: 'secondary.main'
                        }}
                    >
                        ₹{product?.price}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    sx={{ gap: 1 }}
                >
                    <Typography
                        sx={{
                            fontSize: "13px",
                            color: '#64748B'
                        }}
                    >
                        Market Price:
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: 'secondary.main'
                        }}
                    >
                        ₹{product?.comparePrice}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    sx={{ gap: 1 }}
                >
                    <Typography
                        sx={{
                            fontSize: "13px",
                            color: '#64748B'
                        }}
                    >
                        Shipping
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "13px",
                            color: '#22C55E',
                            fontWeight: 500
                        }}
                    >
                        FREE
                    </Typography>
                </Stack>

                <Divider
                    sx={{
                        my: 1,
                        borderColor: '#F1F5F9'
                    }}
                />
                <Stack
                    direction="row"
                    sx={{ gap: 1 }}
                >
                    <Typography
                        sx={{
                            fontWeight: 600,
                            color: 'dark.main',
                        }}
                    >
                        Total Amount
                    </Typography>
                    <Typography
                        sx={{
                            color: 'secondary.main',
                            fontWeight: 900
                        }}
                    >
                        ₹{product?.price}
                    </Typography>
                </Stack>
            </Stack>

            <Box sx={{ mt: 3 }}>
                <RazorpayPaymentButton
                    productId={product?.id}
                    address={addressData}
                    user={user}
                    onSuccess={onPaymentSuccess}
                />

                <Button
                    component={Link}
                    to="/"
                    variant="outlined"
                    fullWidth
                    startIcon={<ArrowLeft size={18} />}
                    sx={{
                        mt: 1.5,
                        py: 1.2,
                        borderColor: '#E2E8F0',
                        color: '#475569',
                        textTransform: 'none',
                        borderRadius: 3,
                        fontWeight: 600
                    }}
                >
                    Continue Shopping
                </Button>
            </Box>
        </Card>
    );
}