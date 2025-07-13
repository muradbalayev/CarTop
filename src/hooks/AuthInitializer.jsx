import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearTokens, setTokens } from "../redux/slices/authSlice";
// import { useLoading } from "../../contexts/LoadingContext";

function AuthInitializer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authLoaded, setAuthLoaded] = useState(false);
  // const { setAuthLoaded } = useLoading();

  // Initialize tokens from storage
  useEffect(() => {
    const storedRole =
      localStorage.getItem("role") || sessionStorage.getItem("role");

    if (storedRole) {
      dispatch(
        setTokens({
          role: storedRole,
          refreshToken:
            localStorage.getItem("refreshToken") ||
            sessionStorage.getItem("refreshToken"),
          accessToken: null,
          authLoaded: true,
        })
      );
    }
  }, [dispatch]);

  // Handle authentication initialization
  useEffect(() => {
    const initializeAuth = async () => {
      const refreshToken =
        localStorage.getItem("refreshToken") ||
        sessionStorage.getItem("refreshToken");
      const role = localStorage.getItem("role") || sessionStorage.getItem("role");

      if (refreshToken && role) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_GLOBAL_URL}/${role}/auth/refresh`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            const { accessToken } = data;

            dispatch(setTokens({ accessToken, refreshToken, role, authLoaded: true }));
          } else {
            clearAuthData();
          }
        } catch (error) {
          console.log("Token refresh failed:", error);
          clearAuthData();
        }
      } else {
        dispatch(clearTokens());
        setAuthLoaded(true);
      }

      setAuthLoaded(true);
    };

    const clearAuthData = () => {
      dispatch(clearTokens());
      localStorage.removeItem("refreshToken");
      sessionStorage.removeItem("refreshToken");
      localStorage.removeItem("role");
      sessionStorage.removeItem("role");
      setAuthLoaded(true);
    };

    initializeAuth();
  }, [dispatch, navigate]);

  // Global loading state istifadə etdiyimiz üçün burada loading göstərmirik
  return null; // This component doesn't render anything
}

export default AuthInitializer;
