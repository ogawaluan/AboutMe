import { motion } from 'framer-motion';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <>
      <div className="mx-24 md:mt-32 grid grid-cols-1 grid-rows-3 gap-14 md:grid-cols-3 md:grid-rows-1 justify-between md:gap-48">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a href="https://github.com/ogawaluan" target="_blank">
            <motion.img src="https://image.flaticon.com/icons/png/512/25/25231.png" className="rounded-full mt-10 cursor-pointer" />
          </a> 
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a href="https://www.linkedin.com/in/luan-ogawa/" target="_blank">
            <motion.img src="https://image.flaticon.com/icons/png/512/49/49656.png" className="rounded-full mt-10 cursor-pointer" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <a href="https://www.instagram.com/ogawaluan_/" target="_blank">
            <motion.img src="https://image.freepik.com/icones-gratis/camera-do-vintage-quadrado_318-10040.jpg" className="rounded-full my-10 cursor-pointer" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="my-10"
      >
        <Link href="/">
          <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
            Back to Home
          </a>
        </Link>
      </motion.div>
    </>
  );
};

export default Contact;