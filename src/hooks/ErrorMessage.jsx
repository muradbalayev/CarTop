import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const ErrorMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-red-500 text-3xl h-screen w-full flex flex-col items-center justify-center p-8 text-center"
    >
      <FaExclamationCircle className="text-5xl mb-4 animate-pulse" />
      Error loading datas
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-6 py-2 border border-red-500 rounded-lg hover:bg-red-50 transition-colors text-lg"
      >
        Try Again
      </button>
    </motion.div>
  );


export default ErrorMessage;
