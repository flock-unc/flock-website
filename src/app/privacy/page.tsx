import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — Flock",
  description: "How Flock handles your data and protects your privacy.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <article className="prose prose-gray max-w-none">
          <h1>Privacy Policy</h1>
          <p className="text-muted">Last updated: February 2026</p>

          <h2>1. Information We Collect</h2>
          <p>Flock collects the following information:</p>
          <ul>
            <li>
              Account information (email, name, age, gender, phone number)
            </li>
            <li>
              Location data while the app is in use and in the background
              (with your permission)
            </li>
            <li>
              Device contacts (with your permission) to help you find friends
              on Flock and send invites
            </li>
            <li>Device information for crash reporting and diagnostics</li>
          </ul>

          <h2>2. How We Use Your Location</h2>
          <p>
            Your location is used to show you nearby social venues and
            activity. With your permission, Flock accesses your location in
            the background to keep your venue status up to date. We do{" "}
            <strong>NOT</strong>:
          </p>
          <ul>
            <li>Track your location at residential addresses</li>
            <li>Track your location while driving (speed &gt; 5 m/s)</li>
            <li>Share your precise coordinates with other users</li>
            <li>Sell your location data to third parties</li>
          </ul>
          <p>
            Only public venue associations are visible to friends. Your
            coordinates are encrypted at rest in our production database.
          </p>

          <h2>3. How We Use Your Contacts</h2>
          <p>
            With your permission, Flock reads your device contacts to match
            phone numbers against registered users so you can find friends
            already on the app. If you invite a contact who is not yet on
            Flock, their phone number is stored so that a friendship can be
            automatically created when they sign up. We do not use your
            contacts for any other purpose.
          </p>

          <h2>4. How We Use Your Phone Number</h2>
          <p>
            Your phone number is collected during account creation and
            normalized to a standard format (E.164) for contact matching. It
            is used solely to help other users who have your number in their
            contacts find you on Flock.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            Flock uses the following third-party services that may receive
            limited data:
          </p>
          <ul>
            <li>
              <strong>Supabase</strong> — database hosting, authentication,
              and data storage
            </li>
            <li>
              <strong>Render</strong> — backend server hosting and deployment
            </li>
            <li>
              <strong>Sentry</strong> — crash reporting and error diagnostics
              (receives device info and error data, not location)
            </li>
            <li>
              <strong>Mapbox</strong> — map rendering (receives device
              location to load map tiles)
            </li>
          </ul>
          <p>
            We do not sell your personal data. These services are used
            strictly to operate and improve Flock.
          </p>

          <h2>6. Data Storage &amp; Security</h2>
          <p>
            Your data is stored securely using Supabase (PostgreSQL) with Row
            Level Security policies. Authentication tokens are managed by
            Supabase Auth. Location coordinates are encrypted at rest in
            production.
          </p>

          <h2>7. Data Deletion</h2>
          <p>
            You can delete your account at any time from the Settings screen.
            This permanently removes all your data including your profile,
            phone number, friend connections, location history, and any
            pending invites.
          </p>

          <h2>8. Contact</h2>
          <p>
            For privacy concerns, contact us at{" "}
            <a href="mailto:aryanc1027@gmail.com">aryanc1027@gmail.com</a>.
          </p>
        </article>
      </Container>
    </section>
  );
}
