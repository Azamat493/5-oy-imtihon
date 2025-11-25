import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Technology from "./pages/Technology.jsx";
import Products from "./pages/Products";
import Best from "./pages/Best";
import CategoryPage from "./pages/category/CategoryPage.jsx";
import ProductDetail from "./pages/category/ProductDetail.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/:category" element={<CategoryPage />} />
        <Route path="/technology/:category/:id" element={<ProductDetail />} />
        <Route path="/best" element={<Best />} />
        <Route path="/best/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
