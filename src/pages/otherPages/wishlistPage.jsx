import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,

  Container,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import useWishListStore from '../../store/wishListStore/getWishlistStore';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';



export default function WishlistComponent() {
  const Data = useWishListStore((state) => state?.Data);
  const loading = useWishListStore((state) => state?.loading);
  const error = useWishListStore((state) => state?.error);
  const fetchWishList = useWishListStore((state) => state?.fetchWishList);


  useEffect(() => {
    fetchWishList()
  }, [fetchWishList])

  return (
    <Container maxWidth={'lg'} sx={{ py: 4, fontFamily: 'sans-serif' }}>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
          <FavoriteBorderIcon sx={{ color: 'secondary.main', fontSize: 32, mt: 1 }} />
          <Box>
            <Typography sx={{ fontWeight: 500, fontSize: "15.5px", color: 'black.main' }}>
              My Wishlist
            </Typography>
            <Typography sx={{ color: '#64748b', fontSize: "13.5px", mt: 0.5 }}>
              Your favorite items, all in one place.
            </Typography>
          </Box>
        </Box>

        <Button
          component={NavLink}
          to={'/'}

          startIcon={<ChevronLeftIcon />}
          sx={{
            textTransform: 'none',
            color: 'secondary.main',
            borderRadius: '8px',
            fontWeight: 500,
            fontSize: "13.5px",
          }}
        >
          Continue Shopping
        </Button>
      </Box>


      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {Data?.wishlist?.map((item) => (
          <Paper
            key={item?.id}
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2,
              border: '1px solid #f1f5f9',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Image Container */}
            <Box
              sx={{
                width: 140,
                height: 110,
                backgroundColor: item.imgBg,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1,
                mr: 3,
              }}
            >
              <Box
                component="img"
                src={item?.product?.images?.[0]?.url}
                alt={item.title}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>

            {/* Product Details */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Typography  sx={{fontSize: "16px", fontWeight: 500, color:'secondary.main' }}>
                {item?.product?.name}
              </Typography>
            </Box>

            {/* Pricing Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mr: 4 }}>
              <Typography sx={{  color:'secondary.main', fontWeight: 500, fontSize: '1rem' }}>
                ₹{item?.product?.price}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'black.main', textDecoration: 'line-through', fontSize: '0.9rem' }}
              >
                ₹{item?.product?.comparePrice}
              </Typography>

            </Box>


            <IconButton
              sx={{
                backgroundColor: '#fff1f2',
               color:'secondary.main',
                p: 1.5,
                '&:hover': {
                  backgroundColor: '#ffe4e6',
                },
              }}
            >
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}