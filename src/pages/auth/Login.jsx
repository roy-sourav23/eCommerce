import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import Layout from "../../Layout/Layout";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../../features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";

const Label = styled("label")({
  fontSize: "1rem",
});

const MyForm = styled(Form)({
  backgroundColor: "#f5f5f5",
  width: "350px",
  margin: "auto",
  padding: "3rem 2rem",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
});

const MyField = styled(Field)({
  width: "100%",
  outline: "none",
  padding: "0.2rem 1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginSelector = useSelector((state) => state.auth);
  const userLoggedIn = loginSelector.login.userLoggedIn;

  useEffect(() => {
    if (userLoggedIn) {
      navigate("/");
    }
  }, [userLoggedIn]);

  console.log("loginSelector", userLoggedIn);

  return (
    <Layout>
      <div
        style={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            // e.preventDefault();
            // console.log("values", JSON.s);
            // console.log("Submitted values:", JSON.stringify(values, null, 2));
            dispatch(loginUser(values));

            // if (userLoggedIn) {
            //   navigate("/");
            // }
          }}
        >
          {(formik) => (
            <MyForm>
              <h1 style={{ textAlign: "center" }}>Login</h1>

              <fieldset>
                <Label htmlFor="email" className=" ">
                  Email
                </Label>
                <MyField
                  name="email"
                  id="email"
                  type="email"
                  placeholder="enter email"
                />
                <ErrorMessage name="email" className="block" />
              </fieldset>

              <fieldset>
                <Label htmlFor="password" className=" ">
                  Password
                </Label>
                <MyField
                  name="password"
                  id="password"
                  type="password"
                  placeholder="enter password"
                  autoComplete="false"
                />
                <ErrorMessage name="password" />
              </fieldset>

              <Button
                type="submit"
                style={{
                  backgroundColor: "#d3d3d3",
                  width: "70%",
                  marginTop: "0.4rem",
                  color: "black",
                }}
              >
                submit
              </Button>
              <div>
                Not registered yet? <Link to="/accounts/signup">Register</Link>
              </div>
            </MyForm>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default Login;
