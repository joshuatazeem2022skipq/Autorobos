import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Career = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [career, setCareer] = useState("");
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const newFiles = [...event.target.files];
    setFiles(newFiles);
  };

  const handleCancelFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    document.getElementById("cv").value = "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("career", career);
    if (files.length > 0) {
      formData.append("file", files[0]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/sendEmail",
        formData
      );

      if (response.status === 200) {
        console.log("Email sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setCareer("");
        setFiles([]);
        setError(null);
        toast.success("Your career form is successfully submitted!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.error("Failed to send email.");
        setError("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error while sending the email:", error);
      toast.error("Failed to send form!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
    const fileInput = document.getElementById("cv");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            maxWidth: "80%",
            margin: "auto",
          }}
        >
          <Typography
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Career Exploration
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            align="center"
          >
            Are you ready to embark on a career journey like never before? Fill
            out the form below to kickstart your adventure into the realms of
            web development, Embedded Engineering, or Internet of Things (IoT)
            Engineering.
          </Typography>
          <Box
            mt={4}
            width="100%"
            sx={{
              padding: "20px",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            <Typography
              variant="h2"
              color="textPrimary"
              gutterBottom
              align="center"
            >
              Career Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                id="name"
                name="name"
                label="Name"
                fullWidth
                required
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                required
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="phone"
                name="phone"
                label="Phone Number"
                fullWidth
                margin="normal"
                value={phone}
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                id="career"
                name="career"
                select
                label="Select Career"
                fullWidth
                required
                margin="normal"
                value={career}
                onChange={(e) => setCareer(e.target.value)}
              >
                <MenuItem value="Web Development">Web Development</MenuItem>
                <MenuItem value="Embedded Engineer">Embedded Engineer</MenuItem>
                <MenuItem value="Internet of Things (IoT) Engineer">
                  Internet of Things (IoT) Engineer
                </MenuItem>
              </TextField>
              {files.length < 2 && (
                <Box
                  component="form"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <TextField
                    id="cv"
                    label="Attach CV"
                    type="file"
                    accept=".pdf,.jpg,.png"
                    fullWidth
                    required
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    onChange={handleFileChange}
                    InputProps={{
                      endAdornment: files.length > 0 && (
                        <IconButton
                          color="error"
                          size="small"
                          onClick={() => handleCancelFile(0)}
                        >
                          <CancelIcon />
                        </IconButton>
                      ),
                    }}
                  />
                </Box>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </form>
            {error && (
              <Typography variant="body1" color="error" align="center" mt={2}>
                {error}
              </Typography>
            )}
          </Box>
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
      </Box>
    </>
  );
};

export default Career;