import axios from 'axios';

// const URL = 'http://192.168.0.109:5000'
const URL = 'http://localhost:5000'

//products api
export const addProduct = (product) => axios.post(`${URL}/product/create`, product)
export const fetchProducts = () => axios.get(`${URL}/product/all`)
export const deleteProduct = (productid) => axios.delete(`${URL}/product/delete/${productid}`)
export const updateProduct = (updatedProductInfo) => axios.patch(`${URL}/product/update`, updatedProductInfo)

//customers api
export const fetchCustomers = () => axios.get(`${URL}/customer/all`)
export const fetchCustomerNames = () => axios.get(`${URL}/customer/names`)
export const addCustomer = (customerdetails) => axios.post(`${URL}/customer/create`, customerdetails)
export const updateStock = (products) => axios.post(`${URL}/customer/updatestock`, products)
export const deleteCustomer = (id) => axios.delete(`${URL}/customer/delete/${id}`)
export const updateDeliveryStatus = (details) => axios.patch(`${URL}/customer/updatedeliverystatus`, details)
export const productWiseSearch = (details) => axios.post(`${URL}/customer/productwise`, details)
export const userWiseSearch = (details) => axios.post(`${URL}/customer/userwise`, details)