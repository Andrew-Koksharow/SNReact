import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';

const LoginForm = (props) => {

    return (
        <div>
            <h2>login</h2>
            <div>You must be logged in to see messages.</div>
        <Formik
       initialValues={{ email: '', password: '', rememberMe: false}}
    //    validate={values => {
    //      const errors = {};
    //      if (!values.email) {
    //        errors.email = 'Required';
    //      } else if (
    //        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //      ) {
    //        errors.email = 'Invalid email address';
    //      }
    //      return errors;
    //    }}
       onSubmit={(values, { setSubmitting }) => {
         
         //let logObj = JSON.stringify(values, null, 2)
         //alert(values.email)
         
           props.login(values.email, values.password, values.rememberMe);
           
         setSubmitting(false)
         
       }}
     >
       {({ isSubmitting }) => (
         <Form>
             <div><Field type="text" name="email" placeholder='Enter you login'/>
           </div>
           <div><Field type="password" name="password" />
           <ErrorMessage name="password" component="div" /></div>
           <div><Field type="checkbox" name="rememberMe" />Remember me</div>
           <div><button type="submit" disabled={isSubmitting}>
             Submit
           </button></div>
           
         </Form>
       )}
     </Formik>
     </div>
    )
}



export default connect(null, {login})(LoginForm)