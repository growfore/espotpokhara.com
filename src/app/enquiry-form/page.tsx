import type { Metadata } from "next";
import EnquiryForm from "./EnquiryForm";

export const metadata: Metadata = {
  title: "Enquiry Form",
  description:
    "Submit your enquiry to Espot Pokhara Education and Visa Services in Pokhara, Nepal. Our expert counselors will get back to you within 24 hours.",
  alternates: { canonical: "/enquiry-form" },
  openGraph: {
    title: "Enquiry Form | Espot Pokhara",
    description:
      "Submit your enquiry to Espot Pokhara Education and Visa Services in Pokhara, Nepal.",
    url: "/enquiry-form",
  },
  twitter: {
    title: "Enquiry Form | Espot Pokhara",
    description:
      "Submit your enquiry to Espot Pokhara Education and Visa Services in Pokhara, Nepal.",
  },
};

export default function EnquiryFormPage() {
  return <EnquiryForm />;
}
