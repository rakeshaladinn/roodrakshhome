"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MainHeading from "@/components/UI/MainHeading";
import Button from "@/components/Controls/Button";
import { Urlconstant } from "@/constants/Urlconstant";
import { motion } from "framer-motion";
import Location from "./Location";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^(\+)?[6789][0-9]{9}$/,
      "Phone must start with + or 6/7/8/9 and be 10 digits"
    )
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const InputField = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
}: {
  name: keyof FormData;
  type?: string;
  placeholder: string;
  value: string;
  onChange: any;
  onBlur: any;
  error?: string;
  touched?: boolean;
}) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full p-4 rounded-xl outline-none text-lg bg-white border transition-all duration-300
        ${
          touched && error
            ? "border-red-400 focus:border-red-500"
            : "border-gray-200 focus:border-primary focus:shadow-lg focus:shadow-primary/20"
        }
        group-hover:shadow-md`}
    />
    {touched && error && (
      <motion.p
        className="text-red-500 text-sm mt-1"
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {error}
      </motion.p>
    )}
  </div>
);

const Contactform = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik<FormData>({
    initialValues: { name: "", email: "", phone: "", message: "" },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const internalResponse = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
          }),
        });

        const externalFormData = new URLSearchParams();
        externalFormData.append("campaignId", "General Enquiry");
        externalFormData.append("name", values.name);
        externalFormData.append("mobile", values.phone);
        externalFormData.append("email", values.email);
        externalFormData.append("source", "website");
        externalFormData.append("message", values.message);

        const externalResponse = await fetch(Urlconstant.LeadAPi, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: externalFormData.toString(),
        });

        if (internalResponse.ok && externalResponse.ok) {
          resetForm();
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
      setIsSubmitting(false);
    },
  });

  return (
    <section className="bg-black/5 py-16 px-6 md:px-12">
      <div className="pb-10">
        <MainHeading
          Title="Get in Touch"
          BlackColor={false}
          Subtitle="Let’s Connect and Unlock Your Ideal Space."
          ClassNameTitle="capitalize text-3xl font-bold"
        />
        <p className="text-gray-600 text-lg leading-8">
          The Right Property Is Just One Enquiry Away. Let’s Make It Yours.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 items-start ">
        <div className=" w-full lg:w-1/2 bg-white p-4 md:p-8 rounded-2xl shadow-lg space-y-6">
          <Location />
        </div>
        {/* Form Section */}
        <form
          onSubmit={formik.handleSubmit}
          className="w-full lg:w-1/2 bg-white p-4 md:p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InputField
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              touched={formik.touched.name}
            />
            <InputField
              name="phone"
              placeholder="Phone Number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.phone}
              touched={formik.touched.phone}
            />
          </div>

          <InputField
            name="email"
            type="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />

          <div className="relative group">
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-4 rounded-xl outline-none text-lg bg-white border transition-all duration-300 resize-none
                ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-200 focus:border-primary focus:shadow-lg focus:shadow-primary/20"
                }
                group-hover:shadow-md`}
            />
            {formik.touched.message && formik.errors.message && (
              <motion.p
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {formik.errors.message}
              </motion.p>
            )}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              text={isSubmitting ? "Submitting..." : "Submit Now"}
              className="uppercase px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/40 transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactform;
