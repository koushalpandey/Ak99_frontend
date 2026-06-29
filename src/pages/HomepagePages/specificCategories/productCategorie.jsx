import { Box, Typography, Button } from '@mui/material';
import SpecificCategoryDesign from '../../../components/useFullcomponents/DesignComponent/productCardDesign/specifccategorieDesign';
import { useEffect, useState } from 'react';
import { fetchSpeificCategories } from '../../../components/dummyData/specificCategroesData';


const ProductCategory = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const res = await fetchSpeificCategories()
            setData(res?.data)
        } catch (error) {

            console.log(error.message);

        }
    }
    useEffect(() => {
        getData();
    }, [])



    return (
        <Box sx={{ width: '100%', padding: '24px', backgroundColor: '#ffffff' }}>

            {/* Header Row */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: 'black.main', fontSize: '22px' }}
                >
                    Home & kitchen
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

            {/* Horizontal Scroll Scroller Container */}
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
                {data.map((item) => (
                    <SpecificCategoryDesign key={item.id} item={item} />
                ))}
            </Box>
        </Box>
    );
};

export default ProductCategory;