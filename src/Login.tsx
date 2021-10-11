import { Formik, Field, FormikHelpers, Form } from "formik";
import { Col, Row } from "react-bootstrap";
import * as yup from "yup";
import YupPassword from "yup-password";
import React from "react";
import AccountService from "./Services/AccountService";

const accountService = new AccountService();

export interface Signup {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

YupPassword(yup);

const schema = yup.object().shape({
  firstname: yup.string().required("firstname missing"),
  lastname: yup.string().required("lastname missing"),
  email: yup.string().email("Email missing "),
  password: yup.string().password().required("password missing"),
});

export default function Login() {
  return (
    <div>
      <h1>Post</h1>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",

          password: "",
        }}
        validationSchema={schema}
        onSubmit={(
          postValues: Signup,
          { setSubmitting }: FormikHelpers<Signup>
        ) => {
          setTimeout(() => {
            accountService.postAccount(postValues);
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
                  <label htmlFor="firstname">firstname</label>
                  <Field
                    id="firstname"
                    name="firstname"
                    placeholder="Max"
                    required
                  />
                  {errors.firstname && touched.firstname ? (
                    <div>{errors.firstname}</div>
                  ) : null}
                </Col>
                <Col>
                  <label htmlFor="lastname">lastname</label>
                  <Field
                    id="lastname"
                    name="lastname"
                    placeholder="Mustermann"
                    required
                  />
                  {errors.lastname && touched.lastname ? (
                    <div>{errors.lastname}</div>
                  ) : null}
                </Col>
                <Col>
                  <label htmlFor="email">Email</label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="max.mustermann@gmail.com"
                    type="email"
                    required
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </Col>
                <Col>
                  <label htmlFor="password">password</label>
                  <Field id="password" name="password" type="password" required />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
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
