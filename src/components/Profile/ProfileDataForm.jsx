import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';



const ProfileDataForm = (props) => {


  return <div>
    <Formik

      initialValues={{
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
          github: '',
          vk: '',
          facebook: '',
          instagram: '',
          twitter: '',
          website: '',
          youtube: '',
          mainLink: ''
        }
      }}
      onSubmit={(values, { setSubmitting }) => {

        //let logObj = JSON.stringify(values, null, 2)
        props.offEditMode();
        props.saveProfile(values);
        setSubmitting(false)

      }}

    >

      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, offEditMode }) => (
        <Form>
          <div><Field type="text" name="fullName" placeholder='Enter you fullname' /></div>
          <div><Field type="checkbox" name="lookingForAJob" />lookingForAJob</div>
          <div><Field type="text" name="lookingForAJobDescription" placeholder='Descriprtionof Job' /></div>
          <div>контакты
            <Field type="text" name="contacts.github" placeholder='github'/>
            <Field type="text" name="contacts.vk" placeholder='vk'/>
            <Field type="text" name="contacts.facebook" placeholder='facebook'/>
            <Field type="text" name="contacts.instagram" />
            <Field type="text" name="contacts.twitter" />
            <Field type="text" name="contacts.website" />
            <Field type="text" name="contacts.youtube" />
            <Field type="text" name="contacts.mainLink" />
          </div>


          <div><button type="submit" disabled={handleSubmit} onClick={() => {
            props.offEditMode()
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