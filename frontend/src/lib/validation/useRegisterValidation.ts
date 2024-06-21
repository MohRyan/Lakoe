import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IRegisterForm {
  name: string;
  phone: string;
  role: string;
  email: string;
  password: string;
}

const useRegisterValidation = () => {
  const initialValue: IRegisterForm = {
    name: "",
    phone: "",
    role: "",
    email: "",
    password: "",
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    role: yup.string().required(),
    email: yup.string().required(),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  return useForm<IRegisterForm>({
    defaultValues: initialValue,
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });
};

export default useRegisterValidation;
