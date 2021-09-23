import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { TypeProduct } from "./Types/TypeProduct";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./Card";

let search: string;

export function Search() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [productList, setProducts] = useState<TypeProduct[]>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch("http://localhost:3004/posts")
      .then((response) => {
        return response.json();
      })
      .then((myjson) => {
        setProducts(myjson);
      });
  }, [search]);

  return (
    <>
      <Container>
        <Row>
          {productList.map((post: TypeProduct) => {
            return (
              <Col md={3}>
                <div className="border">
                  <ProductCard
                    imgSrc={post.imgSrc}
                    name={post.name}
                    price={post.price}
                    id={post.id}
                    description={""}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
