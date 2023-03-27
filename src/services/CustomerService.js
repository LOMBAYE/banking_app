import axios from 'axios';
const url = 'http://localhost:3004/customers';

class CustomerService{

    getAllCustomers(){
        return axios.get(url)
    }

    addACustomer(newCustomer){
        return axios.post(url,newCustomer);
    }


    getACustomer(id){
      return  axios.get(url + '/' + id);
    }
}

export default  new CustomerService();