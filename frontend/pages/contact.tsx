import { motion } from "framer-motion";
import Link from "next/link";
import CardText from "../components/CardText";

const AboutMePage: React.FC = () => {
  return (
    <>
      <div className="mx-24 md:mt-32 grid grid-cols-1 grid-rows-3 gap-14 md:grid-cols-3 md:grid-rows-1 justify-between md:gap-48">
        <Link href="https://www.google.com">
          <motion.img src="https://www.flaticon.com/svg/vstatic/svg/733/733609.svg?token=exp=1613161762~hmac=d3d39f8cf6a715ada540dd6a4b835312" className="rounded-full mt-10 h-56 w-56 cursor-pointer" />
        </Link>

        <Link href="https://www.google.com">
          <motion.img src="https://www.flaticon.com/svg/vstatic/svg/733/733617.svg?token=exp=1613161780~hmac=702a388cfbc5696ca53a41c8f5e37145" className="rounded-full mt-10 h-56 w-56 cursor-pointer" />
        </Link>

        <Link href="https://www.google.com">
          <motion.img src="https://www.flaticon.com/svg/vstatic/svg/733/733641.svg?token=exp=1613162675~hmac=1614171900bd1cfc50b5070673d28179" className="rounded-full mt-10 h-56 w-56 cursor-pointer" />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="my-10"
      >
        <Link href="/">
          <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
            Voltar para a Home
          </a>
        </Link>
      </motion.div>
    </>
  );
};

export default AboutMePage;