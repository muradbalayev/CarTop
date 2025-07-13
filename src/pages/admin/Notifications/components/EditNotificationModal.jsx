import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { useEditNotificationMutation } from "../../../../redux/services/adminNotificationsApi";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const modalVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: { y: 50, opacity: 0 },
};

const EditNotificationModal = ({ setShowEditModal, notification, onSuccess }) => {
  const [editNotification, { isLoading }] = useEditNotificationMutation();
  const [form, setForm] = useState({
    title: "",
    message: "",
    isGlobal: true,
    isPersistent: true,
    showAfter: new Date().toISOString().slice(0, 16),
    targetUsers: "all",
  });

  useEffect(() => {
    if (notification) {
      setForm({
        title: notification.title || "",
        message: notification.message || "",
        isGlobal: notification.isGlobal ?? true,
        isPersistent: notification.isPersistent ?? true,
        showAfter: notification.showAfter
          ? new Date(notification.showAfter).toISOString().slice(0, 16)
          : new Date().toISOString().slice(0, 16),
        targetUsers: notification.targetUsers?.[0] || "all",
      });
    }
  }, [notification]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        id: notification._id,
        ...form,
        showAfter: new Date(form.showAfter).toISOString(),
        targetUsers: [form.targetUsers],
      };
      await editNotification(payload).unwrap();
      toast.success("Bildiriş yeniləndi");
      setShowEditModal(false);
      onSuccess?.();
    } catch (error) {
      toast.error(error?.data?.message || "Xəta baş verdi");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="bg-white rounded-2xl px-8 py-10 max-w-lg w-full relative border border-gray-100 shadow-2xl"
          variants={modalVariants}
        >
          <div className="absolute top-5 right-5 cursor-pointer">
            <IoClose
              className="text-gray-400 hover:text-gray-600 transition-colors"
              size={24}
              onClick={() => setShowEditModal(false)}
            />
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Bildirişi redaktə et
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Başlıq</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Mesaj</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isGlobal"
                  checked={form.isGlobal}
                  onChange={handleChange}
                />
                Qlobal
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isPersistent"
                  checked={form.isPersistent}
                  onChange={handleChange}
                />
                Davamlı
              </label>
              <div className="flex flex-col">
                <span className="text-sm font-semibold mb-1">Göstərmə vaxtı</span>
                <input
                  type="datetime-local"
                  name="showAfter"
                  value={form.showAfter}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Hədəf istifadəçilər</label>
              <input
                type="text"
                name="targetUsers"
                value={form.targetUsers}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex justify-center pt-4">
              <button
                disabled={isLoading}
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-bold transition-all"
              >
                {isLoading ? "Yenilənir" : "Yenilə"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EditNotificationModal;
