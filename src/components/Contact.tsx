import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <section id="contact-me" className="contact bg-img-after bg-img-rings">
      <div className="wrapper contact-wrapper">
        <header className="contact-header">
          <h2 className="heading heading-xl">Contact</h2>

          <p className="sub-heading contact-sub-h">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </header>

        <form className="form" noValidate>
          <p className="form-control bg-img-after">
            <label htmlFor="name" className="visually-hidden">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              autoComplete="name"
              className="first-input"
              required
            />
            <span className="error-msg"></span>
          </p>
          <p className="form-control bg-img-after">
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              required
            />
            <span className="error-msg"></span>
          </p>
          <p className="form-control bg-img-after">
            <label htmlFor="message" className="visually-hidden">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={3}
              placeholder="Message"
              required
            ></textarea>
            <span className="error-msg"></span>
          </p>
          <p>
            <button type="submit" className="btn btn-submit">
              Send message
            </button>
          </p>
        </form>
      </div>
      <div className="h-line"></div>
    </section>
  );
};
