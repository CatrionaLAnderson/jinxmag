import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

serve(async (req) => {
  try {
    const payload = await req.json();
    const order = payload.record;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_RESEND_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Jinx Zine <jinxmagazine@outlook.com>",
        to: "jinxmagazine@outlook.com",
        subject: "New Zine Order Submitted",
        html: `
          <strong>${order.name}</strong> ordered ${order.quantity} zine(s).<br>
          <strong>Email:</strong> ${order.email}<br>
          <strong>Address:</strong> ${order.street}, ${order.city}, ${order.postcode}, ${order.country}<br>
          <strong>Notes:</strong> ${order.notes || 'None'}<br>
          <strong>Total Cost:</strong> £${order.total_cost}
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Email send failed:", error);
      return new Response("Email failed", { status: 500 });
    }

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error processing function:", error);
    return new Response("Server error", { status: 500 });
  }
});
