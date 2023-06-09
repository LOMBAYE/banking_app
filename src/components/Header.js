import React from "react";
import Baobab_Logo from '../Baobab_Logo.png';
import { useKeycloak } from "@react-keycloak/web";
function Header(){
    const { keycloak, initialized } = useKeycloak();

    return(
        <>
        <header className="appHeader">
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-4 ">
                <div className="container-fluid">
                    <a href="/">
                        <img id="logo" src={Baobab_Logo} alt="Logo" />
                    </a>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {keycloak.authenticated && (
                                        <a className="nav-link " href="/addCustomer" id="navbarNav">Add a customer</a>
                                    )}
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/" id="navbarNav">Home </a>
                                </li>
                                <li className="nav-item">
                                    {keycloak.authenticated && (
                                        <a className="nav-link " href="/customers" id="navbarNav">Customers</a>
                                    )}
                                </li>
                                <div className="nav-item">
                                    {!keycloak.authenticated && (<button className="btn btn-outline-danger"   onClick={() => keycloak.login()}>Login to app</button>)}
                                    {keycloak.authenticated && ( <button className="btn btn-outline-danger"   onClick={() => keycloak.logout()}>Logout {keycloak.tokenParsed.preferred_username}</button>)}
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </header>

        </>
    )
}
export default Header;