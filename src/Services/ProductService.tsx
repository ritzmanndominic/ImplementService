import axios from "axios";
import { TypeProduct } from "../Types/TypeProduct";
import {postProduct} from "../Formular"

class ProductService {
  private client = axios.create({
    baseURL: "http://localhost:8080",
  });

  getAllProducts() {
    return this.client.get<TypeProduct[]>("/products");
  }

  getSingleProducts(url:string){
    return this.client.get<TypeProduct>("/products/" + url)
  }

  postProducts(data:postProduct){
    const postValues = data;
    return this.client.post("/products", postValues)
  }

}

export default ProductService;
