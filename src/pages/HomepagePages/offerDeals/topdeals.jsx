import { useRef } from 'react';
import {
    Box,
    Typography,

    IconButton
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductCard from '../../../components/useFullcomponents/DesignComponent/productCardDesign/productcard';


const dealsData = [
    {
        id: 1,
        title: 'Bluetooth Headphones',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80',
        currentPrice: 299,
        originalPrice: 999,
        discount: '70% OFF',
    },
    {
        id: 2,
        title: 'Smart Watch',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80',
        currentPrice: 399,
        originalPrice: 1299,
        discount: '69% OFF',
    },
    {
        id: 3,
        title: 'Smart',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80',
        currentPrice: 299,
        originalPrice: 999,
        discount: '70% OFF',
    },
    {
        id: 4,
        title: 'Sneakers',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80',
        currentPrice: 49,
        originalPrice: 199,
        discount: '75% OFF',
    },
    {
        id: 5,
        title: 'Sneakers',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80',
        currentPrice: 49,
        originalPrice: 199,
        discount: '75% OFF',
    },
    {
        id: 6,
        title: 'Sneakers',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80',
        currentPrice: 49,
        originalPrice: 199,
        discount: '75% OFF',
    },
    {
        id: 7,
        title: 'Sneakers',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80',
        currentPrice: 49,
        originalPrice: 199,
        discount: '75% OFF',
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
                backgroundColor: 'topDeal.main',
                padding: '24px',
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            color: 'black.main',
                            fontSize: '1.4rem'
                        }}
                    >
                        Deals of the Day
                    </Typography>


                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #F97316',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            backgroundColor: '#FFF'
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: 'secondary.main',
                                color: '#FFF',
                                px: 1.5,
                                py: 0.5,
                                fontWeight: 500,
                                fontSize: '0.85rem',
                            }}
                        >
                            Ends in
                        </Box>
                        <Typography
                            sx={{
                                px: 1.5,
                                color: 'secondary.main',
                                fontWeight: 500,
                                letterSpacing: '1px',
                                fontSize: '0.9rem'
                            }}
                        >
                            12 : 45 : 30
                        </Typography>
                    </Box>
                </Box>


            </Box>


            <IconButton
                className="nav-arrow"
                onClick={() => handleScroll('left')}
                sx={{
                    position: 'absolute',
                    left: '8px',
                    top: '55%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
                    zIndex: 10,
                    opacity: 0,
                    transition: 'opacity 0.2s ease-in-out, background-color 0.2s',
                    '&:hover': { backgroundColor: '#F5F5F5' }
                }}
            >
                <ArrowBackIosNewIcon fontSize="small" sx={{ color: 'black.main', mr: '2px' }} />
            </IconButton>


            <IconButton
                className="nav-arrow"
                onClick={() => handleScroll('right')}
                sx={{
                    position: 'absolute',
                    right: '8px',
                    top: '55%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
                    zIndex: 10,
                    opacity: 0,
                    transition: 'opacity 0.2s ease-in-out, background-color 0.2s',
                    '&:hover': { backgroundColor: '#F5F5F5' }
                }}
            >
                <ArrowForwardIosIcon fontSize="small" sx={{ color: 'black.main', ml: '2px' }} />
            </IconButton>

            {/* Product Scrollable Container */}
            <Box
                ref={scrollContainerRef}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    gap: 1.5,
                    overflowX: 'auto',
                    py: 1,
                    px: 0.5,
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                    scrollBehavior: 'smooth'
                }}
            >
                {dealsData.map((item) => (
                    <ProductCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        currentPrice={item.currentPrice}
                        originalPrice={item.originalPrice}
                        discount={item.discount}
                    />
                ))}
            </Box>
        </Box>
    );
}