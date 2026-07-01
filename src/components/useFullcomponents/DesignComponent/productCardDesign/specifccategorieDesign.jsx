
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';



const SpecificCategoryDesign = ({ item }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                flexShrink: 0,

            }}
        >
            <Box
                component={NavLink}
                to={`/productDetail/${item?.slug}`}
                sx={{
                    width: 180,
                    height: 220,
                    borderRadius: '22px',
                    backgroundColor: '#eadecf',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    marginBottom: '12px',

                }}
            >
                {item?.images?.map((img) => (
                    <Box
                        component="img"
                        src={img?.url}
                        alt={"No Image"}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />

                ))}

            </Box>
            <Typography
                sx={{
                    fontWeight: 700,
                    color: '#2d3748',
                    textAlign: 'center',
                    fontSize: '14px',
                    lineHeight: 1.2,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    px: 0.5
                }}
            >
                {item?.name}
            </Typography>
        </Box>
    );
};

export default SpecificCategoryDesign;