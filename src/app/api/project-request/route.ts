import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Resend is disabled for now per user request. To enable later, uncomment the Resend imports and calls.
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      pillar,
      answers,
      contact_name,
      contact_email,
      contact_phone,
      company_name,
      role,
    } = body;

    // 1. Insert request details into Supabase project_requests table
    const { data, error } = await supabase
      .from("project_requests")
      .insert([
        {
          pillar,
          answers,
          contact_name,
          contact_email,
          contact_phone,
          company_name: company_name || null,
          status: "new",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to store project request in database." },
        { status: 500 }
      );
    }

    // Format answers as HTML list for emails
    const formattedAnswersHtml = Object.entries(answers || {})
      .map(([question, answer]) => {
        return `
          <li style="margin-bottom: 8px;">
            <strong style="color: #0B1F3A;">${question}:</strong> 
            <span style="color: #4A4F55;">${answer}</span>
          </li>
        `;
      })
      .join("");

    // Determine turnaround text based on pillar
    const isPillar3 = pillar === "individuals_small_business";
    const turnaroundDays = isPillar3 ? "2 business days" : "3 business days";
    const turnaroundMessage = isPillar3
      ? "Someone from CreedTech will reach out within 2 business days with next steps."
      : "Since this is a specialized engineering engagement, our team will review your answers and schedule a short call within 3 business days.";

    let emailSent = false;
    let emailErrorWarning = "";

    // 2. Send emails via Resend (Disabled for Vercel deployment without API Key)
    /*
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_your_api_key_here") {
      try {
        // Send confirmation email to the submitter
        await resend.emails.send({
          from: "Creed Tech <onboarding@resend.dev>",
          to: contact_email,
          subject: "Project Request Received — Creed Tech",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #F7F5F0; border-radius: 8px; border: 1px solid #A9B8CC;">
              <h2 style="color: #0B1F3A; margin-top: 0;">Thanks, ${contact_name}!</h2>
              <p style="color: #4A4F55; font-size: 15px; line-height: 1.6;">
                We have successfully received your project request. Here is what happens next:
              </p>
              <blockquote style="margin: 16px 0; padding-left: 12px; border-left: 3px solid #E3A046; color: #0B1F3A; font-weight: bold; font-style: italic;">
                "${turnaroundMessage}"
              </blockquote>
              <div style="margin-top: 24px; padding: 16px; background-color: #ffffff; border-radius: 4px; border: 1px solid #A9B8CC;">
                <h3 style="color: #0B1F3A; margin-top: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Your Request Summary</h3>
                <ul style="padding-left: 20px; margin: 0;">
                  ${formattedAnswersHtml}
                </ul>
              </div>
              <p style="color: #4A4F55; font-size: 12px; margin-top: 32px; border-t: 1px solid #A9B8CC; padding-top: 16px;">
                Creed Tech — Lagos, Nigeria. Part of the Creed Empire family.
              </p>
            </div>
          `,
        });

        // Send internal notification email to Creed Tech team
        await resend.emails.send({
          from: "Creed Tech Intake <onboarding@resend.dev>",
          to: "hello@creedtech.com", // Send to team email
          subject: `New Request [${pillar.toUpperCase()}]: ${contact_name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border: 1px solid #0B1F3A;">
              <h2 style="color: #0B1F3A; margin-top: 0; border-bottom: 2px solid #0B1F3A; padding-bottom: 8px;">New Project Intake</h2>
              <p style="color: #4A4F55; font-size: 14px;">
                A new project request was submitted on the Creed Tech website.
              </p>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #0B1F3A; width: 120px;">Pillar:</td>
                  <td style="padding: 6px 0; color: #4A4F55;">${pillar}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #0B1F3A;">Contact Name:</td>
                  <td style="padding: 6px 0; color: #4A4F55;">${contact_name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #0B1F3A;">Email:</td>
                  <td style="padding: 6px 0; color: #4A4F55;">${contact_email}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #0B1F3A;">Phone/WhatsApp:</td>
                  <td style="padding: 6px 0; color: #4A4F55;">${contact_phone || "Not provided"}</td>
                </tr>
                ${
                  company_name
                    ? `
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #0B1F3A;">Company:</td>
                  <td style="padding: 6px 0; color: #4A4F55;">${company_name}</td>
                </tr>
                `
                    : ""
                }
                ${
                  role
                    ? `
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #0B1F3A;">Role/Title:</td>
                  <td style="padding: 6px 0; color: #4A4F55;">${role}</td>
                </tr>
                `
                    : ""
                }
              </table>

              <div style="margin-top: 24px; padding: 16px; background-color: #F7F5F0; border: 1px solid #A9B8CC; border-radius: 4px;">
                <h3 style="color: #0B1F3A; margin-top: 0; font-size: 14px;">Brief Answers</h3>
                <ul style="padding-left: 20px; margin: 0;">
                  ${formattedAnswersHtml}
                </ul>
              </div>
            </div>
          `,
        });

        emailSent = true;
      } catch (emailErr) {
        console.error("Resend API error:", emailErr);
        emailErrorWarning = "Submission saved, but email notifications could not be sent.";
      }
    } else {
      emailErrorWarning = "Submission saved in database, but Resend API Key is unconfigured.";
    }
    */
    emailErrorWarning = "";

    return NextResponse.json({
      success: true,
      requestId: data.id,
      emailSent,
      warning: emailErrorWarning,
    });
  } catch (err) {
    console.error("Project request API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
