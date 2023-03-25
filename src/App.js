import logo from './logo.svg';
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
import Customers from "./components/Customers";
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import Details from "./Views/Details";
function App() {
    return (
        <div>
            <Header/>
            <HelloWorld name="LO"/>
            <Customers />
            <Router>
                <p>
                    <Link to="/details/:id">
                        <Details/>
                   n   </Link>
                </p>
            </Router>
        </div>
    );
}

export default App;