
import {
    Box,
    Typography,
    IconButton,
    Button,
    Rating
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export const SpecialOfferCard = ({ item }) => {
    const { isFirst, discount, title, subtitle, rating, currentPrice, originalPrice } = item;

    return (
        <Box
            sx={{
                minWidth: '220px',
                width: '220px',
                borderRadius: '24px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxSizing: 'border-box',
                border: isFirst ? 'none' : '1px solid #FFF5F0',
                background: isFirst
                    ? 'linear-gradient(135deg, #7A1FA2 0%, #311B92 100%)'
                    : 'linear-gradient(180deg, #FFF5F5 0%, #FFFFFF 100%)',
                color: isFirst ? '#FFF' : '#000',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
            }}
        >
            {/* Top Row: Discount Tag & Favorite Icon */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box
                    sx={{
                        background: 'linear-gradient(90deg, #FF4D4D, #FF8533)',
                        color: '#FFF',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '12px 4px 12px 4px',
                    }}
                >
                    {discount}
                </Box>
                {!isFirst && (
                    <IconButton size="small" sx={{ color: '#FF4D4D', p: 0 }}>
                        <FavoriteBorderIcon fontSize="small" />
                    </IconButton>
                )}
                {isFirst && (
                    <Box sx={{ color: '#FFD700', fontSize: '1.2rem', lineHeight: 1 }}>👑</Box>
                )}
            </Box>

            {/* Product Image */}
            <Box
                sx={{
                    width: '100%',
                    height: '130px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <Box
                    component="img"
                    src={item.image}
                    alt={title}
                    sx={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        mixBlendMode: isFirst ? 'normal' : 'multiply',
                        filter: isFirst ? 'drop-shadow(0px 10px 10px rgba(0,0,0,0.3))' : 'none',
                    }}
                />
            </Box>

            {/* Product Metadata */}
            <Box sx={{ flexGrow: 1, mb: 1.5 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '0.9rem', noWrap: true, textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {title}
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: isFirst ? '#E0E0E0' : '#757575', mb: 0.5, noWrap: true, textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {subtitle}
                </Typography>

                {/* Rating Row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Rating value={rating} precision={0.1} readOnly size="small" sx={{ fontSize: '0.85rem', color: '#FFB300' }} />
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: isFirst ? '#FFD54F' : '#616161' }}>
                        ({rating})
                    </Typography>
                </Box>
            </Box>

            {/* Price Info */}
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1.5 }}>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 'bold', color: isFirst ? '#FFF' : '#000' }}>
                    ${currentPrice.toFixed(2)}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', textDecoration: 'line-through', color: isFirst ? '#B0BEC5' : '#9E9E9E' }}>
                    ${originalPrice.toFixed(2)}
                </Typography>
            </Box>

            {/* Countdown Mini Timer Container */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', color: isFirst ? '#E0E0E0' : '#757575' }}>
                    Ends In
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {['08', '45', '30'].map((time, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                background: isFirst ? 'rgba(255,255,255,0.2)' : '#FFEBEB',
                                color: isFirst ? '#FFF' : '#FF4D4D',
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                px: 0.6,
                                py: 0.2,
                                borderRadius: '4px',
                            }}
                        >
                            {time}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Add to Cart CTA Button */}
            <Button
                fullWidth
                variant="contained"
                startIcon={<ShoppingCartOutlinedIcon size="small" />}
                sx={{
                    textTransform: 'none',
                    borderRadius: '12px',
                    fontWeight: 'bold',
                    fontSize: '0.85rem',
                    py: 1,
                    background: isFirst
                        ? 'linear-gradient(90deg, #FF2A85 0%, #FF7300 100%)'
                        : 'linear-gradient(90deg, #FF416C 0%, #FF4B2B 100%)',
                    boxShadow: 'none',
                    '&:hover': {
                        opacity: 0.9,
                    },
                }}
            >
                Add to Cart
            </Button>
        </Box>
    );
};