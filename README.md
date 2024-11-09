# 🌐 GadgetHeaven ✨

Your go-to destination for the latest and greatest gadgets!

Welcome to **GadgetHeaven**, a responsive e-commerce platform where users can explore and purchase the latest gadgets effortlessly. The project was built following a detailed Figma design to provide a seamless user experience.

## 🚀 Live Website Link
Check out the live version of the project here: [GadgetHeaven Live](https://gadget-heaven2.netlify.app/)

## 📄 Requirement Document Link
Access the complete project requirement document here: [Project Requirements](/requirment-document.pdf)

## 🛠️ React Fundamentals Used in the Project
This project incorporates several essential React concepts to build a fully functional e-commerce platform. Below are the key concepts used:

1. **React Components** - Reusable components for Navbar, Footer, Product Cards, etc.
2. **React Router (v6)** - Used for navigation, route protection, and dynamic routing.
3. **useState & useEffect Hooks** - For managing state and side effects.
4. **useContext & Context API** - For handling global state (cart and wishlist management).
5. **useNavigate & useLocation Hooks** - For conditional navigation and dynamic styling.
6. **Local Storage** - Data persistence for the cart and wishlist.
7. **React Toastify** - To display notifications when adding items to the cart or wishlist.
8. **Conditional Rendering & Form Handling** - For button disabling, modals, etc.

## 🗃️ Data Handling & Management
I have used the **LocalStorage** to manage the cart and wishlist data efficiently. This ensures that user data persists even after a page refresh.

## 🌟 Key Features of GadgetHeaven

1. **Dynamic & Responsive Design**:
   - The platform is fully responsive and optimized for both desktop and mobile devices.
   - Built according to a Figma design with pixel-perfect alignment.

2. **Shopping Cart & Wishlist**:
   - Users can add gadgets to their cart and wishlist from the product details page.
   - The cart and wishlist are managed using the Context API and persisted with LocalStorage.
   - Notifications appear when items are added to the cart or wishlist.

3. **Filtering & Sorting Functionality**:
   - Filter gadgets based on categories (computers, phones, smartwatches, chargers, power banks).
   - Sort cart items by price (high to low) on the dashboard page.

4. **Detailed Product Pages**:
   - Each product has a dedicated details page displaying its image, specifications, price, rating, and availability.
   - Users can add items to the cart or wishlist directly from the details page.

5. **Additional User Experience Enhancements**:
   - A “Purchase” button displays a congratulatory modal with navigation after completing a purchase.
   - Dynamic background color changes on different pages using the `useLocation()` hook.
   - 404 error page and consistent Navbar and Footer across all pages.
   - Dynamic page titles and a custom favicon for branding.

## 🛒 Usage Instructions

1. **Home Page**:
   - Browse featured gadgets and select categories from the sidebar.
   - View product details by clicking the “Details” button.

2. **Dashboard Page**:
   - Manage your cart and wishlist with tabs.
   - Sort cart items by price and see the total cost.

3. **Product Details Page**:
   - Add gadgets to your cart or wishlist and receive a notification.
   - Purchase items directly from your cart with a congratulatory modal.

4. **Extra Pages (About Us)**:
   - Explore About Us for additional content through the extra route added.