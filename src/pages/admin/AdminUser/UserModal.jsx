import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaAddressBook, FaHeart, FaShoppingCart, FaUser, FaEnvelope, FaPhone, FaLock, FaMapMarkerAlt, FaHome, FaCity, FaInfoCircle } from "react-icons/fa";

const UserModal = ({ data, onClose }) => {
  const modalRef = useRef();
  const [activeTab, setActiveTab] = useState('info');

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Animation variants
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

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
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
          ref={modalRef}
          className="bg-white overflow-y-auto max-h-[800px] rounded-2xl px-8 py-10 max-w-2xl w-full relative border border-gray-100 shadow-2xl"
          variants={modalVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <IoClose
              className="text-gray-400 hover:text-gray-600 transition-colors"
              size={24}
              onClick={onClose}
            />
          </motion.div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header Section */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between mb-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-200">
                  <img 
                    src={data.profilePicture ? `${import.meta.env.VITE_API_IMAGE_URL}/public/uploads/users/profile_pictures/${data.profilePicture}` : `https://ui-avatars.com/api/?name=${data.firstName}+${data.secondName}&background=random`}
                    alt={data.firstName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {data.firstName} {data.secondName}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaEnvelope size={12} />
                    <span>{data.email || 'No email'}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className={`px-3 py-1 text-xs rounded-full ${data.isBlocked ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {data.isBlocked ? 'Blocked' : 'Active'}
                </span>
                <span className={`px-3 py-1 text-xs rounded-full ${data.isDeleted ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                  {data.isDeleted ? 'Deleted' : 'Available'}
                </span>
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div variants={itemVariants} className="flex border-b mb-6">
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'info' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('info')}
              >
                Əsas məlumat
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'favorites' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('favorites')}
              >
                Favoritlər ({data.favoriteProducts?.length || 0})
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'cart' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('cart')}
              >
                Səbət ({data.cart?.length || 0})
              </button>
            </motion.div>

            <div className="max-h-[600px] overflow-y-auto">
              {activeTab === 'info' && (
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 gap-6 mb-8"
                >
                  {/* Basic Info Section */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaUser className="text-purple-600" /> İstifadəçi məlumatları
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Ad</span>
                        <p className="text-gray-800 font-medium">{data.firstName}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Soyad</span>
                        <p className="text-gray-800 font-medium">{data.secondName}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Email</span>
                        <p className="text-gray-800 font-medium">{data.email || 'Təyin edilməyib'}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Telefon</span>
                        <p className="text-gray-800 font-medium">{data.phoneNumber || 'Təyin edilməyib'}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Cins</span>
                        <p className="text-gray-800 font-medium capitalize">{data.gender || 'Təyin edilməyib'}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Doğum tarixi</span>
                        <p className="text-gray-800 font-medium">
                          {data.birthDate ? new Date(data.birthDate).toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Təyin edilməyib'}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Account Info Section */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaLock className="text-purple-600" /> Hesab məlumatları
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Hesab ID</span>
                        <p className="text-gray-800 font-medium">{data._id}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Balans</span>
                        <p className="text-gray-800 font-medium">{data.balance || 0} ₼</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Qeydiyyat tarixi</span>
                        <p className="text-gray-800 font-medium">
                          {new Date(data.createdAt).toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Son yenilənmə</span>
                        <p className="text-gray-800 font-medium">
                          {new Date(data.updatedAt).toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Bloklanma statusu</span>
                        <p className={`font-medium ${data.isBlocked ? 'text-red-600' : 'text-green-600'}`}>
                          {data.isBlocked ? 'Bloklanıb' : 'Aktiv'}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Silinmə statusu</span>
                        <p className={`font-medium ${data.isDeleted ? 'text-red-600' : 'text-green-600'}`}>
                          {data.isDeleted ? 'Silinib' : 'Aktiv'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'favorites' && (
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 gap-6 mb-8"
                >
                  <motion.div
                    variants={itemVariants}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaHeart className="text-purple-600" /> Favoritlər
                    </h3>
                    
                    {data.favoriteProducts && data.favoriteProducts.length > 0 ? (
                      <div className="grid grid-cols-1 gap-4">
                        {data.favoriteProducts.map((product) => (
                          <div key={typeof product === 'object' ? product._id : product} 
                               className="border border-gray-200 rounded-lg p-4 bg-white">
                            <div className="flex flex-col md:flex-row gap-4">
                              {/* Product Image */}
                              <div className="w-24 h-24 min-w-[6rem] aspect-square">
                                {typeof product === 'object' && product.imageUrls && product.imageUrls.length > 0 ? (
                                  <img
                                    src={`${import.meta.env.VITE_API_IMAGE_URL}/public/uploads/products/${product.imageUrls[0]}`}
                                    alt={product.name?.az || "Product"}
                                    className="w-full h-full object-cover rounded-md aspect-square"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center aspect-square">
                                    <span className="text-gray-500 text-xs">No image</span>
                                  </div>
                                )}
                              </div>
                              
                              {/* Product Details */}
                              <div className="flex-1">
                                {typeof product === 'object' ? (
                                  <>
                                    <h4 className="font-medium text-gray-800">
                                      {product.name?.az || "Unknown Product"}
                                    </h4>
                                    <div className="text-sm text-gray-500 mt-1">
                                      Kod: {product.code || "N/A"}
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                      <div className="text-sm">
                                        <span className="text-gray-500">Qiymət:</span>{" "}
                                        <span className="font-medium">{product.price} AZN</span>
                                      </div>
                                      {product.discount && product.discount.percentage > 0 && (
                                        <div className="text-sm">
                                          <span className="text-gray-500">Endirim:</span>{" "}
                                          <span className="font-medium text-green-600">{product.discount.percentage}%</span>
                                        </div>
                                      )}
                                    </div>
                                  </>
                                ) : (
                                  <div className="flex items-center h-full">
                                    <span className="text-gray-700 font-medium">Məhsul ID: {product}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        İstifadəçinin favorit məhsulu yoxdur
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'cart' && (
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 gap-6 mb-8"
                >
                  <motion.div
                    variants={itemVariants}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaShoppingCart className="text-blue-600" /> Səbət
                    </h3>
                    
                    {data.cart && data.cart.length > 0 ? (
                      <div className="grid grid-cols-1 gap-4">
                        {data.cart.map((cartItem, index) => (
                          <div key={cartItem._id || index} className="border border-gray-200 rounded-lg p-4 bg-white">
                            <div className="flex flex-col md:flex-row gap-4">
                              {/* Product Image */}
                              <div className="w-24 h-24 min-w-[6rem] aspect-square">
                                {cartItem.product && typeof cartItem.product === 'object' && cartItem.product.imageUrls && cartItem.product.imageUrls.length > 0 ? (
                                  <img
                                    src={`${import.meta.env.VITE_API_IMAGE_URL}/public/uploads/products/${cartItem.product.imageUrls[0]}`}
                                    alt={cartItem.product.name?.az || "Product"}
                                    className="w-full h-full object-cover rounded-md aspect-square"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center aspect-square">
                                    <span className="text-gray-500 text-xs">No image</span>
                                  </div>
                                )}
                              </div>
                              
                              {/* Product Details */}
                              <div className="flex-1">
                                {cartItem.product && typeof cartItem.product === 'object' ? (
                                  <>
                                    <h4 className="font-medium text-gray-800">
                                      {cartItem.product.name?.az || "Unknown Product"}
                                    </h4>
                                    <div className="text-sm text-gray-500 mt-1">
                                      Kod: {cartItem.product.code || "N/A"}
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                      <div className="text-sm">
                                        <span className="text-gray-500">Qiymət:</span>{" "}
                                        <span className="font-medium">{cartItem.product.price} AZN</span>
                                      </div>
                                      <div className="text-sm">
                                        <span className="text-gray-500">Say:</span>{" "}
                                        <span className="font-medium text-blue-600">{cartItem.quantity || 1}</span>
                                      </div>
                                      <div className="text-sm">
                                        <span className="text-gray-500">Cəmi:</span>{" "}
                                        <span className="font-medium">{(cartItem.product.price * (cartItem.quantity || 1)).toFixed(2)} AZN</span>
                                      </div>
                                      {cartItem.product.discount && cartItem.product.discount.percentage > 0 && (
                                        <div className="text-sm">
                                          <span className="text-gray-500">Endirim:</span>{" "}
                                          <span className="font-medium text-green-600">{cartItem.product.discount.percentage}%</span>
                                        </div>
                                      )}
                                    </div>
                                  </>
                                ) : (
                                  <div className="flex items-center h-full">
                                    <span className="text-gray-700 font-medium">
                                      Məhsul ID: {typeof cartItem.product === 'string' ? cartItem.product : cartItem._id}
                                      {cartItem.quantity && <span className="ml-2 text-blue-600">(Say: {cartItem.quantity})</span>}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        İstifadəçinin səbətində məhsul yoxdur
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UserModal;
