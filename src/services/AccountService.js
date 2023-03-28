import axios from 'axios';
const accountUrl = 'http://localhost:8080/api/accounts';

class AccountService{
    addAccount(newAccount){
        return axios.post(accountUrl,newAccount)
    }

    getOneAccount(id){
        return axios.get(accountUrl + '/' + id)
    }

     handleTransaction(id,balance,amount,toDo){
        const newBalance=toDo==="deposit"?(balance+amount):(balance-amount)
        return axios.put(accountUrl + '/' + id,{balance:newBalance})
    }

    updateAccount(id,account){
        return axios.put(id,account);
    }

}
export default new AccountService();