// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroSubText} text-white`}>
//             Hi, We are <span className='text-[#AAFF00]'>FloraVision Team</span>
//           </h1>
//           <p className={`${styles.Text} mt-4 text-white-100`}>
//             We care for your health <br className='sm:block hidden' />
//             We hava Specialist herbs detection tech
//           </p>
//         </div>
//       </div>

//      <div className="flex flex-col justify-end items-end h-screen">
//         <div className="text-center mt-4 flex justify-center items-center bg-red-600 text-[20px] text-white text-lg p-3 rounded-lg font-bold w-48 mx-4 md:w-200 md:mx-20 transform -translate-y-12">
//           <button
//             onClick={() => window.open("https://floravision.streamlit.app", "_blank")}
//             className="w-full h-full hover:bg-red-700 hover:cursor-pointer"
//           >
//             CLICK HERE
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { useState } from "react";
import { styles } from "../styles";

const Hero = () => {
  const [showApp, setShowApp] = useState(false);

  const handleOpen = () => setShowApp(true);
  const handleClose = () => setShowApp(false);

  return (
    <>
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroSubText} text-white`}>
              Hi, We are{" "}
              <span className="text-[#AAFF00]">FloraVision Team</span>
            </h1>
            <p className={`${styles.Text} mt-4 text-white-100`}>
              We care for your health <br className="sm:block hidden" />
              We have Specialist herbs detection tech
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col justify-end items-end h-screen">
          <div className="text-center mt-4 flex justify-center items-center bg-red-600 text-[20px] text-white text-lg p-3 rounded-lg font-bold w-48 mx-4 md:w-56 md:mx-20 transform -translate-y-12">
            <button
              onClick={handleOpen}
              className="w-full h-full hover:bg-red-700 hover:cursor-pointer"
            >
              CLICK HERE
            </button>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {showApp && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ background: "rgba(0,0,0,0.92)" }}
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#0f0f0f] border-b border-[#333]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#915EFF]" />
              <span className="text-white font-semibold tracking-wide text-sm">
                FloraVision — Herb Detection App
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-1.5 rounded-md transition-colors duration-200"
            >
              ✕ Close
            </button>
          </div>

          {/* Iframe — only mounts when open, fully unmounts on close */}
          <div className="flex-1 w-full">
            <iframe
              src="https://floravision.streamlit.app"
              title="FloraVision App"
              className="w-full h-full border-none"
              allow="camera; microphone; clipboard-write"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
