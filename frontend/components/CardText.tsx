import { motion } from "framer-motion";

const CardText: React.FC = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default CardText;