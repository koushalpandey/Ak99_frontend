import { useState, useEffect } from 'react';
import {
  Box,
  Card,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion, AnimatePresence } from 'motion/react';
import Notiflix from 'notiflix';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Landmark,
  Navigation,
  Calendar,
  CheckCircle2,
  MoreHorizontal,
  Edit2,
  Save,
  X,
  Clock,
  UserPlus
} from 'lucide-react';
import useDetailStore from '../../../store/userStore/userDetailStore';
import axios from 'axios';


Notiflix.Notify.init({
  position: 'right-bottom',
  timeout: 3000,
  clickToClose: true,
  fontSize: '14px',
  borderRadius: '8px',
});

export default function UserProfile() {
  const UserData = useDetailStore((state) => state?.Data);
  const fetchUserDetailData = useDetailStore((state) => state?.fetchUserDetailData);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isEditing, setIsEditing] = useState(false);
  const [hasData, setHasData] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserDetailData();
  }, [fetchUserDetailData]);

  useEffect(() => {
    if (UserData) {
      const hasRequiredData = UserData.phoneNumber && UserData.address && UserData.city && UserData.state;
      setHasData(hasRequiredData);

      if (hasRequiredData) {
        setFormData({
          name: UserData.user?.name || 'User',
          email: UserData.user?.email || '',
          phone: UserData.phoneNumber || '',
          address: UserData.address || '',
          city: UserData.city || '',
          state: UserData.state || '',
          gender: UserData.gender || 'MALE',
          pincode: UserData.pincode || '',
          createdAt: UserData.createdAt ? new Date(UserData.createdAt).toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }) : '',
          updatedAt: UserData.updatedAt ? new Date(UserData.updatedAt).toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }) : ''
        });
        setTempData({
          name: UserData.user?.name || 'User',
          email: UserData.user?.email || '',
          phone: UserData.phoneNumber || '',
          address: UserData.address || '',
          city: UserData.city || '',
          state: UserData.state || '',
          gender: UserData.gender || 'MALE',
          pincode: UserData.pincode || '',
          createdAt: UserData.createdAt ? new Date(UserData.createdAt).toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }) : '',
          updatedAt: UserData.updatedAt ? new Date(UserData.updatedAt).toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }) : ''
        });
      } else {

        setTempData({
          name: UserData.user?.name || 'User',
          email: UserData.user?.email || '',
          phone: UserData.phoneNumber || '',
          address: UserData.address || '',
          city: UserData.city || '',
          state: UserData.state || '',
          gender: 'MALE',
          pincode: UserData.pincode || '',
          createdAt: '',
          updatedAt: ''
        });
      }
    }
  }, [UserData]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    gender: 'MALE',
    pincode: '',
    createdAt: '',
    updatedAt: ''
  });

  const [tempData, setTempData] = useState({ ...formData });

  // Normal functions for API calls
  const updateUserDetailData = async (payload) => {
    try {
      setLoading(true);
      const response = await axios.put('/api/user/profile', payload);
      return response.data;
    } catch (error) {
      console.error('Update error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const createUserDetailData = async (payload) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/user/profile', payload);
      return response.data;
    } catch (error) {
      console.error('Create error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setTempData({ ...formData });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setTempData({ ...formData });
    setIsEditing(false);
  };

  const handleSubmit = async () => {
    const payload = {
      phoneNumber: tempData.phone,
      address: tempData.address,
      city: tempData.city,
      state: tempData.state,
      gender: tempData.gender,
      pincode: tempData.pincode
    };

    console.log('Sending Payload to Server:', payload);

    try {
      if (hasData) {
        await updateUserDetailData(payload);
        Notiflix.Notify.success('User details updated successfully.');
      } else {

        await createUserDetailData(payload);
        Notiflix.Notify.success('User details created successfully.');
        setHasData(true);
      }

      // Update local state
      const updatedData = {
        ...formData,
        name: tempData.name || formData.name,
        email: tempData.email || formData.email,
        phone: tempData.phone,
        address: tempData.address,
        city: tempData.city,
        state: tempData.state,
        gender: tempData.gender,
        pincode: tempData.pincode,
        updatedAt: new Date().toLocaleString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      };

      if (!hasData) {
        updatedData.createdAt = new Date().toLocaleString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      }

      setFormData(updatedData);
      setIsEditing(false);

      // Refresh data from server
      await fetchUserDetailData();
    } catch (error) {
      Notiflix.Notify.failure('Failed to save user details. Please try again.');
      console.error('Error saving user details:', error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Render component for no data
  const renderNoData = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: { xs: 3, md: 4 },
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 10px 30px rgba(112, 128, 176, 0.08)',
          maxWidth: '600px',
          mx: 'auto'
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #F3E8FF, #D8CFFF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 2
            }}
          >
            <UserPlus size={40} color="#8C62FF" />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1E2342', mb: 1 }}>
            Complete Your Profile
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748B' }}>
            Please add your personal details to complete your profile
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={tempData.phone}
              onChange={handleChange}
              variant="outlined"
              size="small"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={tempData.address}
              onChange={handleChange}
              variant="outlined"
              size="small"
              multiline
              rows={2}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={tempData.city}
              onChange={handleChange}
              variant="outlined"
              size="small"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={tempData.state}
              onChange={handleChange}
              variant="outlined"
              size="small"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Pincode"
              name="pincode"
              value={tempData.pincode}
              onChange={handleChange}
              variant="outlined"
              size="small"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl fullWidth size="small">
              <Select
                name="gender"
                value={tempData.gender || 'MALE'}
                onChange={handleChange}
                displayEmpty
                sx={{ borderRadius: 2 }}
              >
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              disabled={loading}
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                bgcolor: '#8C62FF',
                fontWeight: 600,
                py: 1.5,
                '&:hover': { bgcolor: '#733BFF' }
              }}
            >
              {loading ? 'Saving...' : 'Save Profile'}
            </Button>
          </Grid>
        </Grid>
      </Card>
    </motion.div>
  );

  // Render component with data
  const renderWithData = () => (
    <>
      {/* Top Header Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 3 },
            borderRadius: { xs: 3, md: 4 },
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 10px 30px rgba(112, 128, 176, 0.08)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'center' },
            gap: { xs: 2.5, sm: 3 },
            mb: { xs: 2, md: 2.5 }
          }}
        >
          {/* Avatar Section */}
          <Box
            sx={{
              width: { xs: 110, sm: 130, md: 150 },
              height: { xs: 110, sm: 130, md: 150 },
              borderRadius: { xs: 3, md: 4 },
              background: 'linear-gradient(135deg, #EBE6FF 0%, #D8CFFF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              flexShrink: 0
            }}
          >
            <Box
              sx={{
                width: { xs: 70, sm: 85, md: 100 },
                height: { xs: 70, sm: 85, md: 100 },
                borderRadius: '50%',
                backgroundColor: '#8C62FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}
            >
              <User size={isMobile ? 35 : 55} />
            </Box>

            {/* Verified Badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: 10, md: 14 },
                right: { xs: 10, md: 14 },
                backgroundColor: '#8C62FF',
                borderRadius: '50%',
                p: { xs: '3px', md: '5px' },
                display: 'flex',
                color: '#FFFFFF',
                boxShadow: '0 2px 8px rgba(140, 98, 255, 0.4)'
              }}
            >
              <CheckCircle2 size={isMobile ? 14 : 20} />
            </Box>
          </Box>

          {/* Profile Info */}
          <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: '#1E2342',
                mb: 0.5,
                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.2rem' },
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              {formData.name || UserData?.user?.name || 'User'}
            </Typography>

            <Box
              sx={{
                borderTop: '3px solid #6C5CE7',
                width: { xs: '60px', sm: '50px' },
                mb: { xs: 1.5, md: 2 },
                borderRadius: 2,
                mx: { xs: 'auto', sm: 0 }
              }}
            />

            <Grid container spacing={{ xs: 1.5, sm: 2 }}>
              <Grid size={{ xs: 12, sm: 6, md: 5 }} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{
                  p: { xs: 0.8, md: 1 },
                  borderRadius: 2,
                  bgcolor: '#EEF2FF',
                  color: '#4F46E5',
                  display: 'flex',
                  flexShrink: 0
                }}>
                  <Mail size={isMobile ? 16 : 18} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="caption" sx={{ color: '#71717A', display: 'block', fontSize: '0.7rem', letterSpacing: '0.5px' }}>
                    EMAIL
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E2342', wordBreak: 'break-all' }}>
                    {formData.email || UserData?.user?.email || ''}
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{
                  p: { xs: 0.8, md: 1 },
                  borderRadius: 2,
                  bgcolor: '#DCFCE7',
                  color: '#16A34A',
                  display: 'flex',
                  flexShrink: 0
                }}>
                  <Phone size={isMobile ? 16 : 18} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#71717A', display: 'block', fontSize: '0.7rem', letterSpacing: '0.5px' }}>
                    PHONE
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E2342' }}>
                    {formData.phone || UserData?.phoneNumber || ''}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </motion.div>

      {/* Personal Details Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3 },
            borderRadius: { xs: 3, md: 4 },
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 10px 30px rgba(112, 128, 176, 0.08)'
          }}
        >
          {/* Header / Actions */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 2, sm: 0 },
            mb: { xs: 2.5, sm: 3 }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ p: 1, borderRadius: 2, bgcolor: '#F3E8FF', color: '#9333EA', display: 'flex' }}>
                <User size={20} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#1E2342', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                Personal Details
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, width: { xs: '100%', sm: 'auto' } }}>
              <AnimatePresence mode="wait">
                {!isEditing ? (
                  <motion.div
                    key="edit"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{ width: isMobile ? '100%' : 'auto' }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<Edit2 size={16} />}
                      onClick={handleEdit}
                      fullWidth={isMobile}
                      sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        borderColor: '#8C62FF',
                        color: '#8C62FF',
                        fontWeight: 600,
                        '&:hover': { borderColor: '#733BFF', bgcolor: '#F5F2FF' },
                        px: { xs: 2, sm: 3 }
                      }}
                    >
                      Edit Profile
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="actions"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex',
                      gap: '8px',
                      width: isMobile ? '100%' : 'auto'
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<X size={16} />}
                      onClick={handleCancel}
                      sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 600,
                        flex: isMobile ? 1 : 'none'
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<Save size={16} />}
                      onClick={handleSubmit}
                      disabled={loading}
                      sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        bgcolor: '#8C62FF',
                        fontWeight: 600,
                        '&:hover': { bgcolor: '#733BFF' },
                        flex: isMobile ? 1 : 'none'
                      }}
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
              <IconButton size="small" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                <MoreHorizontal size={20} color="#94A3B8" />
              </IconButton>
            </Box>
          </Box>


          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={{ xs: 2, sm: 2.5 }}>
              {/* Full Name - Disabled */}
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div variants={itemVariants}>
                  <DetailBox
                    icon={<User size={18} />}
                    iconBg="#F3E8FF"
                    iconColor="#9333EA"
                    label="Full Name"
                  >
                    <Typography variant="body1" sx={{ fontWeight: 700, color: '#1E2342', fontSize: { xs: '0.95rem', md: '1rem' } }}>
                      {formData.name || UserData?.user?.name || 'User'}
                    </Typography>
                  </DetailBox>
                </motion.div>
              </Grid>


              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div variants={itemVariants}>
                  <DetailBox
                    icon={<Mail size={18} />}
                    iconBg="#EEF2FF"
                    iconColor="#4F46E5"
                    label="Email Address"
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E2342', wordBreak: 'break-all' }}>
                      {formData.email || UserData?.user?.email || ''}
                    </Typography>
                  </DetailBox>
                </motion.div>
              </Grid>


              <Grid size={{ xs: 12 }}>
                <motion.div variants={itemVariants}>
                  <DetailBox
                    icon={<MapPin size={18} />}
                    iconBg="#FEF9C3"
                    iconColor="#CA8A04"
                    label="Address"
                  >
                    {isEditing ? (
                      <TextField
                        fullWidth
                        multiline
                        rows={2}
                        size="small"
                        name="address"
                        value={tempData.address || ''}
                        onChange={handleChange}
                        variant="standard"
                        sx={{
                          '& .MuiInputBase-root': { fontSize: '0.95rem' },
                          '& .MuiInputBase-input': { py: 1 }
                        }}
                      />
                    ) : (
                      <Typography sx={{ fontWeight: 500, color: '#1E2342', whiteSpace: 'pre-line', fontSize: "13px" }}>
                        {formData.address || UserData?.address || 'Not provided'}
                      </Typography>
                    )}
                  </DetailBox>
                </motion.div>
              </Grid>


              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div variants={itemVariants}>
                  <DetailBox
                    icon={<Building2 size={18} />}
                    iconBg="#E0F2FE"
                    iconColor="#0284C7"
                    label="City"
                  >
                    {isEditing ? (
                      <TextField
                        fullWidth
                        size="small"
                        name="city"
                        value={tempData.city || ''}
                        onChange={handleChange}
                        variant="standard"
                        sx={{ '& .MuiInputBase-root': { fontSize: '0.95rem' } }}
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: 700, color: '#1E2342' }}>
                        {formData.city || UserData?.city || 'Not provided'}
                      </Typography>
                    )}
                  </DetailBox>
                </motion.div>
              </Grid>


              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div variants={itemVariants}>
                  <DetailBox
                    icon={<Landmark size={18} />}
                    iconBg="#F3E8FF"
                    iconColor="#9333EA"
                    label="State"
                  >
                    {isEditing ? (
                      <TextField
                        fullWidth
                        size="small"
                        name="state"
                        value={tempData.state || ''}
                        onChange={handleChange}
                        variant="standard"
                        sx={{ '& .MuiInputBase-root': { fontSize: '0.95rem' } }}
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: 700, color: '#1E2342' }}>
                        {formData.state || UserData?.state || 'Not provided'}
                      </Typography>
                    )}
                  </DetailBox>
                </motion.div>
              </Grid>


              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div variants={itemVariants}>
                  <DetailBox
                    icon={<Navigation size={18} />}
                    iconBg="#D1FAE5"
                    iconColor="#059669"
                    label="Pincode"
                  >
                    {isEditing ? (
                      <TextField
                        fullWidth
                        size="small"
                        name="pincode"
                        value={tempData.pincode || ''}
                        onChange={handleChange}
                        variant="standard"
                        sx={{ '& .MuiInputBase-root': { fontSize: '0.95rem' } }}
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: 700, color: '#1E2342' }}>
                        {formData.pincode || UserData?.pincode || 'Not provided'}
                      </Typography>
                    )}
                  </DetailBox>
                </motion.div>
              </Grid>


              <Grid size={{ xs: 12, sm: 6 }}>
                <motion.div variants={itemVariants}>
                  <DetailBox
                    icon={<Phone size={18} />}
                    iconBg="#DCFCE7"
                    iconColor="#16A34A"
                    label="Phone Number"
                  >
                    {isEditing ? (
                      <TextField
                        fullWidth
                        size="small"
                        name="phone"
                        value={tempData.phone || ''}
                        onChange={handleChange}
                        variant="standard"
                        sx={{ '& .MuiInputBase-root': { fontSize: '0.95rem' } }}
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: 700, color: '#1E2342' }}>
                        {formData.phone || UserData?.phoneNumber || 'Not provided'}
                      </Typography>
                    )}
                  </DetailBox>
                </motion.div>
              </Grid>


              <Grid size={{ xs: 12, sm: 6 }}>
                <motion.div variants={itemVariants}>
                  <DetailBox
                    icon={<User size={18} />}
                    iconBg="#FFE4E6"
                    iconColor="#E11D48"
                    label="Gender"
                  >
                    {isEditing ? (
                      <FormControl fullWidth variant="standard">
                        <Select
                          name="gender"
                          value={tempData.gender || 'MALE'}
                          onChange={handleChange}
                          disableUnderline
                          sx={{
                            fontWeight: 700,
                            color: '#1E2342',
                            fontSize: '0.95rem',
                            '& .MuiSelect-select': { py: 1 }
                          }}
                        >
                          <MenuItem value="MALE">Male</MenuItem>
                          <MenuItem value="FEMALE">Female</MenuItem>
                          <MenuItem value="OTHER">Other</MenuItem>
                        </Select>
                      </FormControl>
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: 700, color: '#1E2342' }}>
                        {formData.gender ? formData.gender.charAt(0) + formData.gender.slice(1).toLowerCase() : UserData?.gender ? UserData.gender.charAt(0) + UserData.gender.slice(1).toLowerCase() : 'Not provided'}
                      </Typography>
                    )}
                  </DetailBox>
                </motion.div>
              </Grid>

              {/* Timestamps Section */}
              <Grid size={{ xs: 12 }}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      mt: 1,
                      p: { xs: 1.5, sm: 2.5 },
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #F8FAFF 0%, #F5F3FF 100%)',
                      border: '1px solid #EEF2FF',
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      justifyContent: 'space-between',
                      gap: { xs: 2, sm: 2 }
                    }}
                  >
                    <Box sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      gap: { xs: 2, sm: 4 },
                      width: '100%'
                    }}>
                      {/* Created At */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{
                          p: 1,
                          borderRadius: 2,
                          bgcolor: '#DBEAFE',
                          color: '#2563EB',
                          display: 'flex',
                          flexShrink: 0
                        }}>
                          <Calendar size={18} />
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.7rem', letterSpacing: '0.5px' }}>
                            CREATED AT
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E2342' }}>
                            {formData.createdAt || (UserData?.createdAt ? new Date(UserData.createdAt).toLocaleString('en-US', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: true
                            }) : 'Not available')}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Updated At */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{
                          p: 1,
                          borderRadius: 2,
                          bgcolor: '#F3E8FF',
                          color: '#9333EA',
                          display: 'flex',
                          flexShrink: 0
                        }}>
                          <Clock size={18} />
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.7rem', letterSpacing: '0.5px' }}>
                            UPDATED AT
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E2342' }}>
                            {formData.updatedAt || (UserData?.updatedAt ? new Date(UserData.updatedAt).toLocaleString('en-US', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: true
                            }) : 'Not available')}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* Decorative Badge */}
                    <Box sx={{
                      display: { xs: 'none', lg: 'flex' },
                      opacity: 0.8,
                      alignSelf: 'center',
                      flexShrink: 0
                    }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                        }}
                      >
                        <CheckCircle2 size={22} />
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Card>
      </motion.div>

      {/* Success Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Box
          sx={{
            mt: { xs: 2, md: 2.5 },
            py: { xs: 1.5, sm: 2 },
            px: { xs: 2, sm: 3 },
            borderRadius: 3,
            bgcolor: '#ECFDF5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1.5,
            border: '1px solid #A7F3D0',
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <CheckCircle2 size={20} color="#059669" />
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#047857' }}>
            Profile verified and up to date. All information is securely stored.
          </Typography>
        </Box>
      </motion.div>
    </>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F3F4F9',
        p: { xs: 1.5, sm: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 2, md: 2.5 }
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1100px' }}>
        {!hasData ? renderNoData() : renderWithData()}
      </Box>
    </Box>
  );
}

// Reusable Detail Box Component
function DetailBox({ icon, iconBg, iconColor, label, children }) {
  return (
    <Box
      sx={{
        p: { xs: 1.5, sm: 2 },
        borderRadius: 3,
        border: '1px solid #F1F5F9',
        bgcolor: '#FAFAFC',
        display: 'flex',
        alignItems: 'flex-start',
        gap: { xs: 1.5, sm: 2 },
        height: '100%',
        minHeight: { xs: '70px', sm: '80px' },
        transition: 'all 0.25s ease',
        '&:hover': {
          borderColor: '#E2E8F0',
          bgcolor: '#FFFFFF',
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          transform: 'translateY(-1px)'
        }
      }}
    >
      <Box
        sx={{
          p: { xs: 1, sm: 1.2 },
          borderRadius: 2,
          bgcolor: iconBg,
          color: iconColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          mt: 0.5
        }}
      >
        {icon}
      </Box>
      <Box sx={{ width: '100%', minWidth: 0 }}>
        <Typography
          variant="caption"
          sx={{
            color: '#64748B',
            display: 'block',
            mb: 0.5,
            fontSize: '0.7rem',
            letterSpacing: '0.5px',
            fontWeight: 600
          }}
        >
          {label}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}