import App from "@/App";
import AddProducts from "@/components/AddProduct";
import About from "@/Pages/About";
import Cart from "@/Pages/Cart";
import DetailsPage from "@/Pages/DetailsPage";
import Home from "@/Pages/Home/Home";
import ProductMgt from "@/Pages/ProductMgt";
import Products from "@/Pages/products/Products";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/details",
        element: <DetailsPage></DetailsPage>,
      },
      {
        path: "/productMgt",
        element: <ProductMgt></ProductMgt>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/addProduct",
        element: <AddProducts></AddProducts>,
      },
    ],
  },
]);

export default router;
