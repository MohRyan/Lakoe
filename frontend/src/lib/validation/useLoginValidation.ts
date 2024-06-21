import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export interface ILoginForm {
  email: string;
  password: string;
}

const useLoginValidation = () => {
  const initialValue: ILoginForm = {
    email: "",
    password: "",
  };

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  return useForm<ILoginForm>({
    defaultValues: initialValue,
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });
};

export default useLoginValidation;
