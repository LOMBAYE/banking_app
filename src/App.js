import Header from "./components/Header";
import Customers from "./components/Customers";
import {
    BrowserRouter,
    Route, Routes
} from "react-router-dom";
import Details from "./Views/Details";
import Account from "./components/Account";
import BankApp from "./components/BankApp";
import AddCustomer from "./components/AddCustomer";
import NewAccount from "./components/NewAccount";
import Shared from "./components/Shared";
import BankAccount from "./components/BankAccount";
function App() {
    return (
        <div className="container-fluid" id="main">
            <Header/>
            <BrowserRouter>
            <Routes>
                <Route path="/mybank" element={<BankAccount/>}></Route>
                <Route path="/shared" element={<Shared/>}></Route>
                <Route path="/"  element={ <Customers/>}></Route>
                <Route path="/account" element={<Account/>}></Route>
                <Route path="/bankApp" element={<BankApp/>}></Route>
                <Route path="/customers" element={ <Customers/>}></Route>
                <Route path="/addCustomer" element={<AddCustomer/>}></Route>
                <Route path="details/:id" element={ <Details/>}></Route>
                <Route path="/newAccount" element={<NewAccount/>}></Route>
            </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;