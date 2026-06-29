import { Box, Typography, Button, } from '@mui/material';


export default function SuperSaverBannerZone() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',
        padding: '16px',

        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}
    >
      {/* SECTION 2: Super Saver Zone Banner */}
      <Box
        sx={{
          width: '100%',
          borderRadius: '24px',
          padding: { xs: '24px', md: '32px 48px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '160px',
          boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.4)'
        }}
      >
        {/* Left Side: Typography Content */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, zIndex: 2 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: '#5E35B1', // Deep purple accent text
              fontSize: { xs: '1.6rem', sm: '2rem', md: '2.4rem' },
              letterSpacing: '-0.5px'
            }}
          >
            Super Saver Zone
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', mt: 0.5 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#212121',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }
              }}
            >
              Everything Under ₹99
            </Typography>

            {/* Shop Now Action Trigger */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'rgba(94, 53, 177, 0.1)', // Glassy overlay purple
                color: '#5E35B1',
                fontWeight: 700,
                borderRadius: '20px',
                px: 3,
                py: 0.75,
                textTransform: 'none',
                boxShadow: 'none',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(94, 53, 177, 0.15)',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: '#5E35B1',
                  color: '#FFFFFF',
                  boxShadow: '0px 6px 16px rgba(94, 53, 177, 0.2)'
                }
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>

        {/* Right Side: Showcase Illustration Graphics Container */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
            position: 'absolute',
            right: '40px',
            bottom: '-10px',
            width: { sm: '160px', md: '210px' },
            height: { sm: '160px', md: '210px' },
            zIndex: 1
          }}
        >
          {/* Using a high-quality 3D render placeholder asset matching your graphic box schema */}
          <Box
            component="img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/gift-box-5381534-4496464.png"
            alt="Super Saver Box Assets"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}