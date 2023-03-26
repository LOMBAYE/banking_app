import React from "react";
import {Link} from "react-router-dom";

function Shared(){
    return(
        <>
            <Link to="/customers">
                <div className="accueil">
                    <h5 className="text-center larger " id="titre">Partner for small businesses </h5>
                </div>
            </Link>
        </>
    )
}
export default Shared;