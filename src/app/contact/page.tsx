import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT_EMAILS } from "@/lib/constants";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Flock",
  description: "Get in touch with the Flock team.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to learn more? We'd love to hear from you."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-ink">Email Us</h3>
            <div className="mt-6 space-y-4">
              {CONTACT_EMAILS.map((item) => (
                <div key={item.email} className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-flock" />
                  <div>
                    <p className="text-sm font-medium text-ink">{item.label}</p>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-flock hover:text-flock-dark transition-colors"
                    >
                      {item.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="text-lg font-semibold text-ink mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
