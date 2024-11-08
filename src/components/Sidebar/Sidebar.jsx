import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const categories = [
        { name: "All Products", route: "/" },
        { name: "Laptops", route: "/category/laptops" },
        { name: "Phones", route: "/category/phones" },
        { name: "Accessories", route: "/category/accessories" },
        { name: "Smart Watches", route: "/category/watches" },
        { name: "MacBook", route: "/category/macbook" },
        { name: "Iphone", route: "/category/iphone" },
    ]

    return (
        <ul className='space-y-4'>
            {
                categories.map((category, idx) => (
                    <li key={idx}>
                        <NavLink
                            to={category.route}
                            className={({ isActive }) => {
                                isActive ? "bg-purple-500 text-white rounded-full px-4 py-2 block text-center"
                                    : "bg-gray-100 text-gray-600 rounded-full px-4 py-2 block text-center hover:bg-gray-200"
                            }}
                        >
                            {category.name}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
};

export default Sidebar;