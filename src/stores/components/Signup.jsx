import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './signup.css'

const Signup = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Required'),
  });

  return (
    <div>
      <h1>Signup Form</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className='fo'>
            <div>
              <label htmlFor="firstName" className='la'>First Name</label>
              <Field type="text" name="firstName" className="in"/>
              <ErrorMessage name="firstName" component="div" />
            </div>

            <div>
              <label htmlFor="lastName" className='la'>Last Name</label>
              <Field type="text" name="lastName" className="in"/>
              <ErrorMessage name="lastName" component="div" />
            </div>

            <div>
              <label htmlFor="email" className='la'>Email</label>
              <Field type="email" name="email" className="in"/>
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="password" className='la'>Password</label>
              <Field type="password" name="password" className="in" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting} className='but'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
