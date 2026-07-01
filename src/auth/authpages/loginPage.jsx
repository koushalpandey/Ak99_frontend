import { GoogleLogin } from '@react-oauth/google';
import { googleLoginApi } from "../../api/endpoint/api.endpoint";
import { Container, Box, Typography, Paper, useMediaQuery, ThemeProvider, createTheme, CardMedia, Card } from '@mui/material';
import { Notify, Loading } from 'notiflix';
import { useNavigate } from 'react-router-dom';
import Aklogo from "../../assets/ak99-logo.png"
import banner from "../../assets/login_banner.png"


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function Login() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));


  const handleSuccess = async (credentialResponse) => {
    Loading.pulse('Logging in...');
    try {
      const token = credentialResponse.credential;
      const res = await googleLoginApi({ token });
      localStorage.setItem("token", res.data.token);
      Loading.remove();
      Notify.success('Login successful!');
      navigate('/');
    } catch (error) {
      Loading.remove();
      Notify.failure(error.response?.data?.message || 'Login failed. Please try again.');
      console.error("Login API failed", error);
    }
  };

  const handleError = () => {
    Notify.failure('Google Login Failed. Please try again.');
    console.error('Google Login Failed');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ height: '100vh'}}>
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',

            }}
          >
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Box sx={{ mb: 6, textAlign: 'center' }}>
                <img
                  src={Aklogo}
                  alt="Company Logo"
                  style={{ height: 120, marginBottom: 16 }}
                />
                <Typography variant="h4" component="h1" fontWeight="600" color="#1a1a1a">
                  Welcome back!
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  Sign in to continue to your dashboard
                </Typography>
              </Box>

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  border: '1px solid #e0e0e0',
                  background: "#FED7AA",
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <GoogleLogin
                  onSuccess={handleSuccess}
                  onError={handleError}
                  theme="outline"
                  size="large"
                  shape="pill"
                  width="100%"
                  text="signin_with"
                  locale="en"
                />
              </Paper>
            </Box>
          </Box>

          {!isMobile && (
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                width: '100%',
                height: '90vh',

              }}
            >
              <Card
                sx={{
                  width: 500,
                  height: 600,
                  borderRadius: 4,
                  boxShadow: 3,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={banner}
                  alt="Login visual"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;