import { motion } from "framer-motion";
import Link from "next/link";
import CardImage from "../components/CardImage";

const Tecnologies: React.FC = () => {
  return (
    <>
      <div className="mx-24 md:mt-32 grid grid-cols-1 grid-rows-3 gap-14 md:grid-cols-3 md:grid-rows-1 justify-between md:gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          animate={{
            opacity: 1,
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 90, 180, 360],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
            <CardImage href="https://nextjs.org/" imgSrc="/img/nextjs.svg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 90, 180, 360],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
            <CardImage href="https://tailwindcss.com/" imgSrc="/img/tailwind.svg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 90, 180, 360],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
            <CardImage href="https://www.framer.com/motion/" imgSrc="/img/framermotion.svg" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="my-14"
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

export default Tecnologies;