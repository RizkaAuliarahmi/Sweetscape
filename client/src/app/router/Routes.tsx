import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../../features/Home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetail";
import DeliveryInformationPage from "../../features/Information/DeliveryInformationPage";
import App from "../layout/App";
import ServerError from "../../errors/ServerError";
import NotFound from "../../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import RequireAuth from "./RequireAuth";
import Orders from "../../features/orders/OrdersPage";
import Inventory from "../../features/admin/Inventory";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            // member routes
            {element: <RequireAuth />, children: [
                {path: 'checkout', element: <CheckoutPage />},
                {path: 'orders', element: <Orders />},
            ]},
            // admin routes
            {element: <RequireAuth roles={['Admin']} />, children: [
                {path: 'inventory', element: <Inventory />},
            ]},
            {path: '', element: <HomePage/>},
            {path: 'catalog', element: <Catalog/>},
            {path: 'catalog/:id', element: <ProductDetails/>},
            {path: 'delivery-information', element: <DeliveryInformationPage/>},
            {path: 'server-error', element: <ServerError/>},
            {path: 'not-found', element: <NotFound/>},
            {path: 'basket', element: <BasketPage/>},
            {path: 'login', element: <Login/>},
            {path: 'register', element: <Register/>},
            {path: '*', element: <Navigate replace to='/not-found'/>},
        ]
    }
])
