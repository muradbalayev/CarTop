// src/pages/admin/AdminPartnersPage.jsx
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MdEdit } from "react-icons/md";
import { FiTrash2, FiEye } from "react-icons/fi";
import Swal from "sweetalert2";
// import AddPartnerModal from "@/components/admin/Partners/AddPartnerModal";
// import EditPartnerModal from "@/components/admin/Partners/EditPartnerModal";

// ---------------------------------------------------------------------------
// FAKE DATA (test üçün)
const fakePartners = [
  {
    _id: "1",
    name: "CoffeeMe Partners",
    logo: "",                         // boş → baş hərfi placeholder
    createdAt: "2025-07-01T09:15:00Z",
    postCount: 18,
    orderCount: 124,
  },
  {
    _id: "2",
    name: "GreenTravel",
    logo: "",
    createdAt: "2025-06-20T12:00:00Z",
    postCount: 7,
    orderCount: 52,
  },
  {
    _id: "3",
    name: "AutoParts",
    logo: "",
    createdAt: "2025-05-11T14:30:00Z",
    postCount: 33,
    orderCount: 93,
  },
  {
    _id: "4",
    name: "EV Motors",
    logo: "",
    createdAt: "2025-06-02T08:50:00Z",
    postCount: 11,
    orderCount: 37,
  },
  {
    _id: "5",
    name: "Haval Service",
    logo: "",
    createdAt: "2025-04-28T10:10:00Z",
    postCount: 5,
    orderCount: 21,
  },
];
// ---------------------------------------------------------------------------

const AdminPartnersPage = () => {
  // modal və seçilmiş partner state‑ləri
  const [showAddModal, setShowAddModal]      = useState(false);
  const [editingPartner, setEditingPartner]  = useState(null);
  const [modalData, setModalData]            = useState(null);   // view modal (FiEye)

  // ↓ real API gələndə fakePartners əvəzinə data?.partners istifadə edəcəksən
  const partners = fakePartners;

  const handleDelete = async (id) => {
    const res = await Swal.fire({
      title: "Əminsən?",
      text: "Bu əməliyyatı geri almaq mümkün deyil!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sil",
      cancelButtonText: "Ləğv et",
    });
    if (res.isConfirmed) {
      console.log("DELETE", id);         // burada real API çağırışı olacaq
      Swal.fire("Silindi!", "", "success");
    }
  };

  return (
    <div className="wrapper-admin wallet pb-8">
      {/* ---------- Modal‑lar ------------------------------------------------ */}
      {/* {showAddModal && <AddPartnerModal setShowAddModal={setShowAddModal} />}
      {editingPartner && (
        <EditPartnerModal
          partnerId={editingPartner._id}
          currentPartner={editingPartner}
          setShowEditModal={setEditingPartner}
        />
      )} */}

      {/* View Modal (yalnız nümunə) */}
      <AnimatePresence>
        {/* modalData varsa PostModal bənzəri bir komponent aça bilərsən */}
      </AnimatePresence>

      {/* ---------- Header -------------------------------------------------- */}
      <header className="header flex items-center justify-between pe-10">
        <h1 className="header-title">Partnyorlar</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Yeni partner +
        </button>
      </header>

      {/* ---------- Cədvəl --------------------------------------------------- */}
      <main className="md:mt-8 mt-12 overflow-auto flex flex-col poppins">
        <table className="min-w-[950px]">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ad</th>
              <th>Logo</th>
              <th>Yaradılma</th>
              <th>Post sayı</th>
              <th>Sifariş sayı</th>
              <th>Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((pt) => (
              <tr key={pt._id}>
                <td>{pt._id}</td>
                <td>{pt.name}</td>
                <td>
                  {pt.logo ? (
                    <img src={pt.logo} alt={pt.name} className="mx-autow-12 h-12 object-cover rounded" />
                  ) : (
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded bg-gray-200 text-sm font-semibold text-gray-600">
                    {pt.name.charAt(0).toUpperCase()}
                  </div>                  )}
                </td>
                <td>{new Date(pt.createdAt).toLocaleDateString("az-AZ")}</td>
                <td className="text-center">{pt.postCount}</td>
                <td className="text-center">{pt.orderCount}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => setModalData(pt)}
                    className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition hover:scale-105"
                    title="Bax">
                    <FiEye size={18} />
                  </button>
                  <button
                    onClick={() => setEditingPartner(pt)}
                    className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition hover:scale-105"
                    title="Redaktə et">
                    <MdEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(pt._id)}
                    className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition hover:scale-105"
                    title="Sil">
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

export default AdminPartnersPage;
