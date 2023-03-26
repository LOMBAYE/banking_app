import React from "react";
import {Link} from "react-router-dom";

function Shared(){
    return(
        <>
            <Link to="/customers">
                <div className="accueil">
                    <h3 className="text-center larger " id="titre">Baobab </h3>
                    <p className="text-center larger " id="titre2">The number one partner</p>
                    <p className="text-center larger " id="titre3">for small businesses</p>
                </div>
            </Link>
        </>
    )
}
export default Shared;