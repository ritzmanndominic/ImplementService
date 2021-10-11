import React, { useEffect, useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import SingleProductWithBackButton from "./CardSingleProductPage";
import { TypeProduct } from "./Types/TypeProduct";
import { TypeProductId } from "./Types/TypeProductId";
import ProductService from "./Services/ProductService";

function SingleProductPage() {
  const { id } = useParams<TypeProductId>();
  const [productList, setProducts] = useState<TypeProduct>({} as TypeProduct);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const productService = new ProductService();

  useEffect(() => {
    productService
    .getSingleProducts(id)
    .then((response) => response.data)
    .then((post) => setProducts(post));
  }, [id, productService]);
 

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="border">
              <SingleProductWithBackButton
                imgSrc={productList.imgSrc}
                name={productList.name}
                price={productList.price}
                id={productList.id}
                description={productList.description}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleProductPage;
