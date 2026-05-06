import { motion } from "framer-motion";

interface DeviceMockupProps {
  desktopMediaUrl: string;
  imgClassName?: string;
}

export default function DeviceMockup({ desktopMediaUrl, imgClassName }: DeviceMockupProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <motion.div
        className="relative w-full z-10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Sleek Browser / Screen Window */}
        <div className="relative bg-[#1A1A1A] rounded-xl shadow-2xl border border-white/10 overflow-hidden">
          
          {/* Top Bar (MacOS Style) */}
          <div className="bg-[#2A2A2A] h-8 w-full flex items-center px-4 border-b border-white/5 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>

          {/* Screen */}
          <div className="relative w-full aspect-video bg-black overflow-hidden">
            <img
              src={desktopMediaUrl}
              alt="Desktop Mockup"
              className={`w-full h-full object-cover object-top block ${imgClassName || ""}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
