import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import NotFoundPage from "./pages/NotFoundPage";
import PescaMosca from "./pages/Productos/PescaMosca";
import Sale from "./pages/Productos/Sale";
import Tradicional from "./pages/Productos/Tradicional";
import DetalleProducto from "./pages/DetalleProducto";
import AdminPage from "./pages/AdminPage";
import { CartProvider } from "./context/CartContext";
import { UserProvider, useUser } from "./context/userContext";

const AppRoutes = () => {
  const { token } = useUser();
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={token ? <Navigate to="/" /> : <LoginPage />}
      />

      <Route
        path="/register"
        element={token ? <Navigate to="/" /> : <RegisterPage />}
      />

      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to="/login" />}
      />

      <Route path="/AdminPage" element={<AdminPage />} />
      <Route path="/Producto/:id" element={<DetalleProducto />} />
      <Route path="/Sale" element={<Sale />} />
      <Route path="/PescaMosca" element={<PescaMosca />} />
      <Route path="/Tradicional" element={<Tradicional />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <AppRoutes />
          <Footer />
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
