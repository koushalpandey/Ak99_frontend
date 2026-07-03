import { useState } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Rating,
    Box,
    Typography,
    IconButton,
    Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { submitReviewApi } from '../../../api/endpoint/api.endpoint';

const AddReviewComponent = ({ productId }) => {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const [hover, setHover] = useState(-1);


    const labels = {
        1: 'Useless',
        2: 'Poor',
        3: 'Ok',
        4: 'Good',
        5: 'Excellent',
    };

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);

        setRating(0);
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            productId: productId,
            rating: Number(rating),
            comment:String(message) ,
        };

        try {

            await submitReviewApi(payload);
            console.log("Review Payload Sent successfully:", payload);
            handleClose();


        } catch (error) {

            console.log(error.message);

        }
    };

    return (
        <>
            {/* 1. Attractive Initial Trigger Button */}
            <Button
                variant="contained"
                color="primary"
                startIcon={<RateReviewIcon />}
                onClick={handleOpen}
                sx={{
                    borderRadius: 3,
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    py: 1.2,
                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)',
                    '&:hover': {
                        boxShadow: '0 6px 16px rgba(25, 118, 210, 0.3)',
                    },
                }}
            >
                Write a Product Review
            </Button>

            {/* 2. Sleek Review Dialog Box */}
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="xs"
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        p: 1.5,
                    }
                }}
            >
                <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                        Share Your Experience
                    </Typography>
                    <IconButton onClick={handleClose} aria-label="close" size="small">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <Box component="form" onSubmit={handleSubmit}>
                    <DialogContent dividers sx={{ borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
                        <Stack spacing={3} alignItems="center" sx={{ py: 1 }}>

                            {/* Star Rating Section */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                <Rating
                                    name="product-rating"
                                    value={rating}
                                    precision={1}
                                    size="large"
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    sx={{
                                        fontSize: '2.5rem',
                                        '& .MuiRating-iconFilled': {
                                            color: '#faaf00',
                                        },
                                    }}
                                />
                                {rating !== null && (
                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, minHeight: '20px' }}>
                                        {labels[hover !== -1 ? hover : rating] || 'Tap to rate'}
                                    </Typography>
                                )}
                            </Box>

                            {/* Message Input Box */}
                            <TextField
                                label="Your Review Message"
                                multiline
                                rows={4}
                                fullWidth
                                variant="outlined"
                                placeholder="What did you like or dislike about this product?"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                slotProps={{
                                    inputLabel: { shrink: true } // Clean layouts using native modern slots configuration style in v9
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 3,
                                    }
                                }}
                            />
                        </Stack>
                    </DialogContent>

                    {/* Action Buttons */}
                    <DialogActions sx={{ p: 2, gap: 1 }}>
                        <Button
                            onClick={handleClose}
                            color="inherit"
                            sx={{ textTransform: 'none', fontWeight: 600 }}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={!rating || !message.trim()}
                            sx={{
                                borderRadius: 2.5,
                                textTransform: 'none',
                                fontWeight: 600,
                                px: 3,
                            }}
                        >
                            Submit Review
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    );
};

export default AddReviewComponent;