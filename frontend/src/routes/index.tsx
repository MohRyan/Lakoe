import Login from "@/components/login";
import Register from "@/components/register";
import AuthLayout from "@/layout/AuthLayout";
import BuyerLayout from "@/layout/BuyerLayout";
import SellerLayout from "@/layout/SellerLayout";
import BillingDetails from "@/pages/buyer/billing";
import CartDetails from "@/pages/buyer/cart";
import Dashboard from "@/pages/buyer/dashboard";
import ProductDetails from "@/pages/buyer/product";
import HomeSeller from "@/pages/seller/home";
import Order from "@/pages/seller/order";
import DetailOrder from "@/pages/seller/order/detailOrder";
import Product from "@/pages/seller/product";
import AddProduct from "@/pages/seller/product/addProduct";
// import Profile from "@/pages/seller/profile";
import Delivery from "@/pages/seller/setting/delivery";
import Payment from "@/pages/seller/setting/payment";
import Store from "@/pages/seller/setting/store";
import { RouteObject } from "react-router-dom";

const router: RouteObject[] = [
  {
    path: "/",
    element: <BuyerLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "product",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <CartDetails />,
      },
      {
        path: "billing",
        element: <BillingDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: <SellerLayout />,
    children: [
      // {
      //   path: "profile",
      //   element: <Profile profile={undefined} />,
      // },
      {
        path: "dashboard",
        element: <HomeSeller />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/addproduct",
        element: <AddProduct />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "order/detail",
        element: <DetailOrder />,
      },
      {
        path: "setting",
        children: [
          {
            path: "store",
            element: <Store />,
          },
          {
            path: "delivery",
            element: <Delivery />,
          },
          {
            path: "payment",
            element: <Payment />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default router;
