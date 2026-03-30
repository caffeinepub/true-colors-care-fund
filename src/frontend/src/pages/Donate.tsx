import { Share2 } from "lucide-react";
import { motion } from "motion/react";

export default function Donate() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "True Colors Care Fund",
        text: "Help trans individuals afford their HRT. Every donation matters.",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard! Please share with your community.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 text-3xl shadow-soft"
          style={{ background: "linear-gradient(135deg, #fce8ed, #dff4fd)" }}
        >
          💛
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
          Donate
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-10"
      >
        <p className="text-gray-600 text-lg leading-relaxed mb-3">
          This fund runs on community support. There is{" "}
          <strong>no set donation amount</strong>.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Give whatever you can. Every donation goes directly toward helping
          someone afford their HRT.
        </p>
      </motion.div>

      {/* Donate CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8"
      >
        <a
          href="https://square.link/u/TXTDVotn"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 rounded-full font-bold text-base sm:text-lg uppercase tracking-wide text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
          style={{ background: "#F5A9B8" }}
          data-ocid="donate.primary_button"
        >
          💛 Donate Now
        </a>
      </motion.div>

      {/* Decorative gradient card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="rounded-3xl p-6 sm:p-8 mb-8"
        style={{
          background: "linear-gradient(135deg, #dff4fd 0%, #fce8ed 100%)",
        }}
      >
        <p className="font-display font-semibold text-gray-800 text-lg">
          Every dollar counts. ✨
        </p>
        <p className="text-gray-600 mt-2">
          100% of donations go directly to trans individuals who need help
          affording their medication. No overhead. No middleman. Just community
          love.
        </p>
      </motion.div>

      {/* Can't donate, share */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border-t border-gray-100 pt-8"
      >
        <p className="text-gray-500 text-base mb-4">
          If you can't donate, please <strong>share</strong>. Spreading the word
          makes a huge difference.
        </p>
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide border-2 transition-all hover:scale-105 active:scale-95"
          style={{ borderColor: "#5BCEFA", color: "#3ba8d4" }}
          data-ocid="donate.secondary_button"
        >
          <Share2 className="w-4 h-4" />
          Share This Fund
        </button>
      </motion.div>
    </div>
  );
}
