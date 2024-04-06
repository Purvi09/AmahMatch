const nodemailer = require("nodemailer");

export async function POST(request: Request) {
    const { firstName, lastName, email, phoneNumber, businessCategory, totalRevenue, message } = await request.json();
    console.log(firstName, lastName, email, phoneNumber, businessCategory, totalRevenue, message);

    const emailTemplate = `
Name: ${firstName} ${lastName}
Email: ${email}
Phone Number: ${phoneNumber}
Business Category: ${businessCategory}
Total Revenue: ${totalRevenue}
Message: ${message}
    `;

    // no preview is available in email
    const emailOptions = {
        to: "info@amahmatch.com", // Admin email address
        from: "purvigandhi2002@gmail.com",
        subject: "New Contact Us Message",
        text: emailTemplate,
    };

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "purvigandhi2002@gmail.com",
                pass: "ukzn cvds vvtk clqd", // Go to https://myaccount.google.com/apppasswords and create a new app password for your gmail
            },
        });

        await transporter.sendMail(emailOptions);
        console.log("Email sent successfully");

        return new Response("Thanks for submitting your message!", {
            status: 200,
            headers: {
                "Content-Type": "text/plain",
            },
        });
    } catch (error) {
        console.error("Error sending email:", error);

        return new Response("Error sending email", {
            status: 500,
            headers: {
                "Content-Type": "text/plain",
            },
        });
    }
}