import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { CartProvider } from './components/context/createContext'

// import MegaMenu from './components/megamenu'
// import ProductData from './components/products/pro';
// import Onproduct from './components/onproduct';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>

    <CartProvider>
        <App />
    </CartProvider>


</div>);

