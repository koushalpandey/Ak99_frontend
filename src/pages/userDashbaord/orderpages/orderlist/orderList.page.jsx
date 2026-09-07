import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    Chip,
    Card,
    Stack,
    Divider,
    Button,
    Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import useOrderListStore from '../../../../store/orderStore/orderlist/store';
import { useEffect, useState } from 'react';

export default function OrderList() {
    const OrderData = useOrderListStore((state) => state?.OrderData)
    const fetchOrderList = useOrderListStore((state) => state?.fetchOrderList)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetchOrderList()
    }, [fetchOrderList])

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
    }

    const formatTime = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
    }

    const getStatusChip = (status) => {
        switch (status) {
            case 'CONFIRMED':
                return {
                    icon: <CheckCircleIcon sx={{ fontSize: '18px !important', color: '#188a42 !important' }} />,
                    label: 'CONFIRMED',
                    sx: { bgcolor: '#e0f5e9', color: '#188a42', fontWeight: 700, borderRadius: '8px', px: 0.5, py: 1.5, fontSize: '0.75rem' }
                }
            case 'PENDING':
                return {
                    icon: <LocalShippingOutlinedIcon sx={{ fontSize: '18px !important', color: '#ed6c02 !important' }} />,
                    label: 'PENDING',
                    sx: { bgcolor: '#fff4e5', color: '#ed6c02', fontWeight: 700, borderRadius: '8px', px: 0.5, py: 1.5, fontSize: '0.75rem' }
                }
            default:
                return {
                    icon: <CheckCircleIcon sx={{ fontSize: '18px !important', color: '#188a42 !important' }} />,
                    label: status,
                    sx: { bgcolor: '#e0f5e9', color: '#188a42', fontWeight: 700, borderRadius: '8px', px: 0.5, py: 1.5, fontSize: '0.75rem' }
                }
        }
    }

    const getPaymentChip = (paymentStatus) => {
        switch (paymentStatus) {
            case 'PAID':
                return {
                    icon: <CreditCardOutlinedIcon sx={{ fontSize: '18px !important', color: '#1f64d1 !important' }} />,
                    label: 'PAID',
                    sx: { bgcolor: '#e3f0ff', color: '#1f64d1', fontWeight: 700, borderRadius: '8px', px: 0.5, py: 1.5, fontSize: '0.75rem' }
                }
            case 'UNPAID':
                return {
                    icon: <CreditCardOutlinedIcon sx={{ fontSize: '18px !important', color: '#d32f2f !important' }} />,
                    label: 'UNPAID',
                    sx: { bgcolor: '#ffe3e3', color: '#d32f2f', fontWeight: 700, borderRadius: '8px', px: 0.5, py: 1.5, fontSize: '0.75rem' }
                }
            default:
                return {
                    icon: <CreditCardOutlinedIcon sx={{ fontSize: '18px !important', color: '#1f64d1 !important' }} />,
                    label: paymentStatus,
                    sx: { bgcolor: '#e3f0ff', color: '#1f64d1', fontWeight: 700, borderRadius: '8px', px: 0.5, py: 1.5, fontSize: '0.75rem' }
                }
        }
    }

    const getStatusMessage = (status) => {
        switch (status) {
            case 'CONFIRMED':
                return 'Your order has been confirmed and is being processed.'
            case 'PENDING':
                return 'Your order is pending and awaiting confirmation.'
            default:
                return 'Your order is being processed.'
        }
    }

    const filteredOrders = OrderData?.filter(order =>
        order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f4f5f9', minHeight: '100vh', }}>
            <Box sx={{ width: "100%", mx: 'auto', bgcolor: 'white', borderRadius: 4, p: { xs: 2, md: 4 }, boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>

                {/* Header Section */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', mb: 3, gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <LocalMallOutlinedIcon sx={{ color: '#5c59e8', fontSize: 36 }} />
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1d21' }}>
                                My Orders
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#68707d', mt: 0.5, fontSize: '0.95rem' }}>
                                Track your orders and view their status
                            </Typography>
                        </Box>
                    </Box>
                    <TextField
                        placeholder="Search by order number..."
                        variant="outlined"
                        size="small"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{
                            width: { xs: '100%', sm: 320 },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '24px',
                                bgcolor: 'white',
                                '& fieldset': { borderColor: '#e2e4e9' },
                                '&:hover fieldset': { borderColor: '#c4c8d0' },
                            }
                        }}
                        slotProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: '#8e96a3', fontSize: 20 }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                {/* Order Cards Mapping */}
                {filteredOrders?.map((order) => {
                    const statusConfig = getStatusChip(order.status)
                    const paymentConfig = getPaymentChip(order.paymentStatus)
                    const firstItem = order.items?.[0]
                    const product = firstItem?.product

                    return (
                        <Card
                            key={order.id}
                            sx={{
                                borderRadius: 3,
                                border: '1px solid #e9ebf0',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                                overflow: 'hidden',
                                mb: 3
                            }}
                        >
                            {/* Card Header */}
                            <Box sx={{ p: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                                    <Avatar sx={{ bgcolor: '#f0eeff', color: '#5c59e8', width: 48, height: 48 }}>
                                        <Inventory2OutlinedIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography sx={{ fontWeight: 600, color: '#1a1d21', fontSize: '1.1rem' }}>
                                             {order.orderNumber}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#68707d', mt: 0.5, fontSize: '0.9rem' }}>
                                            Placed on {formatDate(order.createdAt)}  &nbsp;•&nbsp;  {formatTime(order.createdAt)}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Stack direction="row" spacing={1.5}>
                                    <Chip
                                        icon={statusConfig.icon}
                                        label={statusConfig.label}
                                        size="small"
                                        sx={statusConfig.sx}
                                    />
                                    <Chip
                                        icon={paymentConfig.icon}
                                        label={paymentConfig.label}
                                        size="small"
                                        sx={paymentConfig.sx}
                                    />
                                </Stack>
                            </Box>

                            <Divider sx={{ borderColor: '#f0f1f3' }} />

                            {/* Product Details */}
                            <Box sx={{ p: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 2 }}>
                                <Box sx={{ display: 'flex', gap: 3 }}>
                                    <Box sx={{ position: 'relative' }}>
                                        <Box
                                            component="img"
                                            src={product?.images?.[0]?.url || 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=150&q=80'}
                                            alt={product?.name || 'Product'}
                                            sx={{ width: 100, height: 100, borderRadius: 2, objectFit: 'cover', bgcolor: '#f4f5f8' }}
                                        />
                                        <Box sx={{
                                            position: 'absolute', top: -10, left: -10, bgcolor: 'white',
                                            border: '1px solid #e9ebf0', borderRadius: '50%', width: 28, height: 28,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '0.8rem', fontWeight: 600, color: '#1a1d21'
                                        }}>
                                            {firstItem?.quantity || 1}
                                        </Box>
                                    </Box>
                                    <Box sx={{ pt: 0.5 }}>
                                        <Typography sx={{ fontWeight: 700, color: '#1a1d21', fontSize: '1.05rem', mb: 0.5 }}>
                                            {product?.name || 'Product'}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#68707d', mb: 1.5, fontSize: '0.9rem' }}>
                                            SKU: {product?.sku || 'N/A'}
                                        </Typography>
                                        <Chip
                                            label={`Qty: ${firstItem?.quantity || 1}`}
                                            size="small"
                                            sx={{ bgcolor: '#f0eeff', color: '#5c59e8', fontWeight: 600, borderRadius: '6px', height: 26 }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ textAlign: 'right', pt: 0.5, minWidth: 100 }}>
                                    <Typography sx={{ fontWeight: 800, color: '#1a1d21', fontSize: '1.25rem' }}>
                                        ₹{firstItem?.total || order.total || 0}
                                    </Typography>
                                    {product?.comparePrice && product.comparePrice > (firstItem?.price || 0) && (
                                        <>
                                            <Typography sx={{ textDecoration: 'line-through', color: '#8e96a3', fontSize: '0.9rem', mb: 1 }}>
                                                ₹{product.comparePrice}
                                            </Typography>
                                            <Chip
                                                label={`${Math.round(((product.comparePrice - (firstItem?.price || 0)) / product.comparePrice) * 100)}% OFF`}
                                                size="small"
                                                sx={{ bgcolor: '#ffe3e3', color: '#d32f2f', fontWeight: 700, borderRadius: '12px', height: 22, fontSize: '0.75rem' }}
                                            />
                                        </>
                                    )}
                                </Box>
                            </Box>

                            <Divider sx={{ borderColor: '#f0f1f3' }} />

                            {/* Order Summary 3-Columns */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 3, gap: { xs: 3, md: 0 } }}>
                                <Box sx={{ flex: { xs: '1 1 100%', md: 1 }, display: 'flex', alignItems: 'center', gap: 2, borderRight: { md: '1px solid #f0f1f3' } }}>
                                    <Avatar sx={{ bgcolor: '#e3f0ff', color: '#1f64d1', width: 44, height: 44 }}>
                                        <LocationOnOutlinedIcon fontSize="small" />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="body2" sx={{ color: '#8e96a3', fontSize: '0.85rem', mb: 0.2 }}>Shipping Address</Typography>
                                        <Typography sx={{ fontWeight: 600, color: '#4a515a', fontSize: '0.95rem' }}>
                                            {order.shippingAddress?.city}, {order.shippingAddress?.state}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ flex: { xs: '1 1 100%', md: 1 }, display: 'flex', alignItems: 'center', gap: 2, px: { md: 3 }, borderRight: { md: '1px solid #f0f1f3' } }}>
                                    <Avatar sx={{ bgcolor: '#e0f5e9', color: '#188a42', width: 44, height: 44 }}>
                                        <CreditCardOutlinedIcon fontSize="small" />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="body2" sx={{ color: '#8e96a3', fontSize: '0.85rem', mb: 0.2 }}>Payment Method</Typography>
                                        <Typography sx={{ fontWeight: 600, color: '#4a515a', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <span style={{ color: '#1f64d1', fontStyle: 'italic', fontWeight: 800, fontSize: '1.1rem' }}>R</span> Razorpay
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ flex: { xs: '1 1 100%', md: 1 }, display: 'flex', alignItems: 'center', gap: 2, pl: { md: 3 } }}>
                                    <Avatar sx={{ bgcolor: '#f0eeff', color: '#5c59e8', width: 44, height: 44 }}>
                                        <ShoppingBagOutlinedIcon fontSize="small" />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="body2" sx={{ color: '#8e96a3', fontSize: '0.85rem', mb: 0.2 }}>Total Amount</Typography>
                                        <Typography sx={{ fontWeight: 800, color: '#1a1d21', fontSize: '1rem' }}>₹{order.total || 0}</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Footer Area */}
                            <Box sx={{ bgcolor: '#fcfcfd', p: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0f1f3', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                                    <Avatar sx={{ bgcolor: '#e0f5e9', color: '#188a42', width: 48, height: 48 }}>
                                        <LocalShippingOutlinedIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography sx={{ fontWeight: 700, color: '#188a42', fontSize: '1rem' }}>
                                            Status: {order.status}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#68707d', mt: 0.2, fontSize: '0.9rem' }}>
                                            {getStatusMessage(order.status)}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Button
                                    variant="outlined"
                                    endIcon={<KeyboardArrowRightIcon />}
                                    sx={{
                                        borderRadius: '24px',
                                        borderColor: '#d1d0f3',
                                        color: '#5c59e8',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        px: 3,
                                        py: 1,
                                        '&:hover': { borderColor: '#5c59e8', bgcolor: '#f0eeff' }
                                    }}
                                >
                                    View Details
                                </Button>
                            </Box>
                        </Card>
                    )
                })}

                {/* No Orders Message */}
                {(!filteredOrders || filteredOrders.length === 0) && (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                        <Typography variant="h6" sx={{ color: '#68707d', fontWeight: 600 }}>
                            {searchTerm ? 'No orders found matching your search' : 'No orders found'}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#8e96a3', mt: 1 }}>
                            {searchTerm ? 'Try adjusting your search term' : 'Start shopping to see your orders here'}
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}