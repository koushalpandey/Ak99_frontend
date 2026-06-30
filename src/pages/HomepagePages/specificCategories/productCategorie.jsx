import { useEffect } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import SpecificCategoryDesign from '../../../components/useFullcomponents/DesignComponent/productCardDesign/specifccategorieDesign';
import useProductListStore from '../../../store/productListStores/homepageProductlist';

const ProductCategory = () => {
    // 1. Hook directly into your Zustand Store values
    const productListData = useProductListStore((state) => state?.Data);
    const loading = useProductListStore((state) => state?.loading);
    const error = useProductListStore((state) => state?.error);
    const fetchProductList = useProductListStore((state) => state?.fetchProductList);


    useEffect(() => {
        if (fetchProductList) {
            fetchProductList();
        }
    }, [fetchProductList]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px', width: '100%' }}>
                <CircularProgress color="primary" />
            </Box>
        );
    }


    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px', width: '100%' }}>
                <Typography color="error">Failed to load product section.</Typography>
            </Box>
        );
    }


    if (productListData?.products?.length === 0) return null;




    return (
        <Box sx={{ width: '100%', mt:2, backgroundColor: '#ffffff' }}>

            {/* Header section with Dynamic Title */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography

                    sx={{ fontWeight: 600, color: 'text.primary', fontSize: '22px' }}
                >
                    {'Test-product'}
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        color: '#2d3748',
                        borderColor: '#2d3748',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        borderRadius: '4px',
                        px: 2,
                        '&:hover': {
                            borderColor: '#000000',
                            backgroundColor: '#f7f9fa'
                        }
                    }}
                >
                    View All
                </Button>
            </Box>


            <Box
                sx={{
                    display: 'flex',
                    gap: '20px',
                    overflowX: 'auto',
                    pb: 1,
                    "::-webkit-scrollbar": { display: "none" },
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                }}
            >
                {productListData?.products?.map((item) => (
                <SpecificCategoryDesign key={item.id} item={item} />
                ))}
            </Box>
        </Box>
    );
};

export default ProductCategory;