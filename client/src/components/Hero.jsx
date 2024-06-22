import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroSubText} text-white`}>
            Hi, We are <span className='text-[#AAFF00]'>FloraVision Team</span>
          </h1>
          <p className={`${styles.Text} mt-4 text-white-100`}>
            We care for your health <br className='sm:block hidden' />
            We hava Specialist herbs detection tech
          </p>

        </div>

      </div>

      <div class="flex flex-col justify-end items-end h-screen ">
        

        <div class="text-center mt-4 flex justify-center items-center bg-[#38ef7d] text-[20px] text-black-100 text-lg p-3 rounded-lg font-bold w-48 mx-4 md:w-200 md:mx-20 transform -translate-y-12 ">
          <a href="https://floravision.streamlit.app">CLICK HERE</a>
        </div>
      </div>




      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
