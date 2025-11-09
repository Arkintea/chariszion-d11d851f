import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactFormData = await req.json();

    // Validate input
    if (!name || name.trim().length < 2 || name.trim().length > 100) {
      return new Response(
        JSON.stringify({ error: "Name must be between 2 and 100 characters" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (!email || !email.includes("@") || email.length > 255) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (!message || message.trim().length < 10 || message.trim().length > 1000) {
      return new Response(
        JSON.stringify({ error: "Message must be between 10 and 1000 characters" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Processing contact form submission:", { name, email });

    // Send confirmation email to user
    const userEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Chariszion Smile Foundation <contact@chariszionsmile.org>",
        to: [email],
        subject: "We received your message!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #8B5CF6;">Hi ${name}!</h1>
            <p>Thank you for reaching out to Chariszion Smile Foundation!</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Your message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="margin-top: 30px;">Best regards,<br>
            <strong>Chariszion Smile Foundation</strong><br>
            <em>Spreading Hope, Sharing Joy, Changing Lives</em></p>
            
            <p style="color: #8B5CF6;">🌟 <a href="https://chariszionsmile.org" style="color: #8B5CF6;">chariszionsmile.org</a></p>
          </div>
        `,
      }),
    });

    if (!userEmailResponse.ok) {
      const errorText = await userEmailResponse.text();
      console.error("Failed to send confirmation email:", errorText);
      throw new Error("Failed to send confirmation email");
    }

    console.log("Confirmation email sent to user");

    // Send notification email to organization
    const orgEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Chariszion Smile Foundation <contact@chariszionsmile.org>",
        to: ["contact@chariszionsmile.org"],
        subject: "New Contact Form Submission",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8B5CF6;">📬 New Contact Form Submission</h2>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>👤 Name:</strong> ${name}</p>
              <p><strong>📧 Email:</strong> ${email}</p>
              
              <h3 style="margin-top: 20px;">💬 Message:</h3>
              <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <p style="color: #6b7280; font-size: 14px;">Sent from chariszionsmile.org contact form</p>
          </div>
        `,
      }),
    });

    if (!orgEmailResponse.ok) {
      const errorText = await orgEmailResponse.text();
      console.error("Failed to send notification email:", errorText);
      throw new Error("Failed to send notification email");
    }

    console.log("Notification email sent to organization");

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to send emails" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
