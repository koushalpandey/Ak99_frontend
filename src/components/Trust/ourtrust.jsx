import { Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';


export default function MarketingBannerZone() {
  const features = [
    {
      icon: <LockOutlinedIcon sx={{ color: '#4CAF50' }} />,
      bgColor: '#E8F5E9',
      title: 'Secure Payments',
      subtitle: '100% secure checkout',
    },
    {
      icon: <AutorenewIcon sx={{ color: '#7E57C2' }} />,
      bgColor: '#F3E5F5',
      title: 'Easy Returns',
      subtitle: '30-day return policy',
    },
    {
      icon: <LocalShippingOutlinedIcon sx={{ color: '#2979FF' }} />,
      bgColor: '#E3F2FD',
      title: 'Free Shipping',
      subtitle: 'On orders over $99',
    },
    {
      icon: <HeadsetMicOutlinedIcon sx={{ color: '#FF6D00' }} />,
      bgColor: '#FFF3E0',
      title: '24/7 Support',
      subtitle: "We're here to help",
    },

  ];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FAFAFA',
          border: '1px solid #F0F0F0',
          borderRadius: '20px',
          padding: '20px 32px',
          width: '100%',

          flexWrap: 'wrap',
          gap: { xs: 4, lg: 2 },
        }}
      >
        {features.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flex: '1 1 200px',
              justifyContent: { xs: 'flex-start', md: 'center' },
              position: 'relative',
              gap: 2,
            }}
          >
            {/* Soft Icon Wrapper Box */}
            <Box
              sx={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: item.bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {item.icon}
            </Box>

            {/* Content Text Blocks */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#1E1E1E',
                  fontSize: '0.92rem',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: '#8E8E93',
                  fontWeight: 500,
                  fontSize: '0.8rem',
                  mt: 0.3,
                }}
              >
                {item.subtitle}
              </Typography>
            </Box>

            {/* Vertical Divider lines between the items */}
            {index < features.length - 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  right: 0,
                  width: '1px',
                  height: '36px',
                  backgroundColor: '#E5E5EA',
                  display: { xs: 'none', lg: 'block' },
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}