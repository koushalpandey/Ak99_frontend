
import { Box, Typography, Link } from '@mui/material';

const SpecificCategoryDesign = ({ item }) => {
    return (
        <Link
            underline="none"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                gap: 5
            }}
        >
            {/* Warm Grounded Image Container Frame */}
            <Box
                sx={{
                    width: 180,
                    height: 200,
                    borderRadius: '32px',
                    backgroundColor: '#eadecf',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    marginBottom: '12px',

                }}
            >
                <Box
                    component="img"
                    src={item.image}
                    alt={item.label}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            {/* Product Category Text Label */}
            <Typography
                sx={{
                    fontWeight: 700,
                    color: '#2d3748',
                    textAlign: 'center',
                    fontSize: '14px',
                    lineHeight: 1.2,
                    fontFamily: 'sans-serif',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    px: 0.5
                }}
            >
                {item.label}
            </Typography>
        </Link>
    );
};

export default SpecificCategoryDesign;