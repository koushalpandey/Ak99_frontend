import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
  Chip,
  Container,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

// Mock data directly matching the screenshot
const wishlistItems = [
  {
    id: 1,
    title: 'boAt Wave Call Smartwatch',
    desc: '1.69" HD Display, Bluetooth Calling, 100+ Sports Modes',
    price: '₹1,499',
    originalPrice: '₹2,999',
    discount: '50% OFF',
    status: 'In Stock',
    // Using high-quality placeholders; replace with your actual asset URLs
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=200&auto=format&fit=crop',
    imgBg: '#f3f4f6',
  },
  {
    id: 2,
    title: 'Campus Oxyfit Sneakers',
    desc: 'Stylish & Comfortable Sneakers for Men',
    price: '₹1,799',
    originalPrice: '₹3,499',
    discount: '49% OFF',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop',
    imgBg: '#fdfbf7',
  },
  {
    id: 3,
    title: 'WildHorn Vintage Laptop Backpack',
    desc: 'Water Resistant, Fits up to 15.6 inch Laptop',
    price: '₹2,499',
    originalPrice: '₹4,999',
    discount: '50% OFF',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=200&auto=format&fit=crop',
    imgBg: '#f3f4f6',
  },
  {
    id: 4,
    title: 'Realme TechLife Studio H1 Headphones',
    desc: 'Noise Isolation, Deep Bass, 40mm Driver',
    price: '₹1,299',
    originalPrice: '₹2,499',
    discount: '48% OFF',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop',
    imgBg: '#f0f0f8',
  },
];

export default function WishlistComponent() {
  return (
    <Container maxWidth="lg" sx={{ py: 4, fontFamily: 'sans-serif' }}>
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
          <FavoriteBorderIcon sx={{ color: '#ff4d6d', fontSize: 32, mt: 0.5 }} />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b' }}>
              My Wishlist ({wishlistItems.length})
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b', mt: 0.5 }}>
              Your favorite items, all in one place.
            </Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          startIcon={<ChevronLeftIcon />}
          sx={{
            textTransform: 'none',
            color: '#1e293b',
            borderColor: '#cbd5e1',
            borderRadius: '8px',
            fontWeight: 500,
            '&:hover': {
              borderColor: '#94a3b8',
              backgroundColor: '#f8fafc',
            },
          }}
        >
          Continue Shopping
        </Button>
      </Box>

      {/* Wishlist Items List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {wishlistItems.map((item) => (
          <Paper
            key={item.id}
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2,
              border: '1px solid #f1f5f9',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Image Container */}
            <Box
              sx={{
                width: 140,
                height: 110,
                backgroundColor: item.imgBg,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1,
                mr: 3,
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>

            {/* Product Details */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                {item.desc}
              </Typography>
              <Chip
                label={item.status}
                size="small"
                sx={{
                  backgroundColor: '#f0fdf4',
                  color: '#16a34a',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  borderRadius: '4px',
                  width: 'fit-content',
                  mt: 1,
                  height: '24px',
                  '& .MuiChip-label': { px: 1 }
                }}
              />
            </Box>

            {/* Pricing Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mr: 4 }}>
              <Typography sx={{ color: '#e11d48', fontWeight: 700, fontSize: '1.25rem' }}>
                {item.price}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#94a3b8', textDecoration: 'line-through', fontSize: '0.9rem' }}
              >
                {item.originalPrice}
              </Typography>
              <Chip
                label={item.discount}
                size="small"
                sx={{
                  backgroundColor: '#fff1f2',
                  color: '#f43f5e',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  borderRadius: '4px',
                  height: '20px',
                  '& .MuiChip-label': { px: 0.75 }
                }}
              />
            </Box>

            {/* Delete Button */}
            <IconButton
              sx={{
                backgroundColor: '#fff1f2',
                color: '#e11d48',
                p: 1.5,
                '&:hover': {
                  backgroundColor: '#ffe4e6',
                },
              }}
            >
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}