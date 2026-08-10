import { useEffect } from 'react';
import {
    Box,
    Grid,
} from '@mui/material';
import useDetailStore from '../../../store/userStore/userDetailStore';
import { useLocation } from "react-router-dom";
import UserInformation from './userInformation';
import ProductSummary from './productsummay';
import PricePriceDetail from './productPrice';

export default function CheckoutPage() {
    const userData = useDetailStore((state) => state?.Data);
    const fetchuserData = useDetailStore((state) => state?.fetchUserDetailData);
    const location = useLocation();
    const product = location.state?.product;

    useEffect(() => {
        fetchuserData();
    }, [fetchuserData]);

    const addressData = {
        address: userData?.address,
        city: userData?.city,
        state: userData?.state,
        pincode: userData?.pincode,
        phoneNumber: userData?.phoneNumber,
    };

    const handleSaveUserData = (formData) => {

        console.log('Saving user data:', formData);
    };

    const handlePaymentSuccess = ({ order, payment }) => {
        console.log("Order:", order);
        console.log("Payment:", payment);
        // Example: navigate(`/order-success/${order.id}`);
    };

    return (
        <Box
            sx={{
                bgcolor: '#F8FAFC',
                minHeight: '100vh',
                p: { xs: 2, md: 2 },
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 7.5 }}>
                        <UserInformation
                            userData={userData}
                            onSave={handleSaveUserData}
                        />
                        <ProductSummary product={product} />
                    </Grid>

                    <Grid size={{ xs: 12, md: 4.5 }}>
                        <PricePriceDetail
                            product={product}
                            addressData={addressData}
                            user={userData?.user}
                            onPaymentSuccess={handlePaymentSuccess}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}