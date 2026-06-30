import { useEffect } from 'react';
import { Box, Typography, Link, CircularProgress } from '@mui/material';
import useCatStore from '../../../store/categoriesStore';

export default function CategoryNav() {

    const categoriesState = useCatStore((state) => state?.slider);
    const loading = useCatStore((state) => state?.loading);
    const error = useCatStore((state) => state?.error);
    const fetchCategorie = useCatStore((state) => state?.fetchCategorie);

    useEffect(() => {
        if (fetchCategorie) {
            fetchCategorie();
        }
    }, [fetchCategorie]);


    const categoriesList = Array.isArray(categoriesState)
        ? categoriesState
        : categoriesState?.data || [];




    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3, width: '100%' }}>
                <CircularProgress size={24} color="primary" />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3, width: '100%' }}>
                <Typography variant="body2" color="error">Failed to load categories.</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                backgroundColor: '#ffffff',
                width: '100%',
                gap: 5,
                py: 2,
                px: 1,
                "::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
            }}
        >
            {categoriesList.map((category) => {

                const categoryImage = category?.image?.original ||
                                      category?.image?.medium ||
                                      category?.image?.url ||
                                      'https://via.placeholder.com/100';

                const categoryName = category?.name || "Category";

                return (
                    <Link
                        key={category.id}
                        underline="none"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            cursor: 'pointer',
                            flexShrink: 0,
                        }}
                    >

                        <Box
                            sx={{
                                width: 104,
                                height: 110,
                                borderRadius: '18px',
                                backgroundColor: '#f5f5f5',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden',
                                marginBottom: '10px',
                            }}
                        >
                            <Box
                                component="img"
                                src={categoryImage}
                                alt={categoryName}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>


                        <Typography
                            sx={{
                                fontWeight: 500,
                                color: 'text.primary',
                                textAlign: 'center',
                                fontSize: '12px',
                                lineHeight: 1.2,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: 104
                            }}
                        >
                            {categoryName}
                        </Typography>
                    </Link>
                );
            })}
        </Box>
    );
}