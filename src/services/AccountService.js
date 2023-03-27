import axios from 'axios';
const accountUrl = 'http://localhost:3004/accounts';

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

}
export default new AccountService();