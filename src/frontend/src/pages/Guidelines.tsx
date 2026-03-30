import { motion } from "motion/react";

const guidelines = [
  {
    num: "01",
    title: "Limited Funds, Fair Distribution",
    body: "Funds are limited and will be distributed as fairly as possible. We do our best to reach everyone who needs support.",
    emoji: "⚖️",
    color: "#dff4fd",
  },
  {
    num: "02",
    title: "Proof of Use Required",
    body: "After receiving support, you will be asked to provide proof that the funds were used for your HRT. This keeps the fund accountable and sustainable.",
    emoji: "📋",
    color: "#fce8ed",
  },
  {
    num: "03",
    title: "Honesty & Respect",
    body: "Honesty and respect are expected from everyone in this community. We are here to support each other with trust and care.",
    emoji: "🤝",
    color: "#f0ebfa",
  },
  {
    num: "04",
    title: "Community Mutual Aid",
    body: "This is a community mutual aid fund created to help trans individuals access care. It is run with love, not profit.",
    emoji: "💜",
    color: "#fef9ec",
  },
];

export default function Guidelines() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 text-3xl shadow-soft"
          style={{ background: "linear-gradient(135deg, #dff4fd, #fce8ed)" }}
        >
          📜
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
          Guidelines
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
          True Colors Care Fund is built on trust, honesty, and community care.
          Please read these guidelines before applying.
        </p>
      </motion.div>

      <div className="space-y-5">
        {guidelines.map((g, i) => (
          <motion.div
            key={g.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
            className="flex gap-5 p-5 sm:p-6 rounded-2xl"
            style={{ background: g.color }}
            data-ocid={`guidelines.item.${i + 1}`}
          >
            <div className="text-2xl flex-shrink-0 mt-0.5">{g.emoji}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {g.num}
                </span>
              </div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-1">
                {g.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {g.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center p-6 rounded-2xl"
        style={{ background: "linear-gradient(135deg, #5BCEFA20, #F5A9B820)" }}
      >
        <p className="text-gray-600 leading-relaxed">
          Questions? Reach out at{" "}
          <a
            href="mailto:truecolorcarefund@gmail.com"
            className="font-semibold"
            style={{ color: "#3ba8d4" }}
          >
            truecolorcarefund@gmail.com
          </a>
        </p>
      </motion.div>
    </div>
  );
}
