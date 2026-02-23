"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const showcaseItems = [
  {
    title: "See the Heatmap",
    description:
      "Open the app and instantly see where people are gathering. Bright spots mean busy venues — find the energy.",
    image: `${BASE_PATH}/images/screenshot-heatmap.png`,
    alt: "Flock heatmap showing venue activity",
  },
  {
    title: "Invite Your Friends",
    description:
      "Find friends from your contacts and invite them to join Flock. Build your crew and never miss a night out.",
    image: `${BASE_PATH}/images/screenshot-friends.png`,
    alt: "Flock contacts invite screen",
  },
  {
    title: "What's Trending",
    description:
      "See the top spots ranked by real-time foot traffic. Know exactly where the energy is before you head out.",
    image: `${BASE_PATH}/images/screenshot-trending.png`,
    alt: "Flock trending venues list",
  },
];

export default function AppShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="space-y-24">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col gap-12 items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Screenshot */}
              <div className="flex-1 w-full max-w-sm">
                <div className="rounded-3xl overflow-hidden shadow-lg border border-cream-dark">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1284}
                    height={2778}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-ink sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg text-muted-dark">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
