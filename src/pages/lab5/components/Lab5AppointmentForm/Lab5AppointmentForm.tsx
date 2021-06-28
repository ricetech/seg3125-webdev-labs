import React from "react";

import {
  Button,
  Col,
  Container,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {
  BsClipboard,
  BsClock,
  BsCreditCard,
  BsPerson,
  BsQuestionCircle,
} from "react-icons/bs";
import * as Yup from "yup";
import { withFormik, FormikProps } from "formik";
import Datetime from "react-datetime";

import { Service } from "../../interfaces/service";

import "./_lab5-appointment-form.scss";
import { Moment } from "moment";

const SELECT_TEXT = "Select one...";
const REQUIRED_TEXT = "This field is required.";

interface Lab5AppointmentFormProps {
  services: Service[];
}

interface FormValues {
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  apptDateTime: Moment | string;
  apptPref: string;
  apptService: string;
  apptCardholderName: string;
  apptCardNumber: string;
  apptCardExpiry: string;
  apptCardCCV: number;
}

const isDateValid = (date: Moment, validDays: number[]) => {
  return validDays.includes(date.day());
};

const schema = Yup.object().shape({
  patientName: Yup.string().required(REQUIRED_TEXT),
  patientEmail: Yup.string()
    .email("Not a valid email address.")
    .required(REQUIRED_TEXT),
  patientPhone: Yup.string()
    .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/, {
      message:
        "Not a valid telephone number. Must be in the format 1234567890, (123)456-7890 or 123-456-7890.",
    })
    .required(REQUIRED_TEXT),
  apptDateTime: Yup.string().required(REQUIRED_TEXT),
  apptPref: Yup.string()
    .matches(/^((?!Select one\.\.\.).)*$/, REQUIRED_TEXT)
    .required(REQUIRED_TEXT),
  apptService: Yup.string()
    .matches(/^((?!Select one\.\.\.).)*$/, REQUIRED_TEXT)
    .required(REQUIRED_TEXT),
  apptCardholderName: Yup.string().required(REQUIRED_TEXT),
  apptCardNumber: Yup.string()
    .matches(/^(?:\d|\s)+$/, {
      message:
        "Invalid credit card number. You should only input numbers or spaces.",
    })
    .matches(/^(?:\d{4}\s){3}\d{4}$/, {
      message:
        "Invalid credit card number. Must be in the format xxxx xxxx xxxx xxxx.",
    })
    .required(REQUIRED_TEXT),
  apptCardExpiry: Yup.string().required(REQUIRED_TEXT),
  apptCardCCV: Yup.string().min(3).max(4).required(REQUIRED_TEXT),
});

interface FormErrorProps {
  show: boolean;
  msg: string | undefined;
}

const FormError = (props: FormErrorProps) => {
  const { show, msg } = props;
  return show ? (
    <Form.Control.Feedback type="invalid" className="d-block">
      {msg}
    </Form.Control.Feedback>
  ) : null;
};

