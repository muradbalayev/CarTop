import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { clearTokens } from "../redux/slices/authSlice";
import { clearUser } from "../redux/slices/userSlice";

const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Çıxış etmək istədiyinizə əminsiniz?",
      text: "Bu əməliyyatı geri qaytarmaq olmayacaq!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0C0C0C",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli, çıxış et",
      cancelButtonText: "İmtina et",
    });

    if (result.isConfirmed) {
      dispatch(clearTokens());
      dispatch(clearUser());

      localStorage.removeItem("refreshToken");
      sessionStorage.removeItem("refreshToken");
      localStorage.removeItem("role");
      sessionStorage.removeItem("role");

      toast.success(`Çıxış edildi.`);
      navigate("/");
    }
  };

  return logout;
};

export default useLogout;
