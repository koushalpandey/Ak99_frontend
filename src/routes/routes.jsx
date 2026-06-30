import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Homepage from "../pages/HomepagePages/homepage";
import ProductDetailsPage from "../pages/PoductDetailPages/productDetailsPage"
import Login from "../auth/authpages/loginPage";
import CheckoutPage from "../pages/checkoutPages/checkout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path:"/login",
                element: <Login />,
            },
            {
                path:"/productDetail/:slug",
                element: <ProductDetailsPage />,
            },
            {
                path:"/checkout",
                element: <CheckoutPage />,
            },

        ],
    },
]);