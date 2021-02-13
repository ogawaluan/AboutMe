import { motion } from "framer-motion";
import Link from "next/link";
import CardText from "../components/CardText";

const AboutMePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img src="/img/luan2.png" layoutId="aboutme-img" className="rounded-full h-64 w-64" />

      <CardText>
        <h2 className="text-1xl sm:text-2xl lg:text-3xl mt-10 mb-10">
          Hello guys! I am a person who loves solving problems and I found a place where I can help, which is programming. At the moment I am just a student, focused on learning web development. Seeking to collaborate with projects using React, CSS / HTML / JS, Typescript
        </h2>
      </CardText>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        <Link href="/">
          <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
            Back to Home
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutMePage;