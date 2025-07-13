import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
// import { useLoading } from '../contexts/LoadingContext';

const PublicRoute = ({ children, requiredRole }) => {
    const { accessToken, role } = useSelector((state) => state.auth);
    const location = useLocation();
    // const { authLoaded } = useLoading();
    
    // Wait for authentication to be fully loaded before making any routing decisions
    // if (!authLoaded) {
    //     return (
    //         <div style={{zIndex: 9999}} className="w-full inset-0 fixed h-screen flex flex-col items-center justify-center bg-white">
    //             <div className="w-[230px] h-[2px] bg-gray-200 relative overflow-hidden">
    //                 <div className="absolute top-0 left-0 h-full w-1/2 bg-red-500 animate-loading-bar"></div>
    //             </div>
    //         </div>
    //     );
    // }
    
    // Now that auth is loaded, we can safely check the authentication state
    if (accessToken && role === requiredRole) {
        // If user is authenticated, redirect to dashboard
        return <Navigate to="/admin/dashboard" state={{ from: location }} replace />;
    }

    // If user is not authenticated, show the login page
    return children;
};

export default PublicRoute;