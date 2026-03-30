import { CheckCircle, Mail } from "lucide-react";
import { motion } from "motion/react";
import { SiTiktok } from "react-icons/si";
import type { Page } from "../App";

interface GetHelpProps {
  navigate: (page: Page) => void;
}

const requirements = [
  {
    id: "r1",
    text: "Proof of purchase is required (a receipt, photo, or short video).",
  },
  { id: "r2", text: "Share your estimated medication cost." },
  { id: "r3", text: "Have Cash App, or download it to receive help." },
  { id: "r4", text: "Provide your Cash App tag if you already have it." },
];

export default function GetHelp({ navigate: _navigate }: GetHelpProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 text-3xl shadow-soft"
          style={{ background: "linear-gradient(135deg, #dff4fd, #fce8ed)" }}
        >
          🤝
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
          Get Help
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          This fund is for trans individuals who are struggling to afford their
          HRT. You deserve access to the care that supports your authentic self.
        </p>
      </motion.div>

      {/* Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-10"
      >
        <h2 className="font-display font-bold text-xl text-gray-900 mb-5">
          What you&apos;ll need
        </h2>
        <div className="space-y-3">
          {requirements.map((req) => (
            <div
              key={req.id}
              className="flex items-start gap-3 p-4 rounded-2xl"
              style={{ background: "#f9feff" }}
            >
              <CheckCircle
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: "#5BCEFA" }}
              />
              <p className="text-gray-700 leading-relaxed">{req.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Supportive message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-10 rounded-3xl p-6 sm:p-8 text-center"
        style={{
          background: "linear-gradient(135deg, #dff4fd 0%, #fce8ed 100%)",
        }}
        data-ocid="gethelp.panel"
      >
        <div className="text-3xl mb-3">💙</div>
        <p className="font-display font-semibold text-lg sm:text-xl text-gray-800 leading-relaxed">
          If you are in need, please reach out.
        </p>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          You are <strong>seen</strong>, you are <strong>valid</strong>, and you
          deserve support.
        </p>
      </motion.div>

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <h2 className="font-display font-bold text-xl text-gray-900 mb-5">
          Reach out directly
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="mailto:truecolorcarefund@gmail.com"
            className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-trans-blue hover:shadow-soft transition-all group"
            data-ocid="contact.link"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#dff4fd" }}
            >
              <Mail className="w-5 h-5" style={{ color: "#5BCEFA" }} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                Email
              </p>
              <p className="text-sm font-semibold text-gray-800 group-hover:text-trans-blue-dark transition-colors break-all">
                truecolorcarefund@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@sick_ruby"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-soft transition-all group"
            data-ocid="contact.link"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-900">
              <SiTiktok className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                TikTok
              </p>
              <p className="text-sm font-semibold text-gray-800">@sick_ruby</p>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
