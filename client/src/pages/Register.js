import {Formik,Form,Field,ErrorMessage} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

function Register() {
    const initialValues={
        userName:'',
        password:''
    }
 
    const validationSchema = Yup.object().shape({
        userName: Yup.string().min(1).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
      });


      const onSubmit = (data) => {
        axios.post("http://localhost:8080/users", data).then(() => {
          console.log(data);
        });
      };

  return (
    <div className='RegisterForm'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <label>
                    Username:
                </label>
                <Field name='userName' placeholder="(Ex. John123...)"/>
                <ErrorMessage name='userName'/>
                <label>
                    Password:
                </label>
                <Field name='password' />
                <ErrorMessage name='password'/>
                <button>Register</button>

            </Form>
        </Formik>
    </div>
  )
}

export default Register