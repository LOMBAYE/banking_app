import React from "react";
import {useParams} from "react-router-dom";

function WithdrawMoney(){
    const {accountId}=useParams()
    console.log(accountId)
}

export default WithdrawMoney;