
import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    Avatar,
    Divider,
    Chip,
    Stack,


} from '@mui/material';
import {
    PlaceOutlined,
    EditOutlined,
    ShoppingBagOutlined,
    ChevronRight,
    ArrowBack,
    LocalActivityOutlined
} from '@mui/icons-material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function CheckoutPage() {
    const cartItems = [
        {
            id: 1,
            name: 'Nike Air Max 270',
            category: "Men's Running Shoes",
            specs: 'Size: 9  |  Color: White/Black',
            price: '₹8,499',
            img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150',
        },
        {
            id: 2,
            name: 'Apple Watch Series 9',
            category: 'GPS, 45mm Midnight Aluminium Case',
            specs: 'Size: One Size  |  Color: Midnight',
            price: '₹41,900',
            img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=150',
        },
        {
            id: 3,
            name: 'Sony WH-1000XM5',
            category: 'Wireless Noise Cancelling Headphones',
            specs: 'Color: Silver  |  Warranty: 1 Year',
            price: '₹29,990',
            img: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=150',
        },
        {
            id: 4,
            name: 'Nike Air Max 270',
            category: "Men's Running Shoes",
            specs: 'Size: 9  |  Color: White/Black',
            price: '₹8,499',
            img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150',
        },
    ];

    return (
        <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', p: { xs: 2, md: 2 }, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%' }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={2}
                    sx={{
                        mb: 3,
                        justifyContent: "space-between",
                        alignItems: { xs: 'flex-start', md: 'center' }
                    }}
                >

                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar sx={{ bgcolor: '#7C3AED', width: 48, height: 48, borderRadius: 3 }}>
                            <ShoppingBagOutlined sx={{ color: '#FFFFFF' }} />
                        </Avatar>
                        <Box>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Typography
                                    sx={{
                                        color: '#1E293B',
                                        fontWeight: 600,
                                        fontSize: "20px"
                                    }}
                                >
                                    My Cart
                                </Typography>
                            </Stack>
                            <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                                You're only a step away from your favorites! ✨
                            </Typography>
                        </Box>
                    </Stack>


                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        useFlexGap
                        sx={{ flexWrap: "wrap" }}
                    >
                        <PlaceOutlined sx={{ color: '#7C3AED', fontSize: 18 }} />
                        <Typography sx={{ color: '#64748B', fontSize: '14px' }}>Delivering to:</Typography>
                        <Typography sx={{ fontWeight: 700, color: '#1E293B', fontSize: '14px' }}>
                            Bangalore, Karnataka, India
                        </Typography>
                        <Button
                            size="small"
                            endIcon={<EditOutlined sx={{ fontSize: 14 }} />}
                            sx={{ color: '#7C3AED', textTransform: 'none', minWidth: 0, p: 0, ml: 0.5, fontWeight: 600 }}
                        >
                            Change
                        </Button>
                    </Stack>
                </Stack>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 7.5 }}>
                        <Card sx={{ p: 2, mb: 2, bgcolor: '#FFFFFF', border: '1px solid #F1F5F9', borderRadius: 4, boxShadow: 'none' }}>


                            <Stack spacing={2}>
                                {cartItems.map((item) => (
                                    <Box
                                        key={item.id}
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
                                        <Grid container spacing={3} alignItems="center">

                                            <Grid size={{ xs: 12, sm: 2 }} sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}>
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
                                                        src={item.img}
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
                                                        {item.name}
                                                    </Typography>

                                                    <Typography
                                                        sx={{
                                                            mt: 0.8,
                                                            color: "#64748B",
                                                            fontSize: "13px",
                                                        }}
                                                    >
                                                        {item.category}
                                                    </Typography>

                                                    <Typography
                                                        sx={{
                                                            mt: 0.5,
                                                            color: "#94A3B8",
                                                            fontSize: 13,
                                                            lineHeight: 1.6,
                                                        }}
                                                    >
                                                        {item.specs}
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

                                            {/* Price & Actions */}
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
                                                    alignItems={{
                                                        xs: "stretch",
                                                        sm: "flex-end",
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
                                                            {item.price}
                                                        </Typography>

                                                        <Typography
                                                            sx={{
                                                                mt: 0.5,
                                                                fontSize: "13px",
                                                                color: "#64748B",
                                                            }}
                                                        >
                                                            1 Item
                                                        </Typography>
                                                    </Box>

                                                    <Stack
                                                        direction="row"
                                                        spacing={1}
                                                        justifyContent="flex-end"
                                                    >
                                                        <Button
                                                            color="error"
                                                            startIcon={<DeleteForeverIcon />}
                                                            sx={{
                                                                minWidth: 50,
                                                                height: 38,
                                                                textTransform: "none",
                                                                "&:hover": {
                                                                    bgcolor: "#FEF2F2",
                                                                },
                                                            }}
                                                        />

                                                        <Button
                                                            variant="contained"
                                                            sx={{
                                                                minWidth: 110,
                                                                height: 38,
                                                                borderRadius: 2,
                                                                bgcolor: "secondary.main",
                                                                textTransform: "none",
                                                                "&:hover": {
                                                                    bgcolor: "orangeHover.main",
                                                                },
                                                            }}
                                                        >
                                                            Buy Now
                                                        </Button>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                ))}
                            </Stack>
                        </Card>

                    </Grid>

                    {/* RIGHT SPLIT PANEL: Checkout & Summary Details */}
                    <Grid size={{ xs: 12, md: 4.5 }}>


                        <Card sx={{ p: 2.5, mb: 2, bgcolor: '#FFFFFF', border: '1px solid #F1F5F9', borderRadius: 4, boxShadow: 'none' }}>
                            <Typography sx={{ fontWeight: 600, color: 'dark.main', mb: 2 }}>Price Details</Typography>
                            <Stack spacing={1.5}>
                                <Stack direction="row" sx={{
                                    gap: 1
                                }}>
                                    <Typography sx={{ fontSize: "13px", color: '#64748B' }}>Total MRP :</Typography>
                                    <Typography sx={{ fontSize: "13px", fontWeight: 500, color: 'secondary.main' }}>₹80,389</Typography>
                                </Stack>
                                <Stack direction="row"
                                    sx={{
                                        gap: 1
                                    }}
                                >
                                    <Typography sx={{ fontSize: "13px", color: '#64748B' }}>Shipping</Typography>
                                    <Typography sx={{ fontSize: "13px", color: '#22C55E', fontWeight: 500 }}>FREE</Typography>
                                </Stack>
                                <Stack direction="row"
                                    sx={{
                                        gap: 1
                                    }}
                                >
                                    <Typography sx={{ fontSize: "13px", color: '#64748B' }}>Discount</Typography>
                                    <Typography sx={{ fontSize: "13px", color: '#22C55E', fontWeight: 500 }}>- ₹2,390</Typography>
                                </Stack>
                                <Divider sx={{ my: 1, borderColor: '#F1F5F9' }} />
                                <Stack direction="row"
                                    sx={{
                                        gap: 1
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            color: 'dark.main',

                                        }}>Total Amount</Typography>
                                    <Typography sx={{ color: 'secondary.main', fontWeight: 900 }}>₹77,999</Typography>
                                </Stack>
                                <Chip label="You saved ₹2,390 on this order" size="small" icon={<span style={{ fontSize: 12 }}>🏷️</span>} sx={{ bgcolor: '#DCFCE7', color: '#15803D', fontWeight: 600, py: 1.5, justifyContent: 'flex-start', px: 1, borderRadius: 1.5 }} />
                            </Stack>

                            <Box sx={{ mt: 3 }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    endIcon={<ChevronRight />}
                                    sx={{
                                        bgcolor: '#7C3AED',
                                        color: '#FFFFFF',
                                        textTransform: 'none',
                                        borderRadius: 3,
                                        background: 'linear-gradient(90deg, #6D28D9 0%, #7C3AED 100%)',
                                        boxShadow: '0px 4px 12px rgba(124, 58, 237, 0.25)',
                                        '&:hover': { background: 'linear-gradient(90deg, #5B21B6 0%, #6D28D9 100%)' }
                                    }}
                                >
                                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Buy All (3 Items)</Typography>
                                        <Typography variant="caption" sx={{ opacity: 0.8, fontSize: 10 }}>Secure Checkout</Typography>
                                    </Box>
                                </Button>
                                <Button variant="outlined" fullWidth startIcon={<ArrowBack />} sx={{ mt: 1.5, py: 1.2, borderColor: '#E2E8F0', color: '#475569', textTransform: 'none', borderRadius: 3, fontWeight: 600 }}>
                                    Continue Shopping
                                </Button>
                            </Box>
                        </Card>

                        {/* Offers Box Block */}
                        <Card sx={{ p: 2, bgcolor: '#F9F8FF', border: '1px dashed #ECE9FE', borderRadius: 4, boxShadow: 'none' }}>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                                <LocalActivityOutlined sx={{ color: '#7C3AED', fontSize: 18 }} />
                                <Typography variant="body2" sx={{ fontWeight: 800, color: '#4C1D95' }}>Offers for You</Typography>
                            </Stack>
                            <Stack spacing={1.5}>
                                {[
                                    { title: '5% Instant Discount', desc: 'Up to ₹1500 on HDFC Bank Cards' },
                                    { title: 'Flat ₹200 Off', desc: 'on orders above ₹2999' }
                                ].map((offer, idx) => (
                                    <Box key={idx} sx={{ bgcolor: '#FFFFFF', p: 1.5, borderRadius: 2, border: '1px dashed #DDD6FE', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box>
                                            <Typography variant="caption" sx={{ fontWeight: 800, display: 'block', color: '#1E293B' }}>{offer.title}</Typography>
                                            <Typography variant="caption" sx={{ color: '#64748B', fontSize: 10 }}>{offer.desc}</Typography>
                                        </Box>
                                        <Button size="small" sx={{ fontSize: 10, color: '#7C3AED', minWidth: 0, p: 0, fontWeight: 700, textTransform: 'none' }}>T&C</Button>
                                    </Box>
                                ))}
                            </Stack>
                        </Card>

                    </Grid>
                </Grid>


            </Box>
        </Box>
    );
}