// src/pages/admin/AdminPostPage.jsx
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import PostModal from "./PostModal";

// --- Fake data (test məqsədilə) -------------------------------------------
const fakePosts = [
  {
    _id: "1",
    createdBy: { name: "Murad Balayev" },
    role: "user",
    title: "Chery Tiggo 8 Pro 2023",
    category: "SUV",
    description: "Tam yeni, rəsmi zəmanətlə. 2.0 Turbo, 7-yerlik.",
    imageUrls: [""], // boş string → placeholder
    viewCount: 134,
    createdAt: "2025-07-03T11:30:00Z",
  },
  {
    _id: "2",
    createdBy: { name: "AutoParts Partner" },
    role: "partner",
    title: "Geely Coolray arxa spoiler",
    category: "Spare Parts",
    description: "ABS material, boya hazır. Çatdırılma mövcuddur.",
    imageUrls: [""],
    viewCount: 49,
    createdAt: "2025-07-02T09:10:00Z",
  },
  {
    _id: "3",
    createdBy: { name: "EV Motors" },
    role: "partner",
    title: "BYD Atto 3 (Elektrikli)",
    category: "SUV",
    description:
      "410 km gediş məsafəsi, 2024 buraxılışı, gömrük rüsumu ödənilib.",
    imageUrls: [""],
    viewCount: 88,
    createdAt: "2025-07-01T14:05:00Z",
  },
  {
    _id: "4",
    createdBy: { name: "Aysel Hüseynova" },
    role: "user",
    title: "Changan CS35 Plus",
    category: "SUV",
    description: "2019 model, probeg 48 000 km, servis kitabçası mövcud.",
    imageUrls: [""],
    viewCount: 112,
    createdAt: "2025-06-30T12:40:00Z",
  },
  {
    _id: "5",
    createdBy: { name: "Haval Service" },
    role: "partner",
    title: "Haval H6 amortizator dəsti",
    category: "Spare Parts",
    description: "Ön / arxa. Orijinal istehsalçı məhsulu.",
    imageUrls: [""],
    viewCount: 57,
    createdAt: "2025-06-29T18:25:00Z",
  },
];
// ---------------------------------------------------------------------------

const AdminPostPage = () => {
  // rol filtrini saxlamaq üçün state (“user” / “partner”)
  const [roleFilter, setRoleFilter] = useState("user");
  const [modalData, setModalData] = useState(null);

  const posts = fakePosts.filter((p) => p.role === roleFilter);

  const handleEdit = (post) => {
    // edit modalını açmaq və ya yönləndirmək
    console.log("EDIT", post);
  };

  const handleDelete = (id) => {
    if (window.confirm("Silmək istədiyinizə əminsiniz?")) {
      console.log("DELETE", id);
      // burada real API çağırışı olacaq
    }
  };


  const handleShowDetails = (post) => setModalData(post);


  return (
    <div className="wrapper-admin wallet pb-8">
      <AnimatePresence>
        {modalData && (
          <PostModal data={modalData} onClose={() => setModalData(null)} />
        )}
      </AnimatePresence>
      {/* ---------- Header -------------------------------------------------- */}
      <header className="header flex items-center justify-between pe-10">
        <h1 className="header-title">Elanlar</h1>
        {/* Rol switch-i */}
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded-md text-sm font-semibold ${
              roleFilter === "user"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setRoleFilter("user")}
          >
            İstifadəçi elanları
          </button>
          <button
            className={`px-3 py-1 rounded-md text-sm font-semibold ${
              roleFilter === "partner"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setRoleFilter("partner")}
          >
            Partner elanları
          </button>
        </div>
      </header>

      {/* ---------- Table --------------------------------------------------- */}
      <main className="md:mt-8 mt-12 overflow-auto flex flex-col poppins">
        <table className="min-w-[950px]">
          <thead>
            <tr>
              <th>ID</th>
              <th>Yaradıcı</th>
              <th>Role</th>
              <th>Başlıq</th>
              <th>Kateqoriya</th>
              <th>Açıqlama</th>
              <th>Şəkil</th>
              <th>Görülmə</th>
              <th>Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post._id}</td>
                <td>{post.createdBy.name}</td>
                <td className="capitalize">{post.role}</td>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td className="max-w-[300px] truncate">{post.description}</td>
                <td>
                  {post.imageUrls?.[0] ? (
                    <img src={post.imageUrls[0]} alt={post.title} className="w-16 h-16 object-cover rounded mx-auto" />
                  ) : (
                    <div className="mx-auto w-16 h-16 flex items-center justify-center rounded bg-gray-200 text-lg font-semibold text-gray-600">
                    {post.title.charAt(0).toUpperCase()}
                  </div>                  )}
                </td>
                <td className="text-center">{post.viewCount}</td>
                <td className="space-x-2">
                <button onClick={() => handleShowDetails(post)}
                    className="p-2 cursor-pointer rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all hover:scale-105"
                    title="Ətraflı bax">
                    <FiEye size={18} />
                  </button>
                  <button
                    onClick={() => handleEdit(post)}
                    className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-200 hover:scale-105"
                  >
                    <MdEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-200 hover:scale-105"
                  >
                    <FiTrash2 size={18} />
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

export default AdminPostPage;
