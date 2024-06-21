import { Button } from "@mui/material";

interface UnderlineButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const UnderlineButtonProps: React.FC<UnderlineButtonProps> = ({
  label,
  isActive,
  onClick,
}) => (
  <Button
    onClick={onClick}
    sx={{
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "black" : "gray",
    }}
  >
    {label}
  </Button>
);

export default UnderlineButtonProps;
