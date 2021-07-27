import './styles/App.scss';
import Header from './shared/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Products from './views/Products';
import Cart from './views/Cart';
import Home from './views/Home';
import {OrderProvider} from './order/OrderContext';

const App = () => {
  return (
    <OrderProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          <Header></Header>
            <Switch>
                <Route path="/products">
                  <Products />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
            </Switch>
        </div>
      </Router>
    </OrderProvider>
  );
}

export default App;
