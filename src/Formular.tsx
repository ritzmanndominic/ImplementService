import { Formik, Field, FormikHelpers, Form } from "formik";
import { Col, Row } from "react-bootstrap";
import * as yup from 'yup'
import YupPassword from "yup-password";
import React from "react";

interface Signup {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

YupPassword(yup)

/*const yup = require('yup')
require('yup-password')(yup)*/

let schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().password().required()
})

schema.isValid({
  firstname: 'Anojan',
  lastname: 'Pirabakaran',
  email: 'anojan.pirabakaran725@gmail.com'
})
.then(function (valid) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  valid; // => true
});

schema.cast({
  firstname: 'Anojan',
  lastname: 'Pirabakaran',
  email: 'anojan.pirabakaran725@gmail.com'
})

export default function Formular() {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={(
          values: Signup,
          { setSubmitting }: FormikHelpers<Signup>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 3));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          
          <div className="formular">
          <Row>
            <Col>
          <label htmlFor="firstname">Vorname</label>
          <Field id="firstname" name="firstname" placeholder="Max" required />
          </Col>
          <Col>
          <label htmlFor="lastname">Nachname</label>
          <Field id="lastname" name="lastname" placeholder="Mustermann" required />
          </Col>
          <Col>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="maxm@gmail.com"
            type="email"
            />
          </Col>
          <Col>
          <label htmlFor="password">Passwort</label>
          <Field id="pass" name="password" type="password" required></Field>
          </Col>
          <Col>
          <button type="submit">Submit</button>
          </Col>
          </Row>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
