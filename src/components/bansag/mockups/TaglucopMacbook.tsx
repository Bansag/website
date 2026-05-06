import { motion } from "framer-motion";
import TaglucopHome from "../../../assets/Work/TaglucopHome.png";
import TaglucopAdminDashboard from "../../../assets/Work/TaglucopAdminDashboard.png";

export default function TaglucopMacbook() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center p-4 md:p-8">
      
      {/* MacBook Mockup */}
      <motion.div
        className="relative w-full max-w-3xl z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Screen Bezel (MacBook style) */}
        <div className="relative bg-[#0d0d0d] rounded-t-2xl p-3 pb-6 shadow-2xl border border-[#222]">
          {/* Camera Dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#050505] border border-[#1a1a1a]" />
          
          {/* Inner Screen */}
          <div className="relative bg-black rounded overflow-hidden aspect-[16/10] w-full group">
            {/* Scrollable Container to prevent clipping */}
            <div className="absolute inset-0 overflow-y-auto no-scrollbar">
              <img
                src={TaglucopHome}
                alt="Taglucop Website"
                className="w-full h-auto object-top transition-transform duration-[10s] ease-linear group-hover:-translate-y-[10%]"
              />
            </div>
            {/* Screen Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
          </div>
        </div>
        
        {/* Laptop Base */}
        <div className="relative h-4 bg-gradient-to-b from-[#8a8a8a] to-[#4a4a4a] rounded-b-xl w-[114%] -ml-[7%] flex justify-center border border-[#555] border-t-0 z-20">
          <div className="w-24 h-1.5 bg-[#333] rounded-b-md shadow-inner" />
        </div>
      </motion.div>
    </div>
  );
}
