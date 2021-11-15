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
      ) => {
        try {
          const user = await Auth.signIn(values.email, values.oldPassword);
          if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
            const res = await Auth.completeNewPassword(
              user,
              values.newPassword
            );
            if (res) setStatus({ error: false, message: "Success!" });
          } else {
            const res = await Auth.changePassword(
              user,
              values.oldPassword,
              values.newPassword
            );
            if (res) setStatus({ error: false, message: "Success!" });
          }
        } catch (e) {
          setStatus({ error: true, message: (e as any).message });
        }
      }}
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
