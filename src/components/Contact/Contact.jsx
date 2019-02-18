import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-us">
      <div className="wrap-contact-us">
        <div className="headline">
          <h2 className="headline-contact">Contact us</h2>
          <p className="subtitle contact-headline-text">
            Proin iaculis purus consequat sem cure.
          </p>
        </div>
        <div className="forms">
          <form>
            <div className="wrap-forms">
              <div className="text-forms">
                <input
                  className="text-form-style"
                  type="text"
                  placeholder="Your name *"
                />
                <input
                  className="text-form-style your-mail"
                  type="text"
                  placeholder="Your e-mail *"
                />
                <input
                  className="text-form-style"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="textarea-form">
                <textarea
                  className="textarea-form-style"
                  placeholder="Your message *"
                />
              </div>
            </div>
            <div className="wrap-button">
              <button className="button-style send-message" type="submit">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
