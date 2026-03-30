import { Heart, Shield, Users } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Page } from "../App";
import { useActor } from "../hooks/useActor";

interface HomeProps {
  navigate: (page: Page) => void;
}

const sparkles = [
  { id: "s1", top: "12%", left: "8%", size: 20, color: "#5BCEFA", delay: 0 },
  { id: "s2", top: "25%", left: "88%", size: 14, color: "#F5A9B8", delay: 0.4 },
  { id: "s3", top: "60%", left: "5%", size: 16, color: "#F5A9B8", delay: 0.8 },
  { id: "s4", top: "70%", left: "92%", size: 18, color: "#5BCEFA", delay: 0.2 },
  { id: "s5", top: "40%", left: "93%", size: 12, color: "#5BCEFA", delay: 1 },
  { id: "s6", top: "80%", left: "15%", size: 10, color: "#F5A9B8", delay: 0.6 },
];

function Sparkle({
  top,
  left,
  size,
  color,
  delay,
}: { top: string; left: string; size: number; color: string; delay: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left }}
      animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
      transition={{
        duration: 3 + delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg
        aria-hidden="true"
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10 0L11.8 7.2L19 10L11.8 12.8L10 20L8.2 12.8L1 10L8.2 7.2L10 0Z"
          fill={color}
          opacity="0.7"
        />
      </svg>
    </motion.div>
  );
}

export default function Home({ navigate }: HomeProps) {
  const { actor } = useActor();
  const [visitCount, setVisitCount] = useState<bigint | null>(null);

  useEffect(() => {
    if (!actor) return;
    (async () => {
      try {
        await actor.recordVisit();
        const count = await actor.getVisitCount();
        setVisitCount(count);
      } catch (_) {
        // silently ignore errors
      }
    })();
  }, [actor]);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #5BCEFA 0%, #f0e8f5 50%, #F5A9B8 100%)",
        }}
      >
        {/* Sparkles */}
        {sparkles.map((s) => (
          <Sparkle key={s.id} {...s} />
        ))}

        {/* White haze overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="text-lg">🏳️‍⚧️</span>
              <span className="text-sm font-semibold text-gray-700">
                Community Mutual Aid Fund
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6 max-w-3xl mx-auto">
              Helping trans individuals afford their HRT through{" "}
              <span style={{ color: "#d4788e" }}>love</span>,{" "}
              <span style={{ color: "#3ba8d4" }}>support</span>, and{" "}
              <span style={{ color: "#7c6d9e" }}>community</span>.
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              You deserve access to the care that supports your authentic self.
              No one should be left behind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="button"
                onClick={() => navigate("/donate")}
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wide text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                style={{ background: "#F5A9B8" }}
                data-ocid="hero.primary_button"
              >
                💛 Donate Now
              </button>
              <button
                type="button"
                onClick={() => navigate("/get-help")}
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wide text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                style={{ background: "#5BCEFA" }}
                data-ocid="hero.secondary_button"
              >
                🤝 Request Help
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: "linear-gradient(to bottom, transparent, white)",
          }}
        />
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div
                  className="h-1 w-10 rounded-full"
                  style={{ background: "#5BCEFA" }}
                />
                <span
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "#3ba8d4" }}
                >
                  Our Story
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6 leading-snug">
                Born from experience,
                <br />
                built with love.
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                True Colors Care Fund was founded by <strong>Sick Ruby</strong>,
                a trans woman who has personally experienced the struggle of
                affording HRT. When she reached out to nonprofits for help, she
                often did not receive the support that was promised.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mt-4">
                Because of that experience, she created this fund to make sure
                that when trans individuals reach out for help, they are truly
                supported and not left behind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative card */}
              <div
                className="relative rounded-3xl p-8 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #dff4fd 0%, #fce8ed 100%)",
                }}
              >
                <div
                  className="absolute top-4 right-4 opacity-20"
                  aria-hidden="true"
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M40 0L48 28L76 40L48 52L40 80L32 52L4 40L32 28L40 0Z"
                      fill="#5BCEFA"
                    />
                  </svg>
                </div>
                <blockquote className="relative z-10">
                  <div
                    className="text-5xl font-display"
                    style={{ color: "#F5A9B8", lineHeight: 1 }}
                  >
                    &ldquo;
                  </div>
                  <p className="text-gray-700 text-lg font-medium leading-relaxed mt-2">
                    When trans individuals reach out for help, they deserve to
                    be truly supported — not left behind.
                  </p>
                  <footer
                    className="mt-4 text-sm font-semibold"
                    style={{ color: "#3ba8d4" }}
                  >
                    — Sick Ruby, Founder
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(to bottom, #f9feff, white)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 mb-3">
              What we stand for
            </h2>
            <p className="text-gray-500">
              Every value, every action — rooted in community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-7 h-7" />,
                title: "Community Support",
                desc: "This fund is powered entirely by people who care. Together we lift each other up.",
                color: "#5BCEFA",
                bg: "#dff4fd",
              },
              {
                icon: <Heart className="w-7 h-7" />,
                title: "Always Here For You",
                desc: "We show up. Every request is treated with care, compassion, and respect.",
                color: "#F5A9B8",
                bg: "#fce8ed",
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: "No One Left Behind",
                desc: "Funds are distributed as fairly as possible. Your need is seen and valid.",
                color: "#7c6d9e",
                bg: "#f0ebfa",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 text-center"
                style={{ background: item.bg }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "white", color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        className="py-14 text-center"
        style={{
          background: "linear-gradient(135deg, #5BCEFA 0%, #F5A9B8 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
            Ready to make a difference?
          </h2>
          <p className="text-white/90 mb-8">
            Whether you give or receive — you are part of this community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate("/donate")}
              className="px-10 py-3 rounded-full font-bold text-sm uppercase tracking-wide bg-white shadow hover:shadow-lg transition-all hover:scale-105"
              style={{ color: "#d4788e" }}
              data-ocid="cta.primary_button"
            >
              Donate
            </button>
            <button
              type="button"
              onClick={() => navigate("/get-help")}
              className="px-10 py-3 rounded-full font-bold text-sm uppercase tracking-wide border-2 border-white text-white hover:bg-white/20 transition-all hover:scale-105"
              data-ocid="cta.secondary_button"
            >
              Request Help
            </button>
          </div>
        </div>
      </section>

      {/* Visitor Counter */}
      <section
        className="py-6 text-center"
        style={{ background: "white", borderTop: "2px solid #dff4fd" }}
        data-ocid="visitor_counter.section"
      >
        <p
          className="text-sm font-semibold tracking-wide"
          style={{ color: "#5BCEFA" }}
        >
          Total Visits:{" "}
          <span style={{ color: "#d4788e" }}>
            {visitCount !== null ? visitCount.toLocaleString() : "—"}
          </span>
        </p>
      </section>
    </div>
  );
}
