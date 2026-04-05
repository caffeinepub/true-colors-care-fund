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

      {/* Verification Required */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mb-10 rounded-3xl overflow-hidden"
        style={{ border: "1.5px solid #e8d5f5" }}
      >
        {/* Section header */}
        <div
          className="px-6 py-5"
          style={{
            background: "linear-gradient(135deg, #f3e8ff 0%, #fce8ed 100%)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">💜</span>
            <h2 className="font-display font-bold text-lg sm:text-xl text-gray-900">
              Verification Required for Support
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            To ensure fairness and transparency for everyone, we require proof
            before funds can be distributed.
          </p>
        </div>

        <div className="px-6 py-5 space-y-6" style={{ background: "#fdfaff" }}>
          {/* HRT Request */}
          <div>
            <p className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
              If you are requesting help for HRT, please provide:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                <span
                  className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#C084FC" }}
                />
                A photo or screenshot of your HRT prescription
              </li>
              <li className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                <span
                  className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#C084FC" }}
                />
                A photo or screenshot showing the cost of your prescription
              </li>
            </ul>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed italic">
              You may cover or block out any personal information you are not
              comfortable sharing. We only need to verify the medication and
              cost.
            </p>
          </div>

          <hr style={{ borderColor: "#ede9f5" }} />

          {/* After support */}
          <div>
            <p className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
              If support is provided, you will also be required to submit:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                <span
                  className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#F9A8D4" }}
                />
                A photo of your prescription
              </li>
              <li className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                <span
                  className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#F9A8D4" }}
                />
                A receipt confirming the funds were used toward your HRT
              </li>
            </ul>
          </div>

          <hr style={{ borderColor: "#ede9f5" }} />

          {/* Why section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🤍</span>
              <h3 className="font-display font-bold text-base sm:text-lg text-gray-900">
                Why This Is Required
              </h3>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              True Colors Care Fund runs entirely on donations. These steps help
              ensure that support goes directly to those who need it and allows
              us to continue helping others in a fair and responsible way.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Supportive message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
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
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        <h2 className="font-display font-bold text-xl text-gray-900 mb-5">
          Reach out directly
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="mailto:Truecolorscarefund@gmail.com"
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
                Truecolorscarefund@gmail.com
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
