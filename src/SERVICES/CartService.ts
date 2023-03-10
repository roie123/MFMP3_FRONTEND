import {Cart} from "../MODELS/Cart";
import {User} from "../MODELS/User";
import axios from "axios";

const baseURL = "http://localhost:8080/api/cart";
export const updateCart =  async  (cart:Cart, cartId:number):Promise<Cart> => {

        try {
            const response = await axios.put(`${baseURL}/${cartId}`, cart);

            return response.data as  Cart;
        } catch (error) {
            throw error;
        }
    };




