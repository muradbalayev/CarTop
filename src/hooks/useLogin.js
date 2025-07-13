import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTokens } from "../redux/slices/authSlice";

// useLogin.js
const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const login = async (username, password, rememberMe, returnResult = false) => {
    try {
      // Only show global loading after successful login
      // We'll handle the button loading state in the component
      const url = `${import.meta.env.VITE_API_GLOBAL_URL}/admin/auth/login`

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        // If returnResult is true, return an object instead of throwing an error
        if (returnResult) {
          return { success: false, error: { message: "Login failed" } };
        }
        throw new Error("Login failed");
      }

      const data = await response.json();
      const { refreshToken, accessToken } = data.tokens;

      dispatch(
        setTokens({
          accessToken,
          refreshToken,
          role: "admin",
        })
      );

      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("refreshToken", refreshToken);
      storage.setItem("role", "admin");

      // Clear opposite storage
      const oppositeStorage = rememberMe ? sessionStorage : localStorage;
      oppositeStorage.removeItem("refreshToken");


      toast.success(`Admin logged in.`);


      navigate("/admin/dashboard");
      
      
      // Return success result if returnResult is true
      if (returnResult) {
        return { success: true };
      }
    } catch (error) {
      // If returnResult is true, return an error object instead of showing a toast
      toast.error(error.message || "Login failed");
      if (returnResult) {
        return { success: false, error: { message: error.message || "Login failed" } };
      }
      
      console.error(error);
    }
  };
  return login;
};

export default useLogin;
