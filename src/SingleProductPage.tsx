import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import SingleProductWithBackButton from "./CardSingleProductPage";
import { TypeProduct } from "./Types/TypeProduct";
import { TypeProductId } from "./Types/TypeProductId";

function SingleProductPage() {
  const { id } = useParams<TypeProductId>();
  const [productList, setProducts] = useState<TypeProduct>({} as TypeProduct);

  useEffect(() => {
    fetch("http://localhost:3004/posts/" + id)
      .then((response) => {
        return response.json();
      })
      .then((myjson) => {
        setProducts(myjson);
      });
  }, [id]);

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
