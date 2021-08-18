import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");

  const handleSend = async () => {
    setSent(true);
    try {
      await axios.post("http://localhost:5000/send", {
        text,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="email-container">
      <div id="media-contactForm">
        <Link id="home-link-form" to={"/"}>
          <h1>Home</h1>
        </Link>
        {!sent ? (
          <div id="form-container">
            <div id="email-wrapper">
              <h1>E-mail Me!</h1>
              <form
                id="form-wrapper"
                onSubmit={handleSend}
                method="POST"
                action="/send"
              >
                Name
                <input
                  className="form-inputs"
                  id="form-name"
                  type="text"
                  name="name"
                  onChange={(evt) => setText(evt.target.value)}
                />
                Email
                <input
                  className="form-inputs"
                  id="form-email"
                  type="text"
                  name="email"
                />
                Message
                <input
                  className="form-inputs"
                  id="message"
                  type="text"
                  name="message"
                />
                <input id="sub-btn" type="submit" />
              </form>
            </div>
          </div>
        ) : (
          alert("Email Sent! Feel free to also directly email me @ gjcritchlow21@gmail.com")
          
        )}
      </div>
    </div>
  );
}
