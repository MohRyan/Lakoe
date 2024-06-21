import { ILoginForm } from "@/lib/validation/useLoginValidation";
import { useAppDispatch } from "@/redux";
import { loginAsync } from "@/redux/async/authAsync";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";

interface IProps {
  reset: () => void;
}

export const useLoginFunction = ({ reset }: IProps) => {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    dispatch(loginAsync(data));
    reset();
  };

  const onErrorSubmit: SubmitErrorHandler<ILoginForm> = (data) => {
    console.error(data);
  };

  return {
    onSubmit,
    onErrorSubmit,
  };
};
