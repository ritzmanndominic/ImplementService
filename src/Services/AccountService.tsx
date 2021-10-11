import axios from "axios";
import { TypeProduct } from "../Types/TypeProduct";
import {Signup} from "../Login"

class ProductService {
  private client = axios.create({
    baseURL: "http://localhost:8080",
  });

  getAllAccount() {
    return this.client.get<TypeProduct[]>("/account");
  }

  getSingleAccount(url:string){
    return this.client.get<TypeProduct>("/account/" + url)
  }

  postAccount(data:Signup){
    const postValues = data;
    return this.client.post("/account", postValues)
  }

}

export default ProductService;
