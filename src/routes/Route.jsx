import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
import Laptops from '../components/Categories/Laptops/Laptops';
import Phones from '../components/Categories/Phones/Phones';
import Accessories from '../components/Categories/Accessories/Accessories';
import Watches from '../components/Categories/Watches/Watches';
import MacBook from '../components/Categories/MacBook/MacBook';
import Iphone from '../components/Categories/Iphone/Iphone';
import ProductDetails from '../components/Categories/ProductDetails/ProductDetails';

const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/gadgets.json'),
            },
            {
                path: "/product/:product_id",
                element: <ProductDetails />,
                loader: () => fetch('/gadgets.json')
            },
            {
                path: "/statistics",
                element: <Statistics />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
        ]
    },
]);

export default router;  // Export the router itself
