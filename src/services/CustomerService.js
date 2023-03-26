import axios from 'axios';
const url = 'http://localhost:3004/customers';
const accountUrl = 'http://localhost:3004/accounts';

class CustomerService{

    getAllCustomers(){
        return axios.get(url)
    }

    addACustomer(newCustomer){
        return axios.post(url,newCustomer);
    }

    addAccount(newAccount){
        return axios.post(accountUrl,newAccount)
    }
}

export default  new CustomerService();