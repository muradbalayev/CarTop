import '../../styles/Admin/AdminLogin.css'
import loginbg from '../../assets/images/hero5.webp'
import React, { useState } from 'react';
// import logo from '../../assets/logo.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import useLogin from '../../hooks/useLogin';
import { Link } from 'react-router-dom';

const AdminLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const login = useLogin(true); // Pass true for admin login

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // The login function will handle its own errors
        await login(username, password, rememberMe)
            .finally(() => {
                // If we're still on this page, reset loading state
                // This will execute if navigation doesn't happen (login failed)
                setIsLoading(false);
            });
    }

    return (
        <div className='relative w-full h-screen flex justify-center items-center'>
            <div style={{ backgroundImage: `url(${loginbg})` }}
                className='lg:flex hidden container__left w-1/2 h-full  justify-center items-center border-r border-black'>
               <div className='flex flex-col gap-4 items-center'>
                <h1 className="text-3xl font-bold text-gray-900 mb-2 inter">CarTop</h1>
                {/* <img src={logo} className='object-fit max-w-[250px]' alt="logo" /> */}
            <Link to="/" className="text-[#f55f55]">Return Home</Link>
               </div>
            </div>

            <div className='container__right lg:w-1/2 w-full flex justify-center items-center flex-col bg-gradient-to-br from-gray-50 to-gray-100 h-full relative overflow-hidden'>
                {/* Decorative geometric shapes */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-red-500/10 rotate-45 transform-gpu"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 bg-black/5 transform-gpu"></div>
                <div className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-red-300/30 transform-gpu"></div>
                <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-black/10 rotate-12 transform-gpu"></div>
                
                {/* Diagonal lines */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <svg width="100%" height="100%" className="opacity-10">
                        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1" />
                        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#000" strokeWidth="1" />
                    </svg>
                </div>
                
                <div className="bg-white p-8 shadow-lg w-[420px] max-w-[90%] border-0 relative z-10">
                    {/* Red geometric accents */}
                    <div className="absolute top-0 left-0 w-24 h-3 bg-red-500"></div>
                    <div className="absolute top-0 left-0 w-3 h-24 bg-red-500"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-3 bg-black"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-24 bg-black"></div>
                    <div className="flex flex-col items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2 inter">Admin Panel</h1>
                        <div className="h-1 w-16 bg-red-500 rounded-full"></div>
                    </div>
                    
                    <form 
                        className="flex flex-col w-full"
                        onSubmit={handleLogin}
                    >
                        <div className="mb-5">
                            <label className="block text-gray-700 text-sm font-medium mb-2 ml-1 inter">İstifadəçi adı</label>
                            <div className="relative">
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border-0 border-l-2 border-gray-300 focus:border-l-red-500 bg-gray-50 transition-all duration-200 outline-none inter" 
                                    placeholder="İstifadəçi adınızı daxil edin" 
                                />
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <div className="w-5"></div> {/* Spacer for consistent padding */}
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-2 ml-1 inter">Şifrə</label>
                            <div className="relative">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={type ? "text" : "password"}
                                    required
                                    className="w-full px-4 py-3 border-0 border-l-2 border-gray-300 focus:border-l-red-500 bg-gray-50 transition-all duration-200 outline-none inter" 
                                    placeholder="Şifrənizi daxil edin" 
                                />
                                <span 
                                    className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors' 
                                    onClick={() => setType(!type)}
                                >
                                    {type ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex items-center mb-6">
                            <div 
                                className="flex items-center cursor-pointer" 
                                onClick={() => setRememberMe(!rememberMe)}
                            >
                                <div className="relative mr-3">
                                    <input
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        type="checkbox" 
                                        className="hidden inter" 
                                    />
                                    <div className="checkbox-wrapper-31">
                                        <input type="checkbox" checked={rememberMe} readOnly />
                                        <svg viewBox="0 0 35.6 35.6">
                                            <circle className="background" cx="17.8" cy="17.8" r="17.8" fill={rememberMe ? "#000" : "#ccc"}></circle>
                                            <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                            <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87" style={{ strokeDashoffset: rememberMe ? 0 : 22 }}></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-gray-700 text-sm mb-2 inter">Məni xatırla</span>
                            </div>
                        </div>
                        
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-black hover:bg-gray-800 text-white font-medium transition-all duration-200 flex justify-center items-center shadow-md hover:shadow-lg relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-0 h-full bg-red-500 transition-all duration-300 group-hover:w-full z-0"></div>
                            <span className="relative z-10 flex items-center gap-2 inter">
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="animate-spin" />
                                        Daxil olunur...
                                    </>
                                ) : (
                                    "Daxil ol"
                                )}
                            </span>
                            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 bg-red-500"></div>
                        </button>
                        
                        <div className="mt-6 text-center">
                            <Link to="/" className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors inter">
                                Ana səhifəyə qayıt
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
