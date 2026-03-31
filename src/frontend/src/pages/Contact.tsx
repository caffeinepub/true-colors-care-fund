import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { SiTiktok } from "react-icons/si";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
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
          💌
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Reach out if you need help or want to support. We are here for you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <a
          href="mailto:Truecolorscarefund@gmail.com"
          className="flex items-center gap-5 p-6 rounded-2xl border border-gray-100 hover:border-trans-blue hover:shadow-soft transition-all group"
          data-ocid="contact.link"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#dff4fd" }}
          >
            <Mail className="w-6 h-6" style={{ color: "#5BCEFA" }} />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
              Email Us
            </p>
            <p className="font-semibold text-gray-800 group-hover:text-trans-blue-dark transition-colors break-all">
              Truecolorscarefund@gmail.com
            </p>
            <p className="text-sm text-gray-400 mt-0.5">
              We'll respond as soon as we can
            </p>
          </div>
        </a>

        <a
          href="https://www.tiktok.com/@sick_ruby"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 p-6 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-soft transition-all group"
          data-ocid="contact.link"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gray-900">
            <SiTiktok className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
              Follow on TikTok
            </p>
            <p className="font-semibold text-gray-800 group-hover:text-gray-600 transition-colors">
              @sick_ruby
            </p>
            <p className="text-sm text-gray-400 mt-0.5">
              Follow for updates and community stories
            </p>
          </div>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 text-center rounded-3xl p-8"
        style={{
          background: "linear-gradient(135deg, #dff4fd 0%, #fce8ed 100%)",
        }}
      >
        <p className="font-display font-bold text-gray-800 text-xl mb-2">
          You are not alone. 🏳️‍⚧️
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether you need help, want to give, or just want to connect — this
          community is here for you. Reach out anytime.
        </p>
      </motion.div>
    </div>
  );
}
