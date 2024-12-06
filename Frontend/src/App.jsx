import './App.css'
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Men from './Pages/Mens'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Header from './Component/Header/Header.jsx'
import Navbar from './Component/Navbar/Navbar.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Cart from './Pages/CartItems.jsx'
import SearchResults from './Pages/SearchResults'
import mens_banner from './assets/men-hero.png'
import women_banner from './assets/women-hero.png'
import kids_banner from './assets/kids-hero.png'
import hero from './assets/family-hero.png'
import { ContextProvider } from './Context/ContextProvider.jsx'
import OrderPlaced from './Pages/OrderPlaced.jsx'
import MyAccount from './Component/MyAccount/MyAccount.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <div className="app-layout">
            <Header />
            <Navbar />
            <div className="app-content">
              <Routes>
                <Route path="/" element={<Home banner={hero} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/men" element={<Men banner={mens_banner} />} />
                <Route path="/women" element={<Women banner={women_banner} />} />
                <Route path="/kids" element={<Kids banner={kids_banner} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/order" element={<OrderPlaced />} />
                <Route path="/myAcc" element={<MyAccount />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
