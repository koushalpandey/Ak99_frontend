import { useRef } from 'react';
import {
    Box,
    Typography,
    IconButton
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductCard from '../../../components/useFullcomponents/DesignComponent/productCardDesign/productcard';



export default function ProductList({ productData }) {
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            color: 'black.main',
                            fontSize: '1.4rem'
                        }}
                    >
                        {productData[0]?.category}
                    </Typography>



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
                {productData.map((item) => (
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