import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Alert, Row, Col, Button, Spinner } from 'reactstrap';

import Form from '../components/Form';

import validateOrderForm from '../utils/validateOrderForm';
import submitOrderForm from '../utils/submitOrderForm';

const OrderForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  const submitOrderFormWithData = submitOrderForm(props.order)

  const errorAlert = (
    <Row>
      <Col>
        <Alert color="danger">{error}</Alert>
      </Col>
    </Row>
  )

  return (
    <Form handleSubmit={handleSubmit(submitOrderFormWithData)}>
      { error && errorAlert }
      <Row>
        <Col xs="12" lg="6">
          <fieldset className="border rounded border-secondary p-3">
            <legend>Dane kontaktowe</legend>
            <Field name="first_name" label="Imię" component={Form.renderField} />
            <Field name="last_name" label="Nazwisko" component={Form.renderField} />
            <Field name="phone_number" label="Numer kontaktowy" component={Form.renderField} />
            <Field name="email" label="Email" type="email" component={Form.renderField} />
          </fieldset>
        </Col>
        <Col xs="12" lg="6">
          <fieldset className="border rounded border-secondary p-3">
            <legend>Adres</legend>
            <Field name="address" label="Ulica" component={Form.renderField} />
            <Field name="address2" label="Numer budynku" component={Form.renderField} />
            <Field name="city" label="Miejscowość" component={Form.renderField} />
            <Field name="zip_code" label="Kod pocztowy" component={Form.renderField} />
          </fieldset>
        </Col>
      </Row>
      <br/>
      <div className="d-flex justify-content-end justify-content-lg-between">
        <Link to="/cart" className="btn btn-secondary d-none d-lg-block">
          Wróć do koszyka
        </Link>
        <div>
          <Button color="danger" disabled={pristine || submitting} onClick={reset}>Wyczyść</Button>
          &nbsp;
          <Button type="submit" disabled={submitting} color="success">
            {
              submitting
                ? <Spinner color="light" size="sm" />
                : 'Złóż zamówienie'
            }
          </Button>
        </div>
      </div>
    </Form>
  )
}

export default reduxForm({
  form: 'order',
  validate: validateOrderForm,
})(OrderForm);