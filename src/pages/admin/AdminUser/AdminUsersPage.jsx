import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useGetUserQuery } from "../../../redux/services/adminUserApi";
import UserModal from "./UserModal";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { Pagination } from "../../../hooks/Pagination";
import { FiEye } from "react-icons/fi";

const ImageModal = ({ imageUrl, isOpen, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-[1000]"
      style={{
        opacity: isOpen ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        pointerEvents: isOpen ? "auto" : "none",
      }}
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt="Enlarged"
        className="max-w-[90%] max-h-[90%] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

const AdminUserPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState(""); // New filter state
  const { data, isLoading, isFetching } = useGetUserQuery({page: currentPage, name: filterText});
console.log(data)
const [imageSrc, setImageSrc] = useState("");
const [openLightbox, setOpenLightbox] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalData, setModalData] = useState(null);

  const handleShowDetails = (user) => {
    setModalData(user);
  };


  const getPaginationRange = () => {
    if (!data?.pagination?.totalPages) return [];

    const range = [];
    const showPages = 3;
    const totalPages = data?.pagination.totalPages;
    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    let end = Math.min(totalPages, start + showPages - 1);

    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }

    if (start > 1) {
      range.push(1);
      if (start > 2) range.push("...");
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) range.push("...");
      range.push(totalPages);
    }

    return range;
  };


  if (isLoading)
    return (
      <div className="w-full flex justify-center items-center min-h-screen gap-3">
         Loading...
      </div>
    );

  // if (isError)
  //   return <div className="text-red-500 p-8"> Xəta </div>;



  // Optional: if you want to show a modal for an enlarged image
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedImage(null);
    }, 300);
  };



  const handleImageClick = (par) => {
    const url = `${import.meta.env.VITE_API_IMAGE_URL
      }/public/uploads/users/profile_pictures/${par}`;
    setImageSrc(url);
    setOpenLightbox(true);
  };


  const user = {
    users: [
      {
        /* --- BASIC FIELDS --------------------------------------------------- */
        _id: "1",
        firstName: "Murad",
        secondName: "Balayev",
        profilePicture: "",          // boşdursa avatar servisi işləyəcək
        email: "murad.balayev@example.com",
        phoneNumber: "+994553951010",
        gender: "male",
        birthDate: "2003-04-15T00:00:00.000Z",
  
        /* --- ACCOUNT INFO --------------------------------------------------- */
        balance: 125.75,
        createdAt: "2024-12-01T10:21:00.000Z",
        updatedAt: "2025-06-25T14:40:00.000Z",
        isBlocked: false,
        isDeleted: false,
  
        /* --- ADDRESSES TAB -------------------------------------------------- */

  
        /* --- FAVORITES TAB -------------------------------------------------- */
        favoriteProducts: [
          {
            _id: "p101",
            name: { az: "Latte Classic" },
            code: "LC‑001",
            price: 4.5,
            discount: { percentage: 10 },
            imageUrls: ["latte.jpg"]
          },
          "p110"                              // sadəcə ID ötürmək də uyğundur
        ],
  
        /* --- CART TAB ------------------------------------------------------- */
        cart: [
          {
            _id: "c1",
            product: {
              _id: "p205",
              name: { az: "Flat White" },
              code: "FW‑002",
              price: 5,
              discount: { percentage: 0 },
              imageUrls: ["flatwhite.jpg"]
            },
            quantity: 2
          }
        ]
      },
  
      /* ====== 2‑ci İSTİFADƏÇİ ============================================= */
      {
        _id: "2",
        firstName: "Aysel",
        secondName: "Hüseynova",
        profilePicture: "",
        email: "aysel.huseynova@example.com",
        phoneNumber: "+994505551122",
        gender: "female",
        birthDate: "1999-02-27T00:00:00.000Z",
        balance: 54,
        createdAt: "2025-01-18T09:30:00.000Z",
        updatedAt: "2025-06-20T12:10:00.000Z",
        isBlocked: false,
        isDeleted: false,

        favoriteProducts: [],
        cart: []
      },
  
      /* ====== 3‑cü İSTİFADƏÇİ ============================================= */
      {
        _id: "3",
        firstName: "Kamran",
        secondName: "Əliyev",
        profilePicture: "",
        email: "kamran.aliyev@example.com",
        phoneNumber: "+994704441122",
        gender: "male",
        birthDate: "1997-11-05T00:00:00.000Z",
        balance: 0,
        createdAt: "2025-03-02T15:05:00.000Z",
        updatedAt: "2025-05-30T08:12:00.000Z",
        isBlocked: true,
        isDeleted: false,
        addresses: [],
        favoriteProducts: ["p130", "p135"],
        cart: []
      },
  
      /* ====== 4‑cü İSTİFADƏÇİ ============================================= */
      {
        _id: "4",
        firstName: "Nigar",
        secondName: "Məmmədova",
        profilePicture: "",
        email: "nigar.mammadova@example.com",
        phoneNumber: "+994505551133",
        gender: "female",
        birthDate: "2000-07-08T00:00:00.000Z",
        balance: 310.2,
        createdAt: "2024-11-15T11:00:00.000Z",
        updatedAt: "2025-06-28T09:00:00.000Z",
        isBlocked: false,
        isDeleted: true,
        favoriteProducts: [],
        cart: [
          {
            product: "p250",      // yalnız ID
            quantity: 1
          }
        ]
      },
  
      /* ====== 5‑ci İSTİFADƏÇİ ============================================= */
      {
        _id: "5",
        firstName: "Elvin",
        secondName: "Quliyev",
        profilePicture: "",
        email: "elvin.quliyev@example.com",
        phoneNumber: "+994555678910",
        gender: "male",
        birthDate: "1998-09-12T00:00:00.000Z",
        balance: 70,
        createdAt: "2025-02-11T13:45:00.000Z",
        updatedAt: "2025-06-29T18:22:00.000Z",
        isBlocked: false,
        isDeleted: false,
        addresses: [],
        favoriteProducts: [],
        cart: []
      },
  
      /* ====== 6‑cı İSTİFADƏÇİ ============================================= */
      {
        _id: "6",
        firstName: "Zəhra",
        secondName: "Rzayeva",
        profilePicture: "",
        email: "zehra.rzayeva@example.com",
        phoneNumber: "+994505551144",
        gender: "female",
        birthDate: "2002-06-20T00:00:00.000Z",
        balance: 198.9,
        createdAt: "2025-04-07T08:05:00.000Z",
        updatedAt: "2025-06-30T11:55:00.000Z",
        isBlocked: false,
        isDeleted: false,
        favoriteProducts: [
          {
            _id: "p301",
            name: { az: "Espresso" },
            code: "ES‑005",
            price: 3,
            discount: { percentage: 0 },
            imageUrls: []
          }
        ],
        cart: [
          {
            _id: "c6",
            product: {
              _id: "p302",
              name: { az: "Americano" },
              code: "AM‑006",
              price: 3.5,
              discount: { percentage: 5 },
              imageUrls: []
            },
            quantity: 3
          }
        ]
      }
    ]
  };
  
  

  
    const imgUrl = `${import.meta.env.VITE_API_IMAGE_URL}/public/uploads/users/profile_pictures`;

  return (
    <div className="wrapper-admin wallet pb-8">
      <header className="header flex items-center justify-between pe-10">
        <h1 className="header-title">İstifadəçilər</h1>
        <div className="flex items-center gap-4">
          {/* Filter Header */}
          <input
            type="text"
            placeholder="İstifadəçiləri axtar..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="px-4 py-2 lg:block hidden border rounded-lg min-w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </header>
      <main className="md:mt-8 mt-12 overflow-auto flex flex-col poppins">
        {/* Products Table */}
        <table className="min-w-[750px]">
          <thead>
            <tr>
              <th>Id</th>
              <th>Adı</th>
              <th>Profil şəkli</th>
              <th>E-mail</th>
              <th>Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody>
            {user?.users?.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.firstName} {user.secondName}</td>
                <td className="flex justify-center ">
                  <img
                    className="w-[60px] max-w-[60px] max-h-[60px] h-[60px] object-cover border-[1.2px] border-[#00704ba5] cursor-pointer rounded-lg transition-all duration-300
        ring-2 ring-gray-100 hover:ring-4 hover:ring-emerald-100"
                    src={user.profilePicture ? `${imgUrl}/${user.profilePicture}` : `https://ui-avatars.com/api/?name=${user.firstName}+${user.secondName}&background=random`}
                    alt={user.firstName}
                    onClick={() => user.profilePicture && handleImageClick(user.profilePicture)}
                  />
                </td>
                <td>{user.email}</td>
                <td className="space-x-3 min-w-64">
                  <button
                    title="Ətraflı məlumat"
                    className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-200 hover:scale-105"
                    onClick={() => handleShowDetails(user)}
                  >
                    <FiEye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Render Image Modal if needed */}
        {selectedImage && (
          <ImageModal
            imageUrl={selectedImage}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
        <AnimatePresence>
          {modalData && (
            <UserModal data={modalData} onClose={() => setModalData(null)} />
          )}
        </AnimatePresence>
      </main>
        {data?.users?.length > 0 && (
            <Pagination
                currentPage={currentPage}
                getPaginationRange={getPaginationRange}
                data={data?.pagination}
                setCurrentPage={setCurrentPage}
                isFetching={isFetching}
              />
            )}
         <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                slides={[{ src: imageSrc }]}
                plugins={[Thumbnails, Fullscreen]}
                carousel={{ finite: true }}
                render={{
                  buttonPrev: () => null,
                  buttonNext: () => null
                }}
              />
    </div>
  );
};

export default AdminUserPage;
