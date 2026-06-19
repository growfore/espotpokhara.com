"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormFields = Record<string, string | string[]>;

export async function sendForm(formType: string, data: FormFields) {
  const subject = `[${formType}] New submission from espotpokhara.com`;

  const text = Object.entries(data)
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : value}`)
    .join("\n");

  const { error } = await resend.emails.send({
    from: "Espot Pokhara <onboarding@resend.dev>",
    to: ["info@espotpokhara.com"],
    replyTo: typeof data.email === "string" ? data.email : undefined,
    subject,
    text,
  });

  if (error) throw new Error(error.message);
}
