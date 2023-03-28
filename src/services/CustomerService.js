import axios from 'axios';
const url = 'http://localhost:8083/api/customers';

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
    updateCustomer(customerId,customer){
        return axios.put(url + '/' +customerId,customer)
    }
}

export default  new CustomerService();