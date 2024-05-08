import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Divider, Button, TextField } from "@mui/material";
import "ui-neumorphism/dist/index.css";
import bg from "../Images/Contact/6.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactInformation = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    subject: Yup.string().required("Subject is required"),
    description: Yup.string(10).required("Description is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        resetForm();
        toast.success("Your form is successfully submitted!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          style: { background: "#f1f4f7" },
        });
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send form!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: { background: "#f1f4f7" },
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          py: 4,
        }}
      >
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{ textAlign: "left", pl: { sm: 4 }, m: 10 }}
          >
            <Typography variant="h4" gutterBottom>
              <Box display="flex" alignItems="center">
                <Divider
                  orientation="vertical"
                  sx={{
                    ml: 0,
                    mr: 1,
                    height: "2rem",
                    alignSelf: "stretch",
                    color: "white",
                    border: "2px solid black",
                  }}
                />
                Contact with AUTOROBS
              </Box>
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 2 }}>
              We would be happy to answer any questions and explore how our
              services can support your business. If you tell us a bit about
              your interests, we’ll make sure we get you the best contact person
              on our end.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If you’d like to talk to someone now, give us a call at
              <strong>(+92) 321 786 4079</strong>.
            </Typography>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                touched,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Grid container spacing={2} mt={3}>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="filled"
                        label="Name *"
                        fullWidth
                        sx={{ mb: 2 }}
                        error={touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="filled"
                        label="Email *"
                        fullWidth
                        sx={{ mb: 2 }}
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={(val) => {
                          handleChange({
                            target: { name: "phone", value: val },
                          });
                        }}
                        onBlur={handleBlur}
                        variant="filled"
                        label="Phone *"
                        fullWidth
                        sx={{ mb: 2 }}
                        error={touched.phone && !!errors.phone}
                        helperText={touched.phone && errors.phone}
                        InputProps={{
                          inputComponent: PhoneInput,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="subject"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="filled"
                        label="Subject *"
                        fullWidth
                        sx={{ mb: 2 }}
                        error={touched.subject && !!errors.subject}
                        helperText={touched.subject && errors.subject}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="filled"
                        label="Description *"
                        fullWidth
                        multiline
                        rows={4}
                        InputProps={{
                          style: { resize: "both" },
                        }}
                        sx={{ mb: 2 }}
                        error={touched.description && !!errors.description}
                        helperText={touched.description && errors.description}
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ width: "100%" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      sx={{ mt: 2 }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Box>
    </>
  );
};

export default ContactInformation;
