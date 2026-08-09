import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { Notify } from "notiflix";

import {
    createOrderApi,
    verifyPaymentApi,
} from "../../api/endpoint/api.endpoint.js";

const RazorpayPaymentButton = ({
    productId,
    address,
    user,
    onSuccess,
}) => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        try {
            if (!productId) {
                Notify.failure("Product ID is missing");
                return;
            }

            if (!address) {
                Notify.failure("Please add your address");
                return;
            }

            setLoading(true);
            const payload = {
                productId,
                address,
            };

            console.log("Create Order Payload:", payload);

            const response = await createOrderApi(payload);

            console.log("Create Order Response:", response);

            if (!response?.success) {
                Notify.failure(
                    response?.message ||
                    "Unable to create order"
                );
                return;
            }

            const data = response.data;

            const razorpayOrder = data?.razorpayOrder;
            const keyId = data?.key_id;
            const order = data?.order;

            if (!razorpayOrder || !keyId) {
                Notify.failure(
                    "Invalid payment information received"
                );
                return;
            }



            const options = {
                key: keyId,

                amount: razorpayOrder.amount,

                currency: razorpayOrder.currency,

                name: "ak99",

                description: `Payment for ${order?.orderNumber || "Order"
                    }`,

                order_id: razorpayOrder.id,

                prefill: {
                    name: user?.name || "",
                    email: user?.email || "",
                    contact: address?.phoneNumber || "",
                },

                notes: {
                    orderId: order?.id?.toString(),
                    productId: productId?.toString(),
                },

                theme: {
                    color: "#7C3AED",
                },



                handler: async (paymentResponse) => {
                    console.log(
                        "Razorpay Payment Response:",
                        paymentResponse
                    );

                    try {
                        const verifyPayload = {
                            razorpay_order_id:
                                paymentResponse.razorpay_order_id,

                            razorpay_payment_id:
                                paymentResponse.razorpay_payment_id,

                            razorpay_signature:
                                paymentResponse.razorpay_signature,

                            orderId: order.id,
                        };

                        console.log(
                            "Verify Payment Payload:",
                            verifyPayload
                        );

                        const verifyResponse =
                            await verifyPaymentApi(
                                verifyPayload
                            );

                        console.log(
                            "Verify Payment Response:",
                            verifyResponse
                        );

                        if (verifyResponse?.success) {
                            Notify.success("Payment successful!");
                            if (onSuccess) {
                                onSuccess({
                                    order,
                                    payment: paymentResponse,
                                    verification:
                                        verifyResponse,
                                });
                            }
                        } else {
                            Notify.failure(
                                verifyResponse?.message ||
                                "Payment verification failed"
                            );
                        }
                    } catch (error) {
                        console.error(
                            "Payment verification error:",
                            error
                        );

                        Notify.failure(
                            error?.message ||
                            "Payment verification failed"
                        );
                    }
                },



                modal: {
                    ondismiss: () => {
                        console.log(
                            "Razorpay checkout closed"
                        );
                    },
                },
            };



            if (!window.Razorpay) {
                Notify.failure(
                    "Razorpay Checkout is not loaded"
                );
                return;
            }

            const razorpay = new window.Razorpay(options);



            razorpay.on(
                "payment.failed",
                (response) => {
                    console.error(
                        "Razorpay Payment Failed:",
                        response.error
                    );

                    Notify.error(
                        response.error?.description ||
                        "Payment failed"
                    );
                }
            );

            razorpay.open();
        } catch (error) {
            console.error(
                "Create Payment Error:",
                error
            );

            Notify.failure(
                error?.message ||
                "Unable to start payment"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            variant="contained"
            fullWidth
            disabled={loading}
            onClick={handlePayment}
            endIcon={<ChevronRight size={18} />}
            sx={{
                bgcolor: "#7C3AED",
                color: "#FFFFFF",
                textTransform: "none",
                borderRadius: 3,

                background:
                    "linear-gradient(90deg, #6D28D9 0%, #7C3AED 100%)",

                boxShadow:
                    "0px 4px 12px rgba(124, 58, 237, 0.25)",

                "&:hover": {
                    background:
                        "linear-gradient(90deg, #5B21B6 0%, #6D28D9 100%)",
                },

                "&.Mui-disabled": {
                    color: "#FFFFFF",
                    opacity: 0.7,
                },
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontWeight: 800,
                    }}
                >
                    {loading
                        ? "Processing..."
                        : "Buy Now"}
                </Typography>

                {!loading && (
                    <Typography
                        variant="caption"
                        sx={{
                            opacity: 0.8,
                            fontSize: 10,
                        }}
                    >
                        Secure Checkout
                    </Typography>
                )}
            </Box>
        </Button>
    );
};

export default RazorpayPaymentButton;