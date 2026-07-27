import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/mainLayout";
import Homepage from "../pages/HomepagePages/homepage";
import ProductDetailsPage from "../pages/PoductDetailPages/productDetailsPage";
import Login from "../auth/authpages/loginPage";
import CheckoutPage from "../pages/otherPages/checkout";
import WishlistComponent from "../pages/otherPages/wishlistPage";
import CategoriesProductPage from "../pages/otherPages/categorieProduct";

import ProtectedRoute from "./protected.routes";
import PublicRoute from "./public.routes";

export const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "productDetail/:slug",
        element: <ProductDetailsPage />,
      },
      {
        path: "categorie/:slug",
        element: <CategoriesProductPage />,
      },
    ],
  },

  // Protected Routes
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistComponent />,
      },
    ],
  },

  // Auth Routes
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
]);