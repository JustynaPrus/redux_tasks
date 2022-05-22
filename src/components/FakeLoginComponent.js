import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/toolkitSlice";
import { useFormik, FormikProvider } from "formik";
import * as yup from "yup";

export const FakeLoginComponent = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      login: "Justyna",
      password: "lvl257",
    },
    validationSchema: yup.object().shape({
      login: yup.string().required("Login jest wymagany!"),
      password: yup
        .string()
        .min(6, "Nie może być krótsze niż 6 znaków")
        .required("Hasło jest wymagane!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (values.login === "Justyna" && values.password === "lvl257") {
        dispatch(logIn());
      }
    },
  });
  return (
    <FormikProvider value={formik}>
      <p>Zaloguj się</p>
      <form onSubmit={formik.handleSubmit}>
        <input name="login" onChange={formik.handleChange} />
        <p>{formik.touched.login && formik.errors.login}</p>
        <input name="password" onChange={formik.handleChange} />
        <p>{formik.touched.password && formik.errors.password}</p>
        <button type="submit">Zaloguj się</button>
      </form>
    </FormikProvider>
  );
};
