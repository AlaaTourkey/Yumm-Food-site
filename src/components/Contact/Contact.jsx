import React from 'react'
import Style from './Contact.module.css'
import { useFormik } from 'formik'
import * as yup from "yup"


function Contact() {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const passwordRegex = /^[A-Z]+[A-Za-z0-9!@$%^&]{8,}$/

  let validationSchema = yup.object({
    name: yup.string().required("name is required").min(3, "name should be more than 3 char").max(10, "name should be less than 10 char"),
    email: yup.string().email().required("email is required"),
    phone: yup.string().required("phone is required").matches(phoneRegExp, 'please enter a valid mobile Number'),
    age: yup.number().required("age is required").min(18, 'min age must be more than 18 years').max(60, 'max age must be less than 60 years'),
    password: yup.string().required("password is required").matches(passwordRegex, "Password must start with an uppercase letter and be at least 8 characters, including a combination of letters (uppercase and lowercase), numbers, and the special characters: !, @, $, %, ^, &."),
    rePassword: yup.string().required("rePassword is required").oneOf[yup.ref("password")]
  })


  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      password: "",
      rePassword: "",

    },
    validationSchema,
    onSubmit: login
  })
  console.log(formik);

  function login() {
    console.log(formik.values);
  }

  return (
    <>
      <div className="contact-us" id="contact-Us-area">
        <div className="container my-5">
          <form onSubmit={formik.handleSubmit} >
            <div className="row g-4 py-5">
              <div className="col-md-6 ">
                <div className="contact-input">
                  <input type="text" placeholder="Enter Your Name" className="form-control mb-2 w-100" id="name" name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name} />

                  {formik.errors.name && formik.touched.name ? <div className="alert alert-danger p-2 m-2"> {formik.errors.name}</div> : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-input">
                  <input type="email" placeholder="Enter Your Email" className="form-control mb-2" id="email" name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email} />
                  {formik.errors.email && formik.touched.email ? <div className="alert alert-danger p-2 m-2"> {formik.errors.email}</div> : null}

                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-input">
                  <input type="text" placeholder="Enter Your Phone" className="form-control mb-2" id="phoneNumber" name="phone"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.phone} />
                  {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger p-2 m-2"> {formik.errors.phone}</div> : null}

                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-input">
                  <input type="number" placeholder="Enter Your Age" className="form-control mb-2 " id="age" name="age"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.age} />
                  {formik.errors.age && formik.touched.age ? <div className="alert alert-danger p-2 m-2"> {formik.errors.age}</div> : null}

                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-input">
                  <input type="password" placeholder="Enter Your Password" className="form-control mb-2" id="password" name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password} />
                  {formik.errors.password && formik.touched.password ? <div className="alert alert-danger p-2 m-2"> {formik.errors.password}</div> : null}

                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-input">
                  <input type="password" placeholder="Repassword" className="form-control mb-2" id="rePassword" name="rePassword"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.rePassword} />
                  {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger p-2 m-2"> {formik.errors.rePassword}</div> : null}

                </div>
              </div>
              <div className="col-md-12  mt-4 text-center text-uppercase bounce-top ">
                <button disabled={!(formik.isValid && formik.dirty)} className="btn btn-outline-danger" type="submit" >Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact