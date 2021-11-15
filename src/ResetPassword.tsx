import Auth from "@aws-amplify/auth";
import { Button } from "@material-ui/core";
import { Alert } from "@mui/material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import React, { useState } from "react";

interface Props {}

interface Values {
  email: string;
  oldPassword: string;
  newPassword: string;
}

const ResetPassword = (props: Props) => {
  const [status, setStatus] = useState<
    { error: boolean; message: string } | undefined
  >(undefined);

  return (
    <Formik
      initialValues={{
        email: "",
        oldPassword: "",
        newPassword: "",
      }}
      onSubmit={async (
        values: Values,
        formikHelpers: FormikHelpers<Values>
      ) => {}}
    >
      <Form>
        <Field name="email" component={TextField} label="Email Address" />
        <Field name="oldPassword" component={TextField} label="Old Password" />
        <Field name="newPassword" component={TextField} label="New Password" />
        <Button type="submit">Submit</Button>
        {status && (
          <Alert severity={status.error ? "error" : "success"}>
            {status.message}
          </Alert>
        )}
      </Form>
    </Formik>
  );
};

export default ResetPassword;
