
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Card,
  CardContent,
  Divider,
  Stack,
  Grid
} from '@mui/material';
import { reviewsData } from '../../../dummyData/reviewData.js';

export default function ReviewSection() {
  return (
    <Box sx={{ width:"100%", margin: '0 auto', }}>
      {/* Section Header */}
      <Typography

        sx={{ fontWeight: 600, mb: 1 }}
      >
        Customer Reviews
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* Grid Container */}
      <Grid container spacing={3}>
        {reviewsData.map((review) => (
          <Grid size={{ xs: 12 }} key={review.id}>
            <Card
            sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                borderColor: 'divider'
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* User Info Header */}
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.light',
                      color: 'primary.contrastText',
                      fontWeight: 'bold',
                      fontSize: '0.95rem'
                    }}
                  >
                    {review.avatarInitial}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
                      {review.username}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {review.date}
                    </Typography>
                  </Box>
                </Stack>

                {/* Star Rating */}
                <Rating
                  value={review.rating}
                  readOnly
                  size="small"
                  sx={{ mb: 1.5 }}
                />

                {/* Review Text Body */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6, mb: review.images.length > 0 ? 2 : 0 }}
                >
                  {review.comment}
                </Typography>

                {/* Review Images Grid (Conditional Rendering) */}
                {review.images.length > 0 && (
                  <Stack direction="row" spacing={1} useFlexGap>
                    {review.images.map((imgUrl, index) => (
                      <Box
                        component="img"
                        key={index}
                        src={imgUrl}
                        alt={`User review uploaded content ${index + 1}`}
                        sx={{
                          width: 80,
                          height: 80,
                          objectFit: 'cover',
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'divider',
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          }
                        }}
                      />
                    ))}
                  </Stack>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}