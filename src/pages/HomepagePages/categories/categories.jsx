import React, { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import useCatStore from '../../../store/categoriesStore';


export default function CategoryNav({ categoriesData }) {

    const categorie = useCatStore((state) => state.slider);
    const loading = useCatStore((state) => state.loading);
    const error = useCatStore((state) => state.error);
    const fetchCategorie = useCatStore((state) => state.fetchCategorie);

    useState(()=>{
         fetchCategorie()
    },[fetchCategorie])



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
                "::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
            }}
        >
            {categoriesData.map((category) => (
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
                            src={category.image}
                            alt={category.label}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>

                    {/* Text Labels */}
                    <Typography
                        sx={{
                            fontWeight: 500,
                            color: 'black.main',
                            textAlign: 'center',
                            fontSize: '12px',
                            lineHeight: 1,
                            display: 'flex',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',

                        }}
                    >
                        {category.label}
                    </Typography>
                </Link>
            ))}
        </Box>
    );
}