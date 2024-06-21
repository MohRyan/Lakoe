// import { useAppDispatch } from "@/redux";
// import { loginAsync } from "@/redux/async/authAsync";
import { API } from "@/lib/api";
import {
  IStoreForm,
  IStoreUpdateForm,
} from "@/lib/validation/useStoreValidation";
import { useAppDispatch } from "@/redux";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { loginAsync } from "@/redux/async/authAsync";
// import { useNavigate } from "react-router-dom";

interface IProps {
  reset: () => void;
  dataUser?: { email: string; password: string };
}

export const useStoreFunction = ({ reset }: IProps) => {
  const [isStoreUpdate, setIsStoreUpdate] = useState(false);

  const onSubmit: SubmitHandler<IStoreForm> = async (data) => {
    console.log("🚀 ~ constonSubmit:SubmitHandler<IStoreForm>= ~ data:", data);
    const token = localStorage.getItem("register");
    const res = await API.post("/stores", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setIsStoreUpdate(true);
    reset();
    return res;
  };

  const onErrorSubmit: SubmitErrorHandler<IStoreForm> = (data) => {
    console.error(data);
  };

  return {
    isStoreUpdate,
    onSubmit,
    onErrorSubmit,
  };
};

export const useStoreUpdateFunction = ({ reset, dataUser }: IProps) => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [imageLogo, setImageLogo] = useState<any>(null);
  const [imageBanner, setImageBanner] = useState<any>(null);

  // const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   console.log("🚀 ~ handleLogo ~ files:", file);
  //   // const image = URL.createObjectURL(file!);
  //   setImageLogo(URL.createObjectURL(file!));
  //   // console.log("🚀 ~ handleLogo ~ img:", image);
  // }

  const onSubmit: SubmitHandler<IStoreUpdateForm> = async (data) => {
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<IStoreUpdateForm>= ~ data:",
      data
    );
    const email = dataUser?.email;
    const password = dataUser?.password;
    dispatch(loginAsync({ email, password }));
    // const res = await API.post("/auth/register", data);
    // navigate("/auth/login");
    reset();
    // return res;
  };

  const onErrorSubmit: SubmitErrorHandler<IStoreUpdateForm> = (data) => {
    console.error(data);
  };

  return {
    imageLogo,
    setImageLogo,
    imageBanner,
    setImageBanner,
    onSubmit,
    onErrorSubmit,
  };
};
