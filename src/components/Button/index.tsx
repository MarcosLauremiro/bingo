import { StyledButton } from "./style";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "submit" | "button" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};
