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
          <p className="text-muted">Last updated: February 2025</p>

          <h2>1. Information We Collect</h2>
          <p>Flock collects the following information:</p>
          <ul>
            <li>Account information (email, name, age, gender)</li>
            <li>Location data when the app is in use</li>
            <li>Device information for crash reporting</li>
          </ul>

          <h2>2. How We Use Your Location</h2>
          <p>
            Your location is used solely to show you nearby social venues and
            activity. We do <strong>NOT</strong>:
          </p>
          <ul>
            <li>Track your location at residential addresses</li>
            <li>Track your location while driving (speed &gt; 5 m/s)</li>
            <li>Share your precise coordinates with other users</li>
            <li>Sell your location data to third parties</li>
          </ul>
          <p>Only public venue associations are visible to friends.</p>

          <h2>3. Data Storage</h2>
          <p>
            Your data is stored securely using Supabase (PostgreSQL) with Row
            Level Security policies. Authentication tokens are managed by
            Supabase Auth.
          </p>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell or share your personal data with third parties. Your
            profile information is visible to other Flock users based on your
            privacy settings.
          </p>

          <h2>5. Data Deletion</h2>
          <p>
            You can delete your account at any time from the Settings screen.
            This permanently removes all your data including your profile,
            friend connections, and location history.
          </p>

          <h2>6. Contact</h2>
          <p>
            For privacy concerns, contact us at{" "}
            <a href="mailto:privacy@flock.app">privacy@flock.app</a>.
          </p>
        </article>
      </Container>
    </section>
  );
}
