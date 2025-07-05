import React, { useState, useRef } from "react";
import { MdEdit } from "react-icons/md";
import { CircularProgress } from "@mui/material";
import { FiTrash2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import {
  useGetNotificationsQuery,
  useDeleteNotificationMutation,
  useCreateNotificationMutation,
  useEditNotificationMutation,
} from "../../../redux/services/adminNotificationsApi";
import ErrorMessage from "../../../hooks/ErrorMessage";

// Modal animation variants
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

const AddNotificationModal = ({ setShowAddModal, onSuccess }) => {
  const [createNotification, { isLoading }] = useCreateNotificationMutation();
  const [data, setData] = useState({ title: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.title || !data.message) {
      toast.error("Başlıq və mesaj tələb olunur");
      return;
    }
    try {
      await createNotification(data).unwrap();
      toast.success("Bildiriş əlavə olundu");
      setShowAddModal(false);
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
              onClick={() => setShowAddModal(false)}
            />
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bildiriş əlavə et
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Başlıq</label>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Mesaj</label>
              <textarea
                name="message"
                value={data.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                disabled={isLoading}
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold transition-all"
              >
                {isLoading ? "Əlavə olunur" : "Əlavə et"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const EditNotificationModal = ({ setShowEditModal, notification, onSuccess }) => {
  const [editNotification, { isLoading }] = useEditNotificationMutation();
  const [data, setData] = useState({
    title: notification.title,
    message: notification.message,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.title || !data.message) {
      toast.error("Başlıq və mesaj tələb olunur");
      return;
    }
    try {
      await editNotification({ id: notification._id, ...data }).unwrap();
      toast.success("Bildiriş redaktə olundu");
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
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bildirişi redaktə et
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Başlıq</label>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Mesaj</label>
              <textarea
                name="message"
                value={data.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                disabled={isLoading}
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold transition-all"
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

const AdminNotificationsPage = () => {
  const [filterText, setFilterText] = useState("");
  const { data, isLoading, isError, refetch } = useGetNotificationsQuery({});
  const [deleteNotification, { isLoading: isDeleting }] = useDeleteNotificationMutation();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingNotification, setEditingNotification] = useState(null);

  const filteredNotifications = data?.notifications?.filter((notification) => {
    const title = notification.title?.toLowerCase() || "";
    const message = notification.message?.toLowerCase() || "";
    const searchTerm = filterText.toLowerCase();
    return title.includes(searchTerm) || message.includes(searchTerm);
  });

  const handleDelete = async (id) => {
    if (window.confirm("Silmek istədiyinizə əminsiniz?")) {
      await deleteNotification(id);
      refetch();
    }
  };

  const handleEdit = (notification) => {
    setEditingNotification(notification);
    setShowEditModal(true);
  };

  const fakeNotifications = [
    {
      _id: "1",
      title: "Yeni kurs əlavə olundu",
      message: "Frontend təlimləri üçün yeni kurs aktiv edildi.",
      createdAt: new Date("2024-07-01T10:00:00Z"),
    },
    {
      _id: "2",
      title: "Sistemdə yenilənmə",
      message: "Panel interfeysi yeniləndi və performans artırıldı.",
      createdAt: new Date("2024-07-02T12:30:00Z"),
    },
    {
      _id: "3",
      title: "Qeydiyyat uğurla tamamlandı",
      message: "Yeni istifadəçi qeydiyyatı uğurla başa çatdı.",
      createdAt: new Date("2024-07-03T09:15:00Z"),
    },
    {
      _id: "4",
      title: "Ödəniş qəbul edildi",
      message: "Premium üzvlük üçün ödəniş təsdiqləndi.",
      createdAt: new Date("2024-07-03T14:45:00Z"),
    },
    {
      _id: "5",
      title: "Bildiriş sistemi aktivdir",
      message: "Yeni bildirişləri indi real vaxtda görə bilərsiniz.",
      createdAt: new Date("2024-07-04T08:20:00Z"),
    },
  ];

  if (isLoading)
    return (
      <div className="loader-container w-full flex justify-center items-center min-h-screen gap-3">
        <CircularProgress />
      </div>
    );

//   if (isError) return <ErrorMessage />;

  return (
    <div className="wrapper-admin wallet pb-8">
      {showAddModal && (
        <AddNotificationModal setShowAddModal={setShowAddModal} onSuccess={refetch} />
      )}
      {showEditModal && editingNotification && (
        <EditNotificationModal
          setShowEditModal={setShowEditModal}
          notification={editingNotification}
          onSuccess={refetch}
        />
      )}
      <header className="header flex items-center justify-between pe-10">
        <h1 className="header-title">Bildirişlər</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-[#1A1A1A] text-white rounded-md hover:bg-blue-700 transition"
          >
            Əlavə et +
          </button>
        </div>
      </header>
      <main className="md:mt-8 mt-12 overflow-auto flex flex-col poppins">
        <table className="min-w-[750px]">
          <thead>
            <tr>
              <th>Başlıq</th>
              <th>Mesaj</th>
              <th>Yaradılma Tarixi</th>
              <th>Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody>
            {fakeNotifications?.map((notification) => (
              <tr key={notification._id}>
                <td>{notification.title}</td>
                <td>{notification.message}</td>
                <td>
                  {notification.createdAt
                    ? new Date(notification.createdAt).toLocaleString("az-AZ")
                    : ""}
                </td>
                <td className="space-x-3">
                  <button
                    onClick={() => handleEdit(notification)}
                    className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-200 hover:scale-105"
                  >
                    <MdEdit size={18} />
                  </button>
                  <button
                    className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-200 hover:scale-105"
                    onClick={() => handleDelete(notification._id)}
                  >
                    {isDeleting ? (
                      <CircularProgress size={18} />
                    ) : (
                      <FiTrash2 size={18} />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminNotificationsPage;
