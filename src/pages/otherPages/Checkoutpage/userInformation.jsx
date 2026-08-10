// components/UserInformation.jsx
import { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    Avatar,
    Chip,
    Stack,
    TextField,
} from '@mui/material';
import {
    Pencil,
    User,
    Phone,
    Home,
    Mail,
} from 'lucide-react';

export default function UserInformation({ userData, onSave }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: userData?.user?.name || '',
        phoneNumber: userData?.phoneNumber || '',
        email: userData?.user?.email || '',
        deliveryAddress: userData?.address || '',
        landmark: '',
        state: userData?.state || '',
        pincode: userData?.pincode || '',
    });

    const handleChange = (field) => (event) => {
        setFormData({
            ...formData,
            [field]: event.target.value,
        });
    };

    const handleSave = () => {
        onSave(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData({
            fullName: userData?.user?.name || '',
            phoneNumber: userData?.phoneNumber || '',
            email: userData?.user?.email || '',
            deliveryAddress: userData?.address || '',
            landmark: '',
            state: userData?.state || '',
            pincode: userData?.pincode || '',
        });
    };

    return (
        <Card
            sx={{
                p: 2.5,
                mb: 2,
                bgcolor: '#FFFFFF',
                border: '1px solid #F1F5F9',
                borderRadius: 4,
                boxShadow: 'none'
            }}
        >
            <Stack
                direction="row"
                spacing={1}
                sx={{ mb: 2.5, alignItems: "center" }}
            >
                <Avatar
                    sx={{
                        bgcolor: '#F3E8FF',
                        width: 32,
                        height: 32,
                        borderRadius: 2
                    }}
                >
                    <User size={18} color="#7C3AED" />
                </Avatar>
                <Typography
                    sx={{
                        fontWeight: 700,
                        color: '#1E293B',
                        fontSize: '16px'
                    }}
                >
                    User Information
                </Typography>
                {!isEditing && (
                    <Chip
                        label="Complete Profile"
                        size="small"
                        sx={{
                            ml: 1,
                            bgcolor: '#DCFCE7',
                            color: '#15803D',
                            fontWeight: 600,
                            fontSize: '10px',
                            height: 20
                        }}
                    />
                )}
                {!isEditing && (
                    <Button
                        size="small"
                        onClick={() => setIsEditing(true)}
                        endIcon={<Pencil size={14} />}
                        sx={{
                            ml: 'auto',
                            color: '#7C3AED',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '12px',
                            '&:hover': {
                                bgcolor: '#F3E8FF'
                            }
                        }}
                    >
                        Edit
                    </Button>
                )}
            </Stack>

            {!isEditing ? (
                <Stack spacing={2}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1,
                                    bgcolor: '#F8FAFC',
                                    borderRadius: 2
                                }}
                            >
                                <User size={18} color="#94A3B8" />
                                <Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: '#94A3B8',
                                            display: 'block',
                                            fontSize: '10px'
                                        }}
                                    >
                                        Full Name
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            color: '#1E293B',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {userData?.user?.name}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1,
                                    bgcolor: '#F8FAFC',
                                    borderRadius: 2
                                }}
                            >
                                <Phone size={18} color="#94A3B8" />
                                <Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: '#94A3B8',
                                            display: 'block',
                                            fontSize: '10px'
                                        }}
                                    >
                                        Phone Number
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            color: '#1E293B',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {userData?.phoneNumber}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1,
                                    bgcolor: '#F8FAFC',
                                    borderRadius: 2
                                }}
                            >
                                <Mail size={18} color="#94A3B8" />
                                <Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: '#94A3B8',
                                            display: 'block',
                                            fontSize: '10px'
                                        }}
                                    >
                                        Email Address
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            color: '#1E293B',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {userData?.user?.email}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1,
                                    bgcolor: '#F8FAFC',
                                    borderRadius: 2
                                }}
                            >
                                <Home size={18} color="#94A3B8" />
                                <Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: '#94A3B8',
                                            display: 'block',
                                            fontSize: '10px'
                                        }}
                                    >
                                        Delivery Address
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            color: '#1E293B',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {userData?.address}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1,
                                    bgcolor: '#F8FAFC',
                                    borderRadius: 2
                                }}
                            >
                                <Home size={18} color="#94A3B8" />
                                <Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: '#94A3B8',
                                            display: 'block',
                                            fontSize: '10px'
                                        }}
                                    >
                                        State
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            color: '#1E293B',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {userData?.state}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1,
                                    bgcolor: '#F8FAFC',
                                    borderRadius: 2
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: '#94A3B8',
                                            display: 'block',
                                            fontSize: '10px'
                                        }}
                                    >
                                        Pincode
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            color: '#1E293B',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {userData?.pincode}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Stack>
            ) : (
                <>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Full Name"
                                value={formData.fullName}
                                onChange={handleChange('fullName')}
                                slotProps={{
                                    startAdornment: (
                                        <User size={18} color="#94A3B8" style={{ marginRight: 8 }} />
                                    )
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        bgcolor: '#F8FAFC',
                                        '&:hover': {
                                            bgcolor: '#F1F5F9'
                                        }
                                    }
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange('phoneNumber')}
                                slotProps={{
                                    startAdornment: (
                                        <Phone size={18} color="#94A3B8" style={{ marginRight: 8 }} />
                                    )
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        bgcolor: '#F8FAFC',
                                        '&:hover': {
                                            bgcolor: '#F1F5F9'
                                        }
                                    }
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Email Address"
                                value={formData.email}
                                onChange={handleChange('email')}
                                slotProps={{
                                    startAdornment: (
                                        <Mail size={18} color="#94A3B8" style={{ marginRight: 8 }} />
                                    )
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        bgcolor: '#F8FAFC',
                                        '&:hover': {
                                            bgcolor: '#F1F5F9'
                                        }
                                    }
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Delivery Address"
                                value={formData.deliveryAddress}
                                onChange={handleChange('deliveryAddress')}
                                slotProps={{
                                    startAdornment: (
                                        <Home size={18} color="#94A3B8" style={{ marginRight: 8 }} />
                                    )
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        bgcolor: '#F8FAFC',
                                        '&:hover': {
                                            bgcolor: '#F1F5F9'
                                        }
                                    }
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Landmark (Optional)"
                                placeholder="Near City Centre Mall"
                                value={formData.landmark}
                                onChange={handleChange('landmark')}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        bgcolor: '#F8FAFC',
                                        '&:hover': {
                                            bgcolor: '#F1F5F9'
                                        }
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ mt: 2 }}
                    >
                        <Button
                            size="small"
                            variant="contained"
                            onClick={handleSave}
                            sx={{
                                bgcolor: '#7C3AED',
                                textTransform: 'none',
                                borderRadius: 2,
                                fontSize: '12px',
                                '&:hover': {
                                    bgcolor: '#6D28D9'
                                }
                            }}
                        >
                            Save Changes
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={handleCancel}
                            sx={{
                                borderColor: '#E2E8F0',
                                color: '#64748B',
                                textTransform: 'none',
                                borderRadius: 2,
                                fontSize: '12px',
                                '&:hover': {
                                    borderColor: '#CBD5E1'
                                }
                            }}
                        >
                            Cancel
                        </Button>
                    </Stack>
                </>
            )}
        </Card>
    );
}