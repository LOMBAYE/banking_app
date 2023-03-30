import Header from "./components/Header";
import Customers from "./components/Customers";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Details from "./Views/Details";
import AddCustomer from "./components/AddCustomer";
import NewAccount from "./components/NewAccount";
import Shared from "./components/Shared";
import BankAccount from "./components/BankAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import HomePage from "./Views/HomePage";
import PrivateRoute from "./helpers/PrivateRoute";
function App() {
    return (
        <div className="container-fluid" id="main">
                <Header/>
                <Shared />
                <Routes>
                    <Route path="/mybank" element={<PrivateRoute><BankAccount/></PrivateRoute>}></Route>
                    <Route exact path="/"  element={ <HomePage/>}></Route>
                    <Route path="/customers" element={<PrivateRoute> <Customers/></PrivateRoute>}></Route>
                    <Route path="/addCustomer" element={<PrivateRoute><AddCustomer/></PrivateRoute>}></Route>
                    <Route path="details/:id" element={<PrivateRoute> <Details/></PrivateRoute>}></Route>
                    <Route path="/newAccount/:customerId" element={<PrivateRoute><NewAccount/></PrivateRoute>}></Route>
                    <Route path="/deposit/:accountId" element={<PrivateRoute><Deposit/></PrivateRoute>}></Route>
                    <Route path="/withdraw/:accountId" element={<PrivateRoute><Withdraw /></PrivateRoute>}></Route>
                </Routes>
        </div>
    );
}

export default App;