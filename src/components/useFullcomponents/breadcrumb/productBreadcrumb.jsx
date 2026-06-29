import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

// Dummy current item info (Replace with your actual route state/props)
const currentProduct = {
  category: "Electronics",
  categoryUrl: "/electronics",
  name: "Wireless Noise-Canceling Headphones"
};

export default function ProductBreadcrumb() {
   const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };

  return (
    <Box sx={{ px:3, mt:2  }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" sx={{ color: 'text.disabled' }} />}
        aria-label="breadcrumb"
      >
        {/* Link 1: Home */}
        <Link
          underline="hover"
          color="text.secondary"
          href="/"
          onClick={handleClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          <HomeIcon sx={{ mr: 0.5, fontSize: '1.1rem' }} />
          Home
        </Link>


        <Link
          underline="hover"
          color="text.secondary"
          href={currentProduct.categoryUrl}
          onClick={handleClick}
          sx={{
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          {currentProduct.category}
        </Link>


        <Typography
          slot="root"
          sx={{
            color: 'text.primary',
            fontSize: '0.875rem',
            fontWeight: 600,
            maxWidth: { xs: '180px', sm: '300px', md: 'none' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {currentProduct.name}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}