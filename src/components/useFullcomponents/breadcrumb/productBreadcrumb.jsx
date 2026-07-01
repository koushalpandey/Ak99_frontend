import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from "react-router-dom";

const currentProduct = {
  category: "Electronics",
  categoryUrl: "/electronics",
  name: "Wireless Noise-Canceling Headphones"
};

export default function ProductBreadcrumb({categorieName,productName}) {


  return (
    <Box sx={{ px: 3, mt: 2 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" sx={{ color: 'text.disabled' }} />}
        aria-label="breadcrumb"
      >
        {/* Link 1: Home */}
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          color="text.secondary"
          href="/"
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


        <Typography
          underline="hover"
          color="text.secondary"
          href={currentProduct.categoryUrl}
          sx={{
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          {categorieName}
        </Typography>


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
          {productName}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}