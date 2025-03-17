import { Button, ModalContainer, ModalContent, ModalOverlay } from "./style";

interface ModalProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  onConfirm,
  onCancel,
  title,
}) => (
  <ModalOverlay>
    <ModalContainer>
      <ModalContent>
        <p>{title}</p>
        <Button onClick={onConfirm}>Sim</Button>
        <Button onClick={onCancel}>Não</Button>
      </ModalContent>
    </ModalContainer>
  </ModalOverlay>
);
