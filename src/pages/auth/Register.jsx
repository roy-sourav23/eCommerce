import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Layout from "../../Layout/Layout";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../features/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

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
  backgroundColor: "",
  width: "100%",
  outline: "none",
  padding: "0.2rem 1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
});

// const Fieldset = styled("fieldset")({});

const Register = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const userRegistrationStatus = auth.register.userRegistered;
  const navigate = useNavigate();

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
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            first_name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            last_name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            // Formik handles e.preventDefault() internally
            // console.log("Submitted values:", JSON.stringify(values, null, 2));
            dispatch(registerUser(values));

            // console.log(" userRegistration", userRegistrationStatus);

            if (userRegistrationStatus) {
              navigate("/accounts/login");
            }
          }}
        >
          {(formik) => (
            <MyForm>
              <h1 style={{ textAlign: "center" }}>Register</h1>

              <fieldset>
                <Label htmlFor="first_name">First Name</Label>
                <MyField
                  name="first_name"
                  id="first_name"
                  type="text"
                  placeholder="Enter First Name"
                />
                <ErrorMessage name="first_name" />
              </fieldset>

              <fieldset>
                <Label htmlFor="last_name">Last Name</Label>
                <MyField
                  name="last_name"
                  id="last_name"
                  type="text"
                  placeholder="Enter Last Name"
                />
                <ErrorMessage name="last_name" />
              </fieldset>

              <fieldset>
                <Label htmlFor="email">Email</Label>
                <MyField
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                />
                <ErrorMessage name="email" />
              </fieldset>

              <fieldset>
                <Label htmlFor="password">Password</Label>
                <MyField
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="off"
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
                Submit
              </Button>
              <div>
                Already registered? <Link to="/accounts/login">Login</Link>
              </div>
            </MyForm>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default Register;
