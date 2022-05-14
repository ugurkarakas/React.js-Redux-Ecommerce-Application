import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
function App() {
  return (
    <div class="main-container">
     <Router>
      <Routes>
       <Route exact path="/" element={<ProductListing />} />
       <Route exact path="/product/:productId" element={<ProductDetail />} />
       <Route>404 Not Found!</Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
