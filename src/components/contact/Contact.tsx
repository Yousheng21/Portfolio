import React, { ChangeEvent, FormEvent, useState } from "react";
import { send } from "emailjs-com";
import { motion } from "framer-motion";

import "./contact.css";
import { contactLeftVariants, contactRightVariants } from "./constants";
import { Loader } from "../../ui/Loader";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setisSuccess] = useState<undefined | boolean>(undefined);
  const [toSend, setToSend] = useState({
    name: "",
    message: "",
    email: "",
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await send(
        "service_oxgj04q",
        "template_5vayifh",
        toSend,
        "eCmBYDo6FmXcrs5vB"
      );
      setisSuccess(true);
    } catch (error) {
      setisSuccess(false);
    }

    setIsLoading(false);
    setTimeout(() => {
      setToSend({
        name: "",
        message: "",
        email: "",
      });
      setisSuccess(undefined);
    }, 2000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      id="contact-me"
      className="contact bg-img-after bg-img-rings"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="wrapper contact-wrapper">
        <motion.header
          variants={contactLeftVariants}
          className="contact-header"
        >
          <h2 className="heading heading-xl">{t("contact")}</h2>

          <p className="sub-heading contact-sub-h">{t("contact_info")}</p>
        </motion.header>

        <motion.form
          className="form"
          variants={contactRightVariants}
          onSubmit={onSubmit}
        >
          <p className="form-control bg-img-after">
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("name")}
              autoComplete="name"
              className="first-input"
              required
              value={toSend.name}
              onChange={handleChange}
            />
            <span className="error-msg"></span>
          </p>
          <p className="form-control bg-img-after">
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("email")}
              autoComplete="email"
              required
              value={toSend.email}
              onChange={handleChange}
            />
            <span className="error-msg"></span>
          </p>
          <p className="form-control bg-img-after">
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={3}
              placeholder={t("message")}
              required
              value={toSend.message}
              onChange={handleChange}
            ></textarea>
            <span className="error-msg"></span>
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              gap: 10,
            }}
          >
            {isSuccess !== undefined && (
              <span
                style={{
                  marginRight: 20,
                  color: isSuccess ? "var(--accent-color)" : "red",
                }}
              >
                {isSuccess ? t("sending_success") : t("sending_error")}
              </span>
            )}
            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-submit"
            >
              {isLoading ? t("sending") : t("send_message")}
            </button>
            {isLoading && (
              <Loader style={{ width: 25, height: 35, marginBottom: 5 }} />
            )}
          </p>
        </motion.form>
      </div>
      <div className="h-line"></div>
    </motion.section>
  );
};
