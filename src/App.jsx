import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from './context/CartContext'

export default function App(){
    return (
        <>
        <CartProvider>
        <Navbar />
        <main className='min-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
        </>
    );
}