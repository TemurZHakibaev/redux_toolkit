import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  console.log(users);

  const formSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Введите больше 2 символов")
      .max(12, "Введите меньше 12 символов")
      .required("Required"),
    lastName: Yup.string()
      .min(6, "Введите больше 6 символов")
      .max(16, "Максимальное количество симмволов 16")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .matches(/^[a-z_/-/./+$]/, "Можно использовать только - _ . символы"),
    phoneNumber: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
    age: Yup.number().min(1).max(99).required("Введите число поменьше"),
  });

  return (
    // <Form>
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        age: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        dispatch(createUser(values));
        navigate("/read");
      }}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form className={"container pt-8"}>
          <div className="relative z-0 w-full mb-6 pt-2 group">
            <input
              onChange={handleChange}
              value={values.email}
              type="email"
              className="block py-2 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 s appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              name="email"
            />
            <p className={"text-red-600"}>
              {errors.email && touched.email && errors.email}
            </p>
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="grid  md:grid-cols-2 md:gap-6">
            <div className="relative pt-2 z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <p className={"text-red-600"}>
                {errors.firstName && touched.firstName && errors.firstName}
              </p>

              <label
                htmlFor="floating_first_name"
                className="bt-5 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative pt-2 z-0 w-full mts-6 group">
              <input
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                className="bg-none outline-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <p className={"text-red-600"}>
                {errors.lastName && touched.lastName && errors.lastName}
              </p>
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative pt-2 z-0 w-full mb-6 group">
              <input
                value={values.phoneNumber}
                onChange={handleChange}
                type="tel"
                name="phoneNumber"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <p className={"text-red-600"}>
                {errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber}
              </p>
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div className="relative pt-2 z-0 w-full mb-6 group">
              <input
                value={values.age}
                onChange={handleChange}
                name="age"
                type="number"
                className={
                  "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                }
                placeholder=" "
              />
              <p className={"text-red-600"}>
                {errors.age && touched.age && errors.age}
              </p>
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Age
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Create;
