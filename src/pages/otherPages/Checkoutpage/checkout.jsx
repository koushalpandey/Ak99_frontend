import { useEffect, useState } from 'react';
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
    TextField,
} from '@mui/material';
import {
    Pencil,
    ArrowLeft,
    User,
    Phone,
    Home,
    Mail,

} from 'lucide-react';
import useDetailStore from '../../../store/userStore/userDetailStore';
import { Link, useLocation } from "react-router-dom";
import RazorpayPaymentButton from '../../../components/Razorpay/Rzorpay';

export default function CheckoutPage() {
    const userData = useDetailStore((state) => state?.Data);
    const fetchuserData = useDetailStore((state) => state?.fetchUserDetailData);
    const [isEditing, setIsEditing] = useState(false);
    const location = useLocation();
    const product = location.state?.product;
    useEffect(() => {
        fetchuserData()
    }, [fetchuserData])


    const addressData = {
        address: userData?.address,
        city: userData?.city,
        state: userData?.state,
        pincode: userData?.pincode,
        phoneNumber: userData?.phoneNumber,
    };


    const handleChange = () => () => {

    };

    const handleSave = () => {

    };

    const handleCancel = () => {

    };

    return (
        <Box
            sx={{
                bgcolor: '#F8FAFC',
                minHeight: '100vh',
                p: { xs: 2, md: 2 },
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 7.5 }}>
                        {/* User Information Section */}
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
                            <Stack
                                direction="row"

                                spacing={1}
                                sx={{ mb: 2.5, alignItems: "center" }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: '#F3E8FF',
                                        width: 32,
                                        height: 32,
                                        borderRadius: 2
                                    }}
                                >
                                    <User size={18} color="#7C3AED" />
                                </Avatar>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        color: '#1E293B',
                                        fontSize: '16px'
                                    }}
                                >
                                    User Information
                                </Typography>
                                {!isEditing && (
                                    <Chip
                                        label="Complete Profile"
                                        size="small"
                                        sx={{
                                            ml: 1,
                                            bgcolor: '#DCFCE7',
                                            color: '#15803D',
                                            fontWeight: 600,
                                            fontSize: '10px',
                                            height: 20
                                        }}
                                    />
                                )}
                                {!isEditing && (
                                    <Button
                                        size="small"
                                        onClick={() => setIsEditing(true)}
                                        endIcon={<Pencil size={14} />}
                                        sx={{
                                            ml: 'auto',
                                            color: '#7C3AED',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            fontSize: '12px',
                                            '&:hover': {
                                                bgcolor: '#F3E8FF'
                                            }
                                        }}
                                    >
                                        Edit
                                    </Button>
                                )}
                            </Stack>

                            {!isEditing ? (
                                <Stack spacing={2}>
                                    <Grid container spacing={2}>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    p: 1,
                                                    bgcolor: '#F8FAFC',
                                                    borderRadius: 2
                                                }}
                                            >
                                                <User size={18} color="#94A3B8" />
                                                <Box>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: '#94A3B8',
                                                            display: 'block',
                                                            fontSize: '10px'
                                                        }}
                                                    >
                                                        Full Name
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 500,
                                                            color: '#1E293B',
                                                            fontSize: '14px'
                                                        }}
                                                    >
                                                        {userData?.user?.name}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    p: 1,
                                                    bgcolor: '#F8FAFC',
                                                    borderRadius: 2
                                                }}
                                            >
                                                <Phone size={18} color="#94A3B8" />
                                                <Box>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: '#94A3B8',
                                                            display: 'block',
                                                            fontSize: '10px'
                                                        }}
                                                    >
                                                        Phone Number
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 500,
                                                            color: '#1E293B',
                                                            fontSize: '14px'
                                                        }}
                                                    >
                                                        {userData?.phoneNumber}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    p: 1,
                                                    bgcolor: '#F8FAFC',
                                                    borderRadius: 2
                                                }}
                                            >
                                                <Mail size={18} color="#94A3B8" />
                                                <Box>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: '#94A3B8',
                                                            display: 'block',
                                                            fontSize: '10px'
                                                        }}
                                                    >
                                                        Email Address
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 500,
                                                            color: '#1E293B',
                                                            fontSize: '14px'
                                                        }}
                                                    >
                                                        {userData?.user?.email}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    p: 1,
                                                    bgcolor: '#F8FAFC',
                                                    borderRadius: 2
                                                }}
                                            >
                                                <Home size={18} color="#94A3B8" />
                                                <Box>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: '#94A3B8',
                                                            display: 'block',
                                                            fontSize: '10px'
                                                        }}
                                                    >
                                                        Delivery Address
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 500,
                                                            color: '#1E293B',
                                                            fontSize: '14px'
                                                        }}
                                                    >
                                                        {userData.address}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    p: 1,
                                                    bgcolor: '#F8FAFC',
                                                    borderRadius: 2
                                                }}
                                            >
                                                <Home size={18} color="#94A3B8" />
                                                <Box>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: '#94A3B8',
                                                            display: 'block',
                                                            fontSize: '10px'
                                                        }}
                                                    >
                                                        state
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 500,
                                                            color: '#1E293B',
                                                            fontSize: '14px'
                                                        }}
                                                    >
                                                        {userData?.state}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    p: 1,
                                                    bgcolor: '#F8FAFC',
                                                    borderRadius: 2
                                                }}
                                            >

                                                <Box>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: '#94A3B8',
                                                            display: 'block',
                                                            fontSize: '10px'
                                                        }}
                                                    >
                                                        Pincode
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 500,
                                                            color: '#1E293B',
                                                            fontSize: '14px'
                                                        }}
                                                    >
                                                        {userData?.pincode}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Stack>
                            ) : (
                                <>
                                    <Grid container spacing={2}>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                label="Full Name"

                                                onChange={handleChange('fullName')}
                                                slotProps={{
                                                    startAdornment: (
                                                        <User size={18} color="#94A3B8" style={{ marginRight: 8 }} />
                                                    )
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: 2,
                                                        bgcolor: '#F8FAFC',
                                                        '&:hover': {
                                                            bgcolor: '#F1F5F9'
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                label="Phone Number"

                                                onChange={handleChange('phoneNumber')}
                                                slotProps={{
                                                    startAdornment: (
                                                        <Phone size={18} color="#94A3B8" style={{ marginRight: 8 }} />
                                                    )
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: 2,
                                                        bgcolor: '#F8FAFC',
                                                        '&:hover': {
                                                            bgcolor: '#F1F5F9'
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                label="Email Address"

                                                onChange={handleChange('email')}
                                                slotProps={{
                                                    startAdornment: (
                                                        <Mail size={18} color="#94A3B8" style={{ marginRight: 8 }} />
                                                    )
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: 2,
                                                        bgcolor: '#F8FAFC',
                                                        '&:hover': {
                                                            bgcolor: '#F1F5F9'
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                label="Delivery Address"

                                                onChange={handleChange('deliveryAddress')}
                                                slotProps={{
                                                    startAdornment: (
                                                        <Home size={18} color="#94A3B8" style={{ marginRight: 8 }} />
                                                    )
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: 2,
                                                        bgcolor: '#F8FAFC',
                                                        '&:hover': {
                                                            bgcolor: '#F1F5F9'
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                label="Landmark (Optional)"
                                                placeholder="Near City Centre Mall"

                                                onChange={handleChange('landmark')}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: 2,
                                                        bgcolor: '#F8FAFC',
                                                        '&:hover': {
                                                            bgcolor: '#F1F5F9'
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        sx={{ mt: 2 }}
                                    >
                                        <Button
                                            size="small"
                                            variant="contained"
                                            onClick={handleSave}
                                            sx={{
                                                bgcolor: '#7C3AED',
                                                textTransform: 'none',
                                                borderRadius: 2,
                                                fontSize: '12px',
                                                '&:hover': {
                                                    bgcolor: '#6D28D9'
                                                }
                                            }}
                                        >
                                            Save Changes
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            onClick={handleCancel}
                                            sx={{
                                                borderColor: '#E2E8F0',
                                                color: '#64748B',
                                                textTransform: 'none',
                                                borderRadius: 2,
                                                fontSize: '12px',
                                                '&:hover': {
                                                    borderColor: '#CBD5E1'
                                                }
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </Stack>
                                </>
                            )}
                        </Card>

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
                    </Grid>

                    <Grid size={{ xs: 12, md: 4.5 }}>
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
                                {/* <Chip
                                    label="You saved ₹2,390 on this order"
                                    size="small"
                                    icon={<span style={{ fontSize: 12 }}>🏷️</span>}
                                    sx={{
                                        bgcolor: '#DCFCE7',
                                        color: '#15803D',
                                        fontWeight: 600,
                                        py: 1.5,
                                        justifyContent: 'flex-start',
                                        px: 1,
                                        borderRadius: 1.5
                                    }}
                                /> */}
                            </Stack>

                            <Box sx={{ mt: 3 }}>
                                <RazorpayPaymentButton
                                    productId={product?.id}
                                    address={addressData}
                                    user={userData?.user}
                                    onSuccess={({ order, payment }) => {
                                        console.log("Order:", order);
                                        console.log("Payment:", payment);

                                        // Example:
                                        // navigate(`/order-success/${order.id}`);
                                    }}
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


                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}