import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Rating,
  Chip,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarIcon from '@mui/icons-material/Star';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

// Custom styled components for accurate visual replication
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const HeaderSection = styled(Box)({
  marginBottom: '24px',
});

const CustomToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  backgroundColor: '#f8f9fa',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '4px',
  gap: '4px',
  '& .MuiToggleButtonGroup-grouped': {
    border: 'none',
    borderRadius: '6px !important',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '0.85rem',
    padding: '6px 16px',
    color: '#495057',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    '&.Mui-selected': {
      backgroundColor: '#1a68ff',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#1552cc',
      },
    },
  },
}));

const ProductCard = styled(Card)({
  position: 'relative',
  borderRadius: '12px',
  border: '1px solid #eaeef2',
  boxShadow: 'none',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '&:hover': {
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  },
});

const DiscountChip = styled(Chip)({
  position: 'absolute',
  top: '16px',
  left: '16px',
  backgroundColor: '#ff2a2a',
  color: '#ffffff',
  fontWeight: 'bold',
  borderRadius: '4px',
  height: '24px',
  fontSize: '0.75rem',
  zIndex: 1,
});

const WishlistButton = styled(IconButton)({
  position: 'absolute',
  top: '12px',
  right: '12px',
  backgroundColor: '#ffffff',
  border: '1px solid #eaeef2',
  padding: '6px',
  zIndex: 1,
  '&:hover': {
    backgroundColor: '#f8f9fa',
  },
});

const AddToCartButton = styled(Button)({
  backgroundColor: '#1a68ff',
  color: '#ffffff',
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: '6px',
  padding: '10px 0',
  marginTop: 'auto',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#1552cc',
    boxShadow: 'none',
  },
});

// Mock Data matching the exact specifications in the image
const products = [
  {
    id: 1,
    title: 'Apple iPhone 15 Pro Max 256GB',
    discount: '-20%',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&auto=format&fit=crop&q=60', // Placeholder match
    rating: 4.7,
    reviews: 128,
    price: 1099.00,
    originalPrice: 1299.00
  },
  {
    id: 2,
    title: 'Apple MacBook Air M2 13-inch 256GB',
    discount: '-15%',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60',
    rating: 4.6,
    reviews: 96,
    price: 999.00,
    originalPrice: 1179.00
  },
  {
    id: 3,
    title: 'Bose QuietComfort 45 Wireless Headphones',
    discount: '-25%',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60',
    rating: 4.8,
    reviews: 75,
    price: 249.00,
    originalPrice: 329.00
  },
  {
    id: 4,
    title: 'Samsung Galaxy Watch 6 Classic 47mm',
    discount: '-10%',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=60',
    rating: 4.5,
    reviews: 64,
    price: 269.00,
    originalPrice: 299.00
  }
];

export default function CategoriesProductPage() {
  const [alignment, setAlignment] = React.useState('featured');
  const [sortBy, setSortBy] = React.useState('Featured');

  return (
    <Container maxWidth="xl" sx={{ py: 4, fontFamily: 'Be Vietnam Pro' }}>

      {/* Top Header Section */}
      <HeaderSection>
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#0a192f', mb: 1, fontSize: '2.25rem' }}>
          Electronics
        </Typography>


        {/* Filter and Sort Toolbar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, borderTop: '1px solid #eaeef2', pt: 3 }}>
          <Typography variant="body2" sx={{ color: '#495057', display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box component="span" sx={{ display: 'inline-flex', width: 16, height: 16, border: '1px solid #ced4da', borderRadius: '4px', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>📄</Box>
            Showing 1–12 of 245 products
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography variant="body2" sx={{ color: '#495057' }}>Sort by:</Typography>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              size="small"
              sx={{
                minWidth: 120,
                borderRadius: '8px',
                backgroundColor: '#fff',
                fontSize: '0.85rem',
                '.MuiOutlinedInput-notchedOutline': { borderColor: '#e0e0e0' }
              }}
            >
              <MenuItem value="Featured">Featured</MenuItem>
              <MenuItem value="Newest">Newest</MenuItem>
              <MenuItem value="PriceLowHigh">Price: Low to High</MenuItem>
              <MenuItem value="PriceHighLow">Price: High to Low</MenuItem>
            </Select>
          </Box>
        </Box>
      </HeaderSection>

      {/* Filter Quick-Tabs */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <CustomToggleButtonGroup
          value={alignment}
          exclusive
          onChange={(e, newAlignment) => newAlignment && setAlignment(newAlignment)}
        >
          <ToggleButton value="featured">
            <StarIcon sx={{ fontSize: 16 }} /> Featured
          </ToggleButton>
          <ToggleButton value="newest">
            <AccessTimeIcon sx={{ fontSize: 16 }} /> Newest
          </ToggleButton>
          <ToggleButton value="low-high">
            <ArrowUpwardIcon sx={{ fontSize: 16 }} /> Price: Low to High
          </ToggleButton>
          <ToggleButton value="high-low">
            <ArrowDownwardIcon sx={{ fontSize: 16 }} /> Price: High to Low
          </ToggleButton>
          <ToggleButton value="best-selling">
            <LocalFireDepartmentIcon sx={{ fontSize: 16 }} /> Best Selling
          </ToggleButton>
        </CustomToggleButtonGroup>
      </Box>

      {/* Grid Layout Layout for Cards */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
            <ProductCard>
              <DiscountChip label={product.discount} size="small" />
              <WishlistButton size="small">
                <FavoriteBorderIcon sx={{ fontSize: 20, color: '#495057' }} />
              </WishlistButton>

              {/* Product Image Area */}
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
                />
              </Box>

              {/* Product Info */}
              <CardContent sx={{ p: 0, pt: 2, pb: '16px !important' }}>
                {/* Rating Block */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5 }}>
                  <Rating
                    value={5}
                    readOnly
                    size="small"
                    icon={<StarIcon sx={{ color: '#ffc107', fontSize: 16 }} />}
                    emptyIcon={<StarIcon sx={{ color: '#e4e5e9', fontSize: 16 }} />}
                  />
                  <Typography variant="caption" sx={{ color: '#495057', fontWeight: 600, ml: 0.5 }}>
                    {product.rating}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#adb5bd' }}>
                    ({product.reviews})
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: '#0a192f',
                    fontSize: '0.95rem',
                    lineHeight: 1.4,
                    mb: 2,
                    height: '42px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {product.title}
                </Typography>

                {/* Price block */}
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0a192f', fontSize: '1.15rem' }}>
                    ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </Typography>
                  <Typography variant="body2" sx={{ textDecoration: 'line-through', color: '#adb5bd', fontSize: '0.85rem' }}>
                    ${product.originalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </Typography>
                </Box>
              </CardContent>

              {/* Add to Cart button */}
              <AddToCartButton fullWidth variant="contained" startIcon={<ShoppingCartOutlinedIcon />}>
                Add to Cart
              </AddToCartButton>
            </ProductCard>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}