import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import ProductCard from "./Card";
import { TypeProduct } from "./Types/TypeProduct";
import { SearchContext } from "./Context/SearchContext";
import ProductService from "./Services/ProductService";

function ProductPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [productList, setProducts] = useState<TypeProduct[]>([]);
  const { search, searchProduct } = useContext(SearchContext);

  const productService = new ProductService();
  useEffect(() => {
    productService
    .getAllProducts()
    .then((response) => response.data)
    .then((post) => setProducts(post));
  }, []);
  

  return (
    <>
      <Container>
        <Row>
          <Form className="d-flex">
            <FormControl
              type="search"
              onChange={(event) => {
                searchProduct(event.target.value);
              }}
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />{" "}
          </Form>
          {productList
            // eslint-disable-next-line array-callback-return
            .filter((val) => {
              if (search === "") {
                return true;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return true;
              }
              return false;
            })
            .map((post: TypeProduct) => {
              return (
                <>
                  <Col md={3}>
                    <div className="border">
                      <ProductCard
                        imgSrc={post.imgSrc}
                        name={post.name}
                        price={post.price}
                        id={post.id}
                        description={""}
                        //description={post.description}
                      />
                    </div>
                  </Col>
                </>
              );
            })}
        </Row>
      </Container>
    </>
  );
}
export default ProductPage;
