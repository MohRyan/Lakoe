// import { useAppDispatch } from "@/redux";
// import { loginAsync } from "@/redux/async/authAsync";
import { API } from "@/lib/api";
import { IRegisterForm } from "@/lib/validation/useRegisterValidation";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface IProps {
  reset: () => void;
}

export const useRegisterFunction = ({ reset }: IProps) => {
  const navigate = useNavigate();

  const [isSeller, setIsSeller] = useState(false);
  const [dataUser, setDataUser] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    if (data.role === "Seller") {
      const res = await API.post("/auth/register", data);
      setIsSeller(true);
      const response = await API.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
      const token = response.data.token;
      localStorage.setItem("register", token);
      setDataUser({ email: data.email, password: data.password });
      reset();
      return res;
    }
    const res = await API.post("/auth/register", data);
    navigate("/auth/login");
    reset();
    return res;
  };

  const onErrorSubmit: SubmitErrorHandler<IRegisterForm> = (data) => {
    console.error(data);
  };

  return {
    dataUser,
    isSeller,
    onSubmit,
    onErrorSubmit,
  };
};
