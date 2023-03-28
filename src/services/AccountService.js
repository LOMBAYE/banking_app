import axios from 'axios';
const accountUrl = 'http://localhost:8083/api/accounts';

class AccountService{
    addAccount(customerId,newAccount){
        return axios.post(accountUrl + '/'+ customerId,newAccount)
    }

    getOneAccount(id){
        return axios.get(accountUrl + '/' + id)
    }
    getAllAccounts(){
        return axios.get(accountUrl);
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