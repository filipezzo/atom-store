import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FirebaseProvider } from "./context/FirebaseContext";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetailsPage from "./pages/DetailsPage";
import Products from "./pages/Products";
import { CategoryProvider } from "./context/CategoryContext";
import { CartContextProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <FirebaseProvider>
        <CartContextProvider>
          <CategoryProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/produtos/:id" element={<DetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/confirmado" element={<ConfirmationPage />} />
            </Routes>
            <Footer />
          </CategoryProvider>
        </CartContextProvider>
      </FirebaseProvider>
    </BrowserRouter>
  );
}

export default App;
