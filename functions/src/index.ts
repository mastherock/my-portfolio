/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onDocumentCreated} from "firebase-functions/v2/firestore";
import * as logger from "firebase-functions/logger";
import * as nodemailer from "nodemailer";
import {initializeApp} from "firebase-admin/app";

initializeApp();

// अपने Gmail क्रेडेंशियल्स को यहाँ डालें
// सबसे सुरक्षित तरीके के लिए, अपने Google Account में जाकर एक "App Password" बनाएँ और उसका उपयोग करें।
// ऐप पासवर्ड के बारे में यहाँ और जानें: https://support.google.com/accounts/answer/185833
const gmailEmail = "mastherock15@gmail.com"; // यहाँ अपना Gmail डालें
const gmailPassword = "YOUR_GMAIL_APP_PASSWORDzbnm dwvr mvoi undh"; // यहाँ अपना Gmail पासवर्ड या ऐप पासवर्ड डालें

const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});

// यह फंक्शन तब चलेगा जब 'enquiries' कलेक्शन में कोई नया डॉक्यूमेंट बनेगा
export const sendContactEmail = onDocumentCreated("enquiries/{enquiryId}", (event) => {
    const snapshot = event.data;
    if (!snapshot) {
        logger.log("No data associated with the event");
        return;
    }
    const data = snapshot.data();

    const mailOptions = {
        from: "Your Portfolio <noreply@firebase.com>",
        to: "mastherock15@gmail.com", // जिस ईमेल पर आप नोटिफिकेशन पाना चाहते हैं
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
            <h1>New Enquiry</h1>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
        `,
    };

    try {
        mailTransport.sendMail(mailOptions);
        logger.log("New contact email sent to:", mailOptions.to);
    } catch (error) {
        logger.error("There was an error while sending the email:", error);
    }
});
