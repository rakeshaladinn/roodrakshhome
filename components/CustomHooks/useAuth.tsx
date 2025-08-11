"use client";

import { Urlconstant } from "@/constants/Urlconstant";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

export default function useAuth({ name }: { name?: string } = {}) {
  const router = useRouter();
  const CtaFormikData = [
    {
      id: "email",
      required: true,
      type: "email",
      placeholder: "Enter Email Address",
    },
  ];

  const SearchPropertyFormikData = [
    {
      id: "type",
      required: true,
      type: "select",
      options: [
        {
          label: "Commercial",
          name: "commercial",
        },
        {
          label: "Residential",
          name: "residential",
        },
      ],
      placeholder: "Property Type",
    },
    {
      id: "location",
      required: true,
      type: "select",
      options: [
        {
          label: "Guwahati",
          name: "guwahati",
        },
        {
          label: "Agartala",
          name: "agartala",
        },
      ],
      placeholder: "Location",
    },
    {
      id: "property",
      required: true,
      type: "text",
      placeholder: "Search By Project ",
    },
  ];

  const EnquiryFormaData = [
    {
      id: "Name",
      required: true,
      type: "text",
      placeholder: "Enter Name",
    },
    {
      id: "email",
      required: true,
      type: "email",
      placeholder: "Enter Email Address",
    },
    {
      id: "phone",
      required: true,
      type: "number",
      placeholder: "Enter Phone Number",
    },
    {
      id: "message",
      required: true,
      type: "textarea",
      placeholder: "Enter your message",
      rows: 1,
    },
  ];

  const SearchPropertySchema = () =>
    Yup.object()
      .shape({
        property: Yup.string(),
        location: Yup.string(),
        type: Yup.string(),
      })
      .test(
        "at-least-one-field",
        "Please select at least one of these fields",
        function (values) {
          const { property, location, type } = values || {};

          // Check if at least one field has a value
          const hasProperty = property && property.trim().length > 0;
          const hasLocation = location && location.trim().length > 0;
          const hasType = type && type.trim().length > 0;

          if (!hasProperty && !hasLocation && !hasType) {
            // Return error for all fields
            return this.createError({
              path: "type",
              message:
                "Please select at least one: Property Type, Location, or Search term",
            });
          }

          return true;
        }
      );

  const NewsLetterSchema = () =>
    Yup.object().shape({
      email: Yup.string().email().required("Please Enter location or property"),
    });

  const CtaFormik = useFormik({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    validationSchema: NewsLetterSchema,
    onSubmit: async (values: any, { setFieldError }) => {
      console.log("text", values);
    },
  });
  const EnquirySchema = () =>
    Yup.object().shape({
      Name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .matches(
          /^(\+)?[6789][0-9]{9}$/,
          "Phone must start with + or 6/7/8/9 and be 10 digits"
        )
        .required("Phone number is required"),
      message: Yup.string()
        .min(5, "Message must be at least 5 characters")
        .required("Message is required"),
    });

  const EnquiryFormik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      phone: "",
      message: "",
    },
    enableReinitialize: true,
    validationSchema: EnquirySchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const internalResponse = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Name: values?.Name,
            email: values?.email,
            phone: values?.phone,
            message: values?.message,
          }),
        });

        if (!internalResponse.ok) {
          console.error("Internal API failed.");
        }
        const externalFormData = new URLSearchParams();
        externalFormData.append("campaignId", name || "General Enquiry");
        externalFormData.append("name", values?.Name);
        externalFormData.append("mobile", values?.phone);
        externalFormData.append("email", values?.email);
        externalFormData.append("source", "website");
        externalFormData.append("message", values?.message);
        console.log("externalFormData", externalFormData, name);
        const externalResponse = await fetch(Urlconstant.LeadAPi, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: externalFormData?.toString(),
        });

        if (!externalResponse.ok) {
          console.error("External API failed.");
        }
        if (internalResponse.ok && externalResponse.ok) {
          resetForm();
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
  });
  const SearchPropertyFormik = useFormik({
    initialValues: {
      property: "",
      location: "",
      type: "",
    },
    enableReinitialize: true,
    validationSchema: SearchPropertySchema,
    onSubmit: async (values: any, { setFieldError }) => {
      const hasProperty = values.property && values.property.trim().length > 0;
      const hasLocation = values.location && values.location.trim().length > 0;
      const hasType = values.type && values.type.trim().length > 0;

      if (!hasProperty && !hasLocation && !hasType) {
        setFieldError(
          "property",
          "Please select at least one: Property Type, Location, or Search term"
        );
        setFieldError("location", "Please select at least one field");
        setFieldError("type", "Please select at least one field");
        return;
      }

      const url = `/project?location=${values.location}&type=${values.type}${
        values.property ? `&search=${values.property}` : ""
      }`;

      router.push(url);
    },
  });

  return {
    CtaFormikData,
    CtaFormik,
    EnquiryFormaData,
    EnquiryFormik,
    SearchPropertyFormik,
    SearchPropertyFormikData,
  };
}
