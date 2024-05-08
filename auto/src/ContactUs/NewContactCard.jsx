import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import "../Styles/ContactForm.css";

function ContactForm() {
  const [flipCard, setFlipCard] = useState(false);

  const toggleFlipCard = () => {
    setFlipCard(!flipCard);
  };

  return (
    <div className="contact-wrapper">
      <div className="flip-card" onClick={toggleFlipCard}>
        {flipCard ? "Reset" : "Animate"}
      </div>
      <Card className={`envelope ${flipCard ? "active" : ""}`}>
        <Box position="relative" className="front paper"></Box>
        <Box position="relative" className="back paper"></Box>
        <CardContent className="content">
          <Box className="form-wrapper">
            <form>
              <Box className="top-wrapper">
                <div className="input">
                  <label>Name</label>
                  <TextField type="text" name="name" variant="outlined" />
                </div>
                <div className="input">
                  <label>Phone</label>
                  <TextField type="text" name="phone" variant="outlined" />
                </div>
                <div className="input">
                  <label>Email</label>
                  <TextField type="text" name="_replyto" variant="outlined" />
                </div>
              </Box>
              <Box className="bottom-wrapper">
                <div className="input">
                  <label>Subject</label>
                  <TextField type="text" name="_subject" variant="outlined" />
                </div>
                <div className="input">
                  <label>Message</label>
                  <TextField
                    rows={5}
                    name="message"
                    multiline
                    variant="outlined"
                  />
                </div>
                <div className="input">
                  <Button
                    className="submit-card"
                    variant="contained"
                    color="primary"
                    onClick={toggleFlipCard}
                  >
                    Send Mail
                  </Button>
                </div>
              </Box>
            </form>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactForm;
