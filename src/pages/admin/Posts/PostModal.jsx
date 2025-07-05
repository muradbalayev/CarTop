// src/components/PostModal.jsx
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const backdrop = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const modal = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 280, damping: 25 } },
  exit:   { y: 50, opacity: 0 },
};

const PostModal = ({ data, onClose }) => {
  const ref = useRef();
  useEffect(() => {
    const h = (e) => ref.current && !ref.current.contains(e.target) && onClose();
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [onClose]);

  const firstLetter = data.title?.charAt(0)?.toUpperCase() || "?";

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50"
                  variants={backdrop} initial="hidden" animate="visible" exit="hidden">
        <motion.div ref={ref} variants={modal}
          className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative border border-gray-100 shadow-2xl">
          <IoClose size={26} className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
                   onClick={onClose}/>
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            {data.imageUrls?.[0] ? (
              <img src={data.imageUrls[0]} alt={data.title} className="w-24 h-24 rounded object-cover"/>
            ) : (
              <div className="w-24 h-24 flex items-center justify-center rounded bg-gray-200 text-3xl font-bold text-gray-600">
                {firstLetter}
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold">{data.title}</h2>
              <p className="text-sm text-gray-500">{data.category}</p>
              <p className="text-xs text-gray-400 mt-1">
                Yaradıcı: {data.createdBy?.name} • Rol: {data.role}
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <p className="text-gray-800">{data.description}</p>
            <div className="text-sm text-gray-600">
              Görülmə sayı: <span className="font-semibold">{data.viewCount}</span>
            </div>
            {data.createdAt && (
              <div className="text-xs text-gray-500">
                Yaradılma tarixi: {new Date(data.createdAt).toLocaleString("az-AZ")}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PostModal;