const InnerForm = (
  props: Lab5AppointmentFormProps & FormikProps<FormValues>
) => {
  const {
    services,
    touched,
    values,
    errors,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
  } = props;
  // noinspection RequiredAttributes
  return (
    <Form noValidate>
      <h5>
        <BsPerson /> Patient Info
      </h5>
      <Form.Group controlId="apptName">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter full name"
          name="patientName"
          value={values.patientName}
          onBlur={handleBlur}
          onChange={handleChange}
          isInvalid={touched.patientName && !!errors.patientName}
        />
        <FormError
          show={!!touched.patientName && !!errors.patientName}
          msg={errors.patientName}
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} controlId="apptEmail">
          <Form.Label>Patient Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="patientEmail"
            value={values.patientEmail}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.patientEmail && !!errors.patientEmail}
          />
          <FormError
            show={!!touched.patientEmail && !!errors.patientEmail}
            msg={errors.patientEmail}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="apptPhone">
          <Form.Label>Patient Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="123-456-7890"
            name="patientPhone"
            value={values.patientPhone}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.patientPhone && !!errors.patientPhone}
          />
          <FormError
            show={!!touched.patientPhone && !!errors.patientPhone}
            msg={errors.patientPhone}
          />
        </Form.Group>
      </Form.Row>
      <h5>
        <BsClock /> Appointment Info
      </h5>
      <Form.Row>
        <Form.Group as={Col} controlId="apptPref">
          <Form.Label>Preferred Expert</Form.Label>
          <Form.Control
            as="select"
            name="apptPref"
            value={values.apptPref}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.apptPref && !!errors.apptPref}
          >
            <option>{SELECT_TEXT}</option>
            <option>Hannah</option>
            <option>Joe</option>
            <option>Samantha</option>
          </Form.Control>
          <FormError
            show={!!touched.apptPref && !!errors.apptPref}
            msg={errors.apptPref}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="apptDateTime">
          <Form.Label>Appt. Date & Time</Form.Label>
          <Datetime
            value={values.apptDateTime}
            onChange={(newDate) => {
              setFieldValue("apptDateTime", newDate);
            }}
            onOpen={() => {
              setFieldTouched("apptDateTime");
            }}
            isValidDate={(date) => {
              let validDays: number[] = [1, 2, 3, 4, 5];
              switch (values.apptPref) {
                case "Hannah":
                  validDays = [1, 2];
                  break;
                case "Joe":
                  validDays = [1, 2, 3, 4, 5];
                  break;
                case "Samantha":
                  validDays = [3, 4, 5];
                  break;
              }
              return isDateValid(date, validDays);
            }}
            inputProps={{
              disabled: !touched.apptPref || values.apptPref === SELECT_TEXT,
            }}
          />
          <FormError
            show={!!touched.apptDateTime && !!errors.apptDateTime}
            msg={errors.apptDateTime}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="apptService">
          <Form.Label>Service</Form.Label>
          <Form.Control
            as="select"
            name="apptService"
            value={values.apptService}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.apptService && !!errors.apptService}
          >
            <option>{SELECT_TEXT}</option>
            {services.map((service) => (
              <option key={service.id}>{service.name}</option>
            ))}
          </Form.Control>
          <FormError
            show={!!touched.apptService && !!errors.apptService}
            msg={errors.apptService}
          />
        </Form.Group>
      </Form.Row>
      <h5>
        <BsCreditCard /> Payment Info
      </h5>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id="payment-help-tooltip">
            Your payment information is required in case of a last-minute
            cancellation of your appointment.
          </Tooltip>
        }
      >
        <Button variant="link" className="px-0">
          <BsQuestionCircle /> Why am I required to provide my Payment
          Information when booking?
        </Button>
      </OverlayTrigger>
      <Form.Row>
        <Form.Group as={Col} controlId="apptCardholderName">
          <Form.Label>Cardholder Name</Form.Label>
          <Form.Control
            type="text"
            name="apptCardholderName"
            value={values.apptCardholderName}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={
              touched.apptCardholderName && !!errors.apptCardholderName
            }
          />
          <FormError
            show={!!touched.apptCardholderName && !!errors.apptCardholderName}
            msg={errors.apptCardholderName}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="apptCardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            name="apptCardNumber"
            value={values.apptCardNumber}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.apptCardNumber && !!errors.apptCardNumber}
          />
          <FormError
            show={!!touched.apptCardNumber && !!errors.apptCardNumber}
            msg={errors.apptCardNumber}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="apptCardExpiry">
          <Form.Label>Card Expiry</Form.Label>
          <Form.Control
            type="month"
            name="apptCardExpiry"
            value={values.apptCardExpiry}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.apptCardExpiry && !!errors.apptCardExpiry}
          />
          <FormError
            show={!!touched.apptCardExpiry && !!errors.apptCardExpiry}
            msg={errors.apptCardExpiry}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="apptCardCCV">
          <Form.Label>Card CCV</Form.Label>
          <Form.Control
            type="number"
            name="apptCardCCV"
            value={values.apptCardCCV}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={touched.apptCardCCV && !!errors.apptCardCCV}
          />
          <FormError
            show={!!touched.apptCardCCV && !!errors.apptCardCCV}
            msg={errors.apptCardCCV}
          />
        </Form.Group>
      </Form.Row>
      <Button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        Book Appointment
      </Button>
      <FormError
        show={Object.keys(errors).length > 0}
        msg="Some fields have errors. Please correct the errors and try again."
      />
    </Form>
  );
};

const Lab5FormikForm = withFormik<Lab5AppointmentFormProps, FormValues>({
  mapPropsToValues: () => {
    return {
      patientName: "",
      patientEmail: "",
      patientPhone: "",
      apptDateTime: "",
      apptPref: SELECT_TEXT,
      apptService: SELECT_TEXT,
      apptCardholderName: "",
      apptCardNumber: "",
      apptCardExpiry: "",
      apptCardCCV: 0,
    };
  },

  validationSchema: schema,

  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerForm);

export const Lab5AppointmentForm = (props: Lab5AppointmentFormProps) => {
  return (
    <>
      <Container className="container__md">
        <h3>
          <BsClipboard /> Book an Appointment
        </h3>
        <Lab5FormikForm services={props.services} />
      </Container>
    </>
  );
};
