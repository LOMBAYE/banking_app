import React from "react";
import {Link} from "react-router-dom";

function Shared(){
    return(
        <>
            <Link to="/">
                <div className="accueil">
                    <h5 className="text-center larger text-black " id="text-animation">Partner for small businesses </h5>
                </div>
            </Link>
        </>
    )
}
export default Shared;