import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewService from './components/AddNewService/AddNewService';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/placeOrder/:id"><PlaceOrder></PlaceOrder></Route>
          <Route path="/myOrders"><MyOrders></MyOrders></Route>
          <Route path="/manageAllOrders"><ManageAllOrders></ManageAllOrders></Route>
          <Route path="/addNewService"><AddNewService></AddNewService></Route>
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
      </Router>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
