import { Box, Typography} from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

export default function MarketingBannerZone() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}
    >

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          backgroundColor: '#FFFFFF',
        }}
      >


        {/* Features Group Container (Safe, Fast, Easy) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F8F9FA',
            borderRadius: '16px',
            padding: '12px 24px',
            flex: '3 1 600px',
            flexWrap: 'wrap',
            gap: 3
          }}
        >
          {/* Feature 2: Safe Shopping */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ display: 'flex', color: '#00C853' }}>
              <VerifiedUserOutlinedIcon fontSize="medium" />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#111111', lineHeight: 1.2 }}>
                Safe Shopping
              </Typography>
              <Typography variant="caption" sx={{ color: '#757575', fontWeight: 500 }}>
                Secure & Easy
              </Typography>
            </Box>
          </Box>

          {/* Divider */}
          <Box sx={{ width: '1px', height: '30px', backgroundColor: '#E0E0E0', display: { xs: 'none', sm: 'block' } }} />

          {/* Feature 3: Fast Delivery */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ display: 'flex', color: '#FF9100' }}>
              <LocalShippingOutlinedIcon fontSize="large" />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#111111', lineHeight: 1.2 }}>
                Fast Delivery
              </Typography>
              <Typography variant="caption" sx={{ color: '#757575', fontWeight: 500 }}>
                On Time
              </Typography>
            </Box>
          </Box>

          {/* Divider */}
          <Box sx={{ width: '1px', height: '30px', backgroundColor: '#E0E0E0', display: { xs: 'none', sm: 'block' } }} />

          {/* Feature 4: Easy Returns */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ display: 'flex', color: '#FF3D00', transform: 'scaleX(-1)' }}>
              <ReplayOutlinedIcon fontSize="medium" />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#111111', lineHeight: 1.2 }}>
                Easy Returns
              </Typography>
              <Typography variant="caption" sx={{ color: '#757575', fontWeight: 500 }}>
                Hassle Free
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>



    </Box>
  );
}