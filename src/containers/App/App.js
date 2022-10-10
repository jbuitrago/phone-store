/*libraries*/
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../../components/Header";
/*custom config*/

/*routes*/
import ROUTES from "../../utils/routes";
import Home from "../Home";
import NotFound from "../NotFound";
import ProductDetail from "../Products/productDetail";

//import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path={ROUTES.HOME} element={ <Home/> } />
          <Route path={`${ROUTES.PRODUCT_DETAIL}/:id`} element={<ProductDetail />} />
          <Route path={'*'} element={ <NotFound/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;