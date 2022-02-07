import Button from "components/common/button/button";
import { InputField } from "components/common/input/input-field";
import { Typography } from "components/common/typography/typography";
import { AuthLayout } from "components/layouts/auth-layout/auth-layout";
import React from "react";
import * as Yup from "yup";
import { Formik, Form, useField } from "formik";

const ForgotPassword: React.FC = () => {
  return (
    <AuthLayout>
      <div className=" align-middle">
        <Typography type="h2" className=" mt-5 ">
          Forgot password
        </Typography>
        <Typography type="body" className="mt-4 text-green-pressed">
          We will send you the link to your email address to reset your password
        </Typography>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values) => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <InputField
              name="email"
              placeholder="Email address"
              className="w-102.5 mt-6"
              type="email"
            />
            <div className="w-102.5 flex mt-10">
              <Button
                nameBtn="primary"
                className="w-48 h-12 box-border ml-6.5"
                type="submit"
              >
                Send the link
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
