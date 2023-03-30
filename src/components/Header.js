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
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    {!!keycloak.authenticated && (
                                        <a className="nav-link" href="/customers">Customers</a>
                                    )}
                                </li>
                                <div className="nav-item">
                                    {!keycloak.authenticated && (<button className="btn btn-outline-danger"   onClick={() => keycloak.login()}>Login</button>)}
                                    {!!keycloak.authenticated && ( <button className="btn btn-outline-danger"   onClick={() => keycloak.logout()}>Logout</button>)}
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