import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 2rem auto;
  padding: 20px;
  background: ${({ theme }) => theme.colors.neutral};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  text-align: center;
  margin-bottom: 5px;

  h1 {
    margin: 0;
    font-size: 3.5rem;
    display: contents;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BingoLetter = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
`;

export const BingoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;

  .column {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const BingoCell = styled.div.attrs<{
  $selected: boolean;
  $isStatic: boolean;
  $isInteractive: boolean;
}>((props) => ({}))`
  aspect-ratio: 1;
  background: ${({ theme, $selected, $isStatic }) =>
    $isStatic
      ? theme.colors.tertiary
      : $selected
      ? theme.colors.secondary
      : theme.colors.neutral};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: .8rem;
  transition: all 0.2s ease;
  position: relative;
  width: 80px;
  height: 80px;
  cursor: ${({ $isInteractive }) => ($isInteractive ? "pointer" : "default")};
  color: ${({ theme, $selected, $isStatic }) =>
    $selected || $isStatic ? theme.colors.neutral : theme.colors.primary};

  &:hover {
    transform: ${({ $isInteractive }) =>
      $isInteractive ? "scale(1.05)" : "none"};
    box-shadow: ${({ $isInteractive, theme }) =>
      $isInteractive ? `0 2px 8px ${theme.colors.primary}20` : "none"};
  }

  .selection-indicator {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.tertiary};
  }

  svg {
    width: 40%;
    height: 40%;
  }
`;
