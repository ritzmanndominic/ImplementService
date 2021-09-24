import axios from "axios";
import { TypeProduct } from "../Types/TypeProduct";

class ProductService {
  private client = axios.create({
    baseURL: "http://localhost:3004/posts",
  });

  getAllProducts() {
    return this.client.get<TypeProduct[]>("");
  }

  getSingleProducts(url:string){
    return this.client.get<TypeProduct[]>(url)
  }
}

export default ProductService;
