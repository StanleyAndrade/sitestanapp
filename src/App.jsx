import './style/App.css';
import './style/responsive.css';
import './style/fonts.css';
import './style/index.css';
import './main/popup.js';
import './style/priceTable.css';
import './style/checkout.css';
import './style/popup.css'
import './style/pag.css'
import { Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Home from './pages/Home.js';
import Linkcheckout from './main/checkoutecommerce';
import Popup from './main/popup.js';
import Pagaprovado from './pages/pagaprovado';
import Pagaprocessamento from './pages/pagprocessamento';
import CheckoutEcommerce from './main/checkoutecommerce';
import CheckoutSite from './main/checkoutsite';
import CheckoutPage from './main/checkoutpage';


function App() {
  return(
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="linkcheckout" element={<Linkcheckout />} />
        <Route path="popup" element={<Popup />} />
        <Route path="pagaprovado" element={<Pagaprovado />} />
        <Route path="pagprocessamento" element={<Pagaprocessamento />} />
        <Route path="checkoutecommerce" element={<CheckoutEcommerce />} />
        <Route path="checkoutsite" element={<CheckoutSite />} />
        <Route path="checkoutpage" element={<CheckoutPage />} />
        {/* Criar <Route path="*" element={<ErrorPage />} />*/}
        </Routes>
      </div>
  )
}

export default App;

