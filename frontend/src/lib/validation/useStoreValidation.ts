import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IStoreForm {
  name: string;
  accountBankName: string;
  nameBank: string[];
}

export const useStoreValidation = () => {
  const initialValue: IStoreForm = {
    name: "",
    accountBankName: "",
    nameBank: [],
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    accountBankName: yup.string().required(),
    nameBank: yup.array().required(),
  });

  return useForm<IStoreForm>({
    defaultValues: initialValue,
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });
};

export interface IStoreUpdateForm {
  name?: string | null;
  slogan: string;
  description: string;
  domain: string;
  // logoAttachment: File | null;
  // bannerAttachment: File | null;
}

// Define the image validation schema
// const imageSchema = yup
//   .mixed<File>()
//   .required("An image is required")
//   .nullable();
// .test(
//   "fileSize",
//   "File size is too large",
//   (value: File | null) => !value || value.size <= 100000
// ) // 2MB size limit
// .test(
//   "fileType",
//   "Unsupported file format",
//   (value: File | null) =>
//     !value || ["image/jpeg", "image/png", "image/gif"].includes(value?.type)
// );

// Define the main validation schema
const schema = yup.object().shape({
  name: yup.string().nullable(),
  slogan: yup.string().required("Slogan is required"),
  description: yup.string().required("Description is required"),
  domain: yup.string().required("Domain is required"),
  // logoAttachment: imageSchema,
  // bannerAttachment: imageSchema,
});

// Hook for using the form with validation
export const useStoreUpdateValidation = () => {
  const initialValue: IStoreUpdateForm = {
    name: "",
    slogan: "",
    description: "",
    domain: "",
    // logoAttachment: null,
    // bannerAttachment: null,
  };

  return useForm<IStoreUpdateForm>({
    defaultValues: initialValue,
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });
};
