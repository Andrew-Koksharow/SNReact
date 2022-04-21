import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';



const ProfileDataForm = (props) => {
 

    return <div>
<Formik


initialValues={{ 
    fullName: '', 
    lookingForAJob: false,
     Contacts: {'github': '',
    'vk': '',
    'facebook': '',
    'instagram': '',
    'twitter': '',
    'website': '',
    'youtube': '',
    'mainLink': ''},
     aboutMe: ''}}
onSubmit={(values, { setSubmitting }) => {
         
    //let logObj = JSON.stringify(values, null, 2)
    //alert(values.email)
      alert(values.fullName);
      
    setSubmitting(false)
    
  }}
  
>

{({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, offEditMode}) => (
   <Form>
   <div><Field type="text" name="fullName" placeholder='Enter you fullname'/>
 <ErrorMessage name="email" component="div" /></div>
 <div><Field type="checkbox" name="lookingForAJob"/>lookingForAJob</div>
 <div><Field type="text" name="Contacts" /></div>
 <div><Field type="text" name="aboutMe" placeholder='About you'/></div>
 <div><button type="submit" disabled={handleSubmit} onClick={() => {
    props.offEditMode();
  }}>
   Save
 </button></div>
 
</Form>
 
 )}  
    
 
</Formik>
      </div>
  }
//touched - показывает, взаимодействовали ли мы с полем ранее
//handleChange - вызывается каждый раз, когда мы меняем значение формы
//handleBlur - вызывается каждый раз, когда мы уходим с какого-то поля
// isValid - валидна форма в данный момент или нет 
// handleSubmit - привязан к кнопке отправки формы и он будет вызывать функцию onSubmit
//dirty - он говорит нам, изменялись ли когда-либо значения в форме

  export default ProfileDataForm