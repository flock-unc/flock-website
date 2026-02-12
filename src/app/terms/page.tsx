import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service — Flock",
  description: "Terms of Service for using the Flock app.",
};

export default function TermsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <article className="prose prose-gray max-w-none">
          <h1>Terms of Service</h1>
          <p className="text-muted">Last updated: February 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By using Flock, you agree to these Terms of Service. If you do not
            agree, do not use the app.
          </p>

          <h2>2. Eligibility</h2>
          <p>You must be at least 18 years old to use Flock.</p>

          <h2>3. Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the security of your account. Do
            not share your credentials with others.
          </p>

          <h2>4. Acceptable Use</h2>
          <p>You agree NOT to:</p>
          <ul>
            <li>Harass, bully, or threaten other users</li>
            <li>Create fake or misleading profiles</li>
            <li>Use the app for any illegal purpose</li>
            <li>Attempt to access other users&apos; private data</li>
            <li>Reverse engineer or tamper with the app</li>
          </ul>

          <h2>5. Content and Conduct</h2>
          <p>
            Flock may remove content or suspend accounts that violate these
            terms. Users can report inappropriate behavior through the in-app
            reporting system.
          </p>

          <h2>6. Location Services</h2>
          <p>
            Flock requires location permissions to function. You can revoke
            location access at any time through your device settings, but core
            features will be unavailable.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Flock is provided &quot;as is&quot; without warranties. We are not
            liable for any damages arising from your use of the app.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We may update these terms at any time. Continued use of Flock
            constitutes acceptance of updated terms.
          </p>

          <h2>9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate
            these terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:legal@flock.app">legal@flock.app</a>.
          </p>
        </article>
      </Container>
    </section>
  );
}
