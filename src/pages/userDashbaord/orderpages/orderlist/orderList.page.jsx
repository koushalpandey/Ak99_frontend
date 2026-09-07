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

export default function OrderList() {


  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f4f5f9', minHeight: '100vh', }}>
      <Box sx={{ width:"100%", mx: 'auto', bgcolor: 'white', borderRadius: 4, p: { xs: 2, md: 4 }, boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>

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
            sx={{
              width: { xs: '100%', sm: 320 },
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px',
                bgcolor: 'white',
                '& fieldset': { borderColor: '#e2e4e9' },
                '&:hover fieldset': { borderColor: '#c4c8d0' },
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#8e96a3', fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Filter Tabs */}
        {/* <Stack direction="row" spacing={1.5} sx={{ mb: 4, overflowX: 'auto', pb: 1, '&::-webkit-scrollbar': { height: 0 } }}>
          {tabs.map((tab, index) => (
            <Chip
              key={tab}
              label={tab}
              sx={{
                bgcolor: index === 0 ? '#5c59e8' : '#f4f5f8',
                color: index === 0 ? 'white' : '#68707d',
                fontWeight: index === 0 ? 600 : 500,
                borderRadius: '20px',
                px: 1,
                py: 2.5,
                fontSize: '0.9rem',
                border: 'none',
                '&:hover': { bgcolor: index === 0 ? '#4b48d6' : '#ebecee' }
              }}
            />
          ))}
        </Stack> */}

        {/* Order Card */}
        <Card sx={{ borderRadius: 3, border: '1px solid #e9ebf0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', overflow: 'hidden' }}>

          {/* Card Header */}
          <Box sx={{ p: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              <Avatar sx={{ bgcolor: '#f0eeff', color: '#5c59e8', width: 48, height: 48 }}>
                <Inventory2OutlinedIcon />
              </Avatar>
              <Box>
                <Typography sx={{ fontWeight: 700, color: '#1a1d21', fontSize: '1.1rem' }}>
                  Order #ORD-1788775867365-589
                </Typography>
                <Typography variant="body2" sx={{ color: '#68707d', mt: 0.5, fontSize: '0.9rem' }}>
                  Placed on 07 Sep 2026  &nbsp;•&nbsp;  10:11 AM
                </Typography>
              </Box>
            </Box>
            <Stack direction="row" spacing={1.5}>
              <Chip
                icon={<CheckCircleIcon sx={{ fontSize: '18px !important', color: '#188a42 !important' }}/>}
                label="CONFIRMED"
                size="small"
                sx={{ bgcolor: '#e0f5e9', color: '#188a42', fontWeight: 700, borderRadius: '8px', px: 0.5, py: 1.5, fontSize: '0.75rem' }}
              />
              <Chip
                icon={<CreditCardOutlinedIcon sx={{ fontSize: '18px !important', color: '#1f64d1 !important' }}/>}
                label="PAID"
                size="small"
                sx={{ bgcolor: '#e3f0ff', color: '#1f64d1', fontWeight: 700, borderRadius: '8px', px: 0.5, py: 1.5, fontSize: '0.75rem' }}
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
                  src="https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=150&q=80"
                  alt="Wireless Charging Station"
                  sx={{ width: 100, height: 100, borderRadius: 2, objectFit: 'cover', bgcolor: '#f4f5f8' }}
                />
                <Box sx={{
                  position: 'absolute', top: -10, left: -10, bgcolor: 'white',
                  border: '1px solid #e9ebf0', borderRadius: '50%', width: 28, height: 28,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8rem', fontWeight: 600, color: '#1a1d21'
                }}>
                  1
                </Box>
              </Box>
              <Box sx={{ pt: 0.5 }}>
                <Typography sx={{ fontWeight: 700, color: '#1a1d21', fontSize: '1.05rem', mb: 0.5 }}>
                  Wireless Charging Station
                </Typography>
                <Typography variant="body2" sx={{ color: '#68707d', mb: 1.5, fontSize: '0.9rem' }}>
                  SKU: Wireless-001
                </Typography>
                <Chip
                  label="Qty: 1"
                  size="small"
                  sx={{ bgcolor: '#f0eeff', color: '#5c59e8', fontWeight: 600, borderRadius: '6px', height: 26 }}
                />
              </Box>
            </Box>
            <Box sx={{ textAlign: 'right', pt: 0.5, minWidth: 100 }}>
              <Typography sx={{ fontWeight: 800, color: '#1a1d21', fontSize: '1.25rem' }}>
                ₹899
              </Typography>
              <Typography sx={{ textDecoration: 'line-through', color: '#8e96a3', fontSize: '0.9rem', mb: 1 }}>
                ₹999
              </Typography>
              <Chip
                label="10% OFF"
                size="small"
                sx={{ bgcolor: '#ffe3e3', color: '#d32f2f', fontWeight: 700, borderRadius: '12px', height: 22, fontSize: '0.75rem' }}
              />
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
                <Typography sx={{ fontWeight: 600, color: '#4a515a', fontSize: '0.95rem' }}>Jaipur, Rajasthan</Typography>
              </Box>
            </Box>

            <Box sx={{ flex: { xs: '1 1 100%', md: 1 }, display: 'flex', alignItems: 'center', gap: 2, px: { md: 3 }, borderRight: { md: '1px solid #f0f1f3' } }}>
              <Avatar sx={{ bgcolor: '#e0f5e9', color: '#188a42', width: 44, height: 44 }}>
                <CreditCardOutlinedIcon fontSize="small" />
              </Avatar>
              <Box>
                <Typography variant="body2" sx={{ color: '#8e96a3', fontSize: '0.85rem', mb: 0.2 }}>Payment Method</Typography>
                <Typography sx={{ fontWeight: 600, color: '#4a515a', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                   <span style={{color: '#1f64d1', fontStyle: 'italic', fontWeight: 800, fontSize: '1.1rem'}}>R</span> Razorpay
                </Typography>
              </Box>
            </Box>

            <Box sx={{ flex: { xs: '1 1 100%', md: 1 }, display: 'flex', alignItems: 'center', gap: 2, pl: { md: 3 } }}>
              <Avatar sx={{ bgcolor: '#f0eeff', color: '#5c59e8', width: 44, height: 44 }}>
                <ShoppingBagOutlinedIcon fontSize="small" />
              </Avatar>
              <Box>
                <Typography variant="body2" sx={{ color: '#8e96a3', fontSize: '0.85rem', mb: 0.2 }}>Total Amount</Typography>
                <Typography sx={{ fontWeight: 800, color: '#1a1d21', fontSize: '1rem' }}>₹899</Typography>
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
                  Status: Confirmed
                </Typography>
                <Typography variant="body2" sx={{ color: '#68707d', mt: 0.2, fontSize: '0.9rem' }}>
                  Your order has been confirmed and is being processed.
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
      </Box>
    </Box>
  );
}