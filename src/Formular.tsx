import { Formik, Field, FormikHelpers, Form } from "formik";
import { Col, Row } from "react-bootstrap";
import * as yup from "yup";
import ProductService from "./Services/ProductService";

const productService = new ProductService();

export interface postProduct {
  imgSrc: string;
  name: string;
  price: string;
  description: string;
}


const schema = yup.object().shape({
  imgSrc: yup.string().required("Img Source missing"),
  name: yup.string().required("ProductName missing"),
  price: yup.string().required("Price missing"),
  description: yup.string().required("Product Description missing")
});

export default function Formular() {
  return (
    <div>
      <h1>Post</h1>
      <Formik
        initialValues={{
          imgSrc: "",
          name: "",
          price: "",
          description: "",
        }}
        validationSchema={schema}
        onSubmit={(
          postValues: postProduct,
          { setSubmitting }: FormikHelpers<postProduct>
        ) => {
          setTimeout(() => {
            productService.postProducts(postValues);
            alert(JSON.stringify(postValues, null, 3));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="formular">
              <Row>
                <Col>
                  <label htmlFor="imgSrc">Img Link</label>
                  <Field
                    id="imgSrc"
                    name="imgSrc"
                    placeholder="https://grailpoint.com/wp-content/uploads/2020/11/bez-nazwy-1.jpg"
                    required
                  />
                  {errors.imgSrc && touched.imgSrc ? <div>{errors.imgSrc}</div> : null}
                </Col>
                <Col>
                  <label htmlFor="name">Name</label>
                  <Field
                    id="name"
                    name="name"
                    placeholder="Jordan 3"
                    required
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </Col>
                <Col>
                  <label htmlFor="price">Price</label>
                  <Field
                    id="price"
                    name="price"
                    placeholder="300 Fr."
                    required
                  />
                  {errors.price && touched.price ? (
                    <div>{errors.price}</div>
                  ) : null}
                </Col>
                <Col>
                  <label htmlFor="description">Description</label>
                  <Field
                    id="description"
                    name="description"
                    placeholder="Good Macbook"
                    required
                  />
                  {errors.description && touched.description ? (
                    <div>{errors.description}</div>
                  ) : null}
                </Col>
                <Col>
                  <button type="submit">Submit</button>
                </Col>
              </Row>
            </div>
          </Form>
  )}
      </Formik>
    </div>
  );
}
