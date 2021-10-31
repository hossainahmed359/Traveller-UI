import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewService from './components/AddNewService/AddNewService';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/"><Home></Home></Route>
            <Route path="/home"><Home></Home></Route>
            <Route path="/login"><Login></Login></Route>
            <PrivateRoute path="/placeOrder/:id"><PlaceOrder></PlaceOrder></PrivateRoute>
            <PrivateRoute path="/myOrders"><MyOrders></MyOrders></PrivateRoute>
            <PrivateRoute path="/manageAllOrders"><ManageAllOrders></ManageAllOrders></PrivateRoute>
            <PrivateRoute path="/addNewService"><AddNewService></AddNewService></PrivateRoute>
            <Route path="*"><NotFound></NotFound></Route>
          </Switch>
        </Router>
        {/* <Footer></Footer> */}
      </AuthProvider>
    </div>
  );
}

export default App;
