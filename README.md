# Mashuk Portfolio - A Next.js Portfolio Website

This is a professional, production-ready portfolio website for "Mashuk", a Full-Stack Developer. Built with Next.js (App Router), Tailwind CSS, and TypeScript.

It features a clean, minimal design, smooth animations, a working contact form powered by Firebase, a blog, and an AI-powered SEO Enhancement Tool.

## Core Features

-   **Modern Stack**: Next.js 14+ (App Router), React 18, Tailwind CSS.
-   **Multiple Pages**: Home, About, Projects, Services, Blog, Contact, and an AI Tools page.
-   **Animations**: Subtle scroll-reveal animations and micro-interactions.
-   **Responsive Design**: Mobile-first and fully responsive across all devices.
-   **Light/Dark Mode**: Theme toggling with preference saved to local storage.
-   **Contact Form**: Integrated with Firebase Firestore to save enquiries securely.
-   **Blog**: Fetches posts from Firestore (with a fallback to local mock data).
-   **SEO Optimized**: Per-page metadata, semantic HTML, and an AI tool for SEO suggestions.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

-   Node.js (v18 or later)
-   npm, yarn, or pnpm
-   A Firebase project

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Firebase

1.  Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  In your project, go to **Project Settings** > **General**.
3.  Under "Your apps", click the Web icon (`</>`) to create a new web app.
4.  Register your app and copy the `firebaseConfig` object. You will need these values for your environment variables.
5.  Navigate to the **Firestore Database** section, click **Create database**, and start in **production mode**. Choose a location near your users.

### 4. Set up Environment Variables

Create a `.env.local` file in the root of the project by copying the example file:

```bash
cp .env.local.example .env.local
```

Now, open `.env.local` and add the Firebase configuration values you copied in the previous step:

```
NEXT_PUBLIC_FIREBASE_API_KEY="AIza..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project-id.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-project-id.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="..."
NEXT_PUBLIC_FIREBASE_APP_ID="1:..."
```

### 5. Configure Firestore Security Rules

To allow the contact form to save messages from unauthenticated users while keeping the rest of your database secure, you need to set up Firestore rules.

1.  In the Firebase Console, go to the **Firestore Database** section and click on the **Rules** tab.
2.  Replace the default rules with the following:

```json
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access for blog posts
    match /posts/{postId} {
      allow read: if true;
      allow write: if false; // Only allow writes from authenticated admins (not implemented)
    }

    // Allow anyone to create a new enquiry.
    // Deny read, update, delete to protect user privacy.
    match /enquiries/{enquiryId} {
      allow read, update, delete: if false;
      allow create: if true;
    }

    // Deny all other access to prevent unauthorized reads/writes
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3.  Click **Publish**.

### 6. Run the development server

You can now start the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## How to Test

-   **Home Page**: Open `/` and check if the hero section and other preview sections load correctly.
-   **Navigation**: Click through the navigation links in the header and footer.
-   **Contact Form**:
    1.  Go to the `/contact` page.
    2.  Fill out the form with valid data and submit.
    3.  A "Message sent successfully!" toast should appear.
    4.  Go to your Firebase Console > Firestore Database to see the new document in the `enquiries` collection.
-   **Projects Page**: Visit `/projects`. Project cards should load. Clicking a card should take you to the project's detail page.
-   **Blog Page**: Visit `/blog`. The blog posts will load from mock data.
-   **Responsiveness**: Resize your browser window or use browser developer tools to check the mobile layout. The header should collapse into a hamburger menu.
-   **Theme Toggle**: Click the theme toggle button to switch between light and dark modes.

## GenAI SEO Tool

The application includes an AI-powered SEO Enhancement Tool available at `/tools`. This tool uses Genkit and Google AI to analyze content and provide SEO suggestions. To run it locally, you might need to authenticate with Google Cloud:

```bash
gcloud auth application-default login
```
