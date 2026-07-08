import { useRef } from 'react';
import {
    Box,
    Typography,

    IconButton
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { SpecialOfferCard } from '../../../components/useFullcomponents/DesignComponent/productCardDesign/specailofferCard';



const dealsData = [
    {
        id: 1,
        title: 'Sony WH-1000XM5',
        subtitle: 'Wireless Noise Cancelling',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80',
        currentPrice: 199.99,
        originalPrice: 399.99,
        discount: '50% OFF',
        rating: 4.8,
        isFirst: true, // Unique purple/gradient treatment
    },
    {
        id: 2,
        title: 'Apple Watch Series 9',
        subtitle: 'GPS, 45mm',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80',
        currentPrice: 299.00,
        originalPrice: 499.00,
        discount: '40% OFF',
        rating: 4.9,
    },
    {
        id: 3,
        title: 'Canon EOS R50',
        subtitle: 'Mirrorless Camera',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&q=80',
        currentPrice: 649.00,
        originalPrice: 999.00,
        discount: '35% OFF',
        rating: 4.7,
    },
    {
        id: 4,
        title: 'JBL Flip 6',
        subtitle: 'Portable Bluetooth Speaker',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&q=80',
        currentPrice: 87.99,
        originalPrice: 159.99,
        discount: '45% OFF',
        rating: 4.6,
    },
    {
        id: 5,
        title: 'Bleu de Chanel',
        subtitle: 'Eau de Parfum',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&q=80',
        currentPrice: 89.99,
        originalPrice: 129.99,
        discount: '45% OFF',
        rating: 4.8,
    },
    {
        id: 6,
        title: 'Bleu de Chanel',
        subtitle: 'Eau de Parfum',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&q=80',
        currentPrice: 89.99,
        originalPrice: 129.99,
        discount: '45% OFF',
        rating: 4.8,
    },
    {
        id: 7,
        title: 'JBL Flip 6',
        subtitle: 'Portable Bluetooth Speaker',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&q=80',
        currentPrice: 87.99,
        originalPrice: 159.99,
        discount: '45% OFF',
        rating: 4.6,
    },
];

export default function TopDealsOfTheDay() {
    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box
            sx={{
                borderRadius: '16px',
                maxWidth: '100%',
                margin: '20px auto',
                position: 'relative',
                '&:hover .nav-arrow': { opacity: 1 }
            }}
        >
            {/* Header Section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 3,
                    flexWrap: 'wrap',
                    gap: 2
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: '#1A1A1A',
                            fontSize: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}
                    >
                        ⚡ Special Offer Products
                    </Typography>
                </Box>

            </Box>

            {/* Navigation Arrows */}
            <IconButton
                className="nav-arrow"
                onClick={() => handleScroll('left')}
                sx={{
                    position: 'absolute',
                    left: '-15px',
                    top: '55%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                    zIndex: 10,
                    opacity: 0,
                    transition: 'opacity 0.2s ease-in-out, background-color 0.2s',
                    '&:hover': { backgroundColor: '#F5F5F5' }
                }}
            >
                <ArrowBackIosNewIcon fontSize="small" sx={{ color: '#000', mr: '2px' }} />
            </IconButton>

            <IconButton
                className="nav-arrow"
                onClick={() => handleScroll('right')}
                sx={{
                    position: 'absolute',
                    right: '-15px',
                    top: '55%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                    zIndex: 10,
                    opacity: 0,
                    transition: 'opacity 0.2s ease-in-out, background-color 0.2s',
                    '&:hover': { backgroundColor: '#F5F5F5' }
                }}
            >
                <ArrowForwardIosIcon fontSize="small" sx={{ color: '#000', ml: '2px' }} />
            </IconButton>

            {/* Product Scrollable Container */}
            <Box
                ref={scrollContainerRef}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    gap: 2,
                    overflowX: 'auto',
                    py: 2,
                    px: 0.5,
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                    scrollBehavior: 'smooth'
                }}
            >
                {dealsData.map((item) => (
                    <SpecialOfferCard key={item.id} item={item} />
                ))}
            </Box>
        </Box>
    );
}