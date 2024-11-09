import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
import ProductDetails from '../components/Categories/ProductDetails/ProductDetails';
import Cart from '../components/Cart/Cart';
import Wishlist from '../components/Wishlist/Wishlist';
import Gadgets from '../components/Gadgets/Gadgets';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import AboutUs from '../pages/AboutUs';

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/gadgets.json'),
                children: [
                    {
                        path: "/",
                        element: <Gadgets />,
                        loader: () => fetch('/gadgets.json')
                    },
                    {
                        path: "/home/:category",
                        element: <Gadgets />,
                        loader: () => fetch('/gadgets.json')
                    }
                ]
            },
            {
                path: "/product/:product_id",
                element: <ProductDetails />,
                loader: () => fetch('/gadgets.json')
            },
            {
                path: "/statistics",
                element: <Statistics />,
                loader: () => fetch('/gadgets.json')
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Navigate to="/dashboard/cart" replace />
                    },
                    {
                        path: "/dashboard/cart",
                        element: <Cart />,
                        loader: () => fetch('/gadgets.json'),
                    },
                    {
                        path: "/dashboard/wishlist",
                        element: <Wishlist />,
                        loader: () => fetch('/gadgets.json'),
                    },
                ]
            },
            {
                path: "/about-us",
                element: <AboutUs />,
                loader: () => fetch('/teams.json')
            }
        ]
    },
]);

export default router;  // Export the router itself
