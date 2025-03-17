import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 350px;
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
  gap: 5px;
  text-align: center;
  margin-bottom: 5px;

  h1 {
    margin: 0;
    font-size: 2.5rem;
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

export const BingoCell = styled.div<{ $selected: boolean; $isFree: boolean }>`
  aspect-ratio: 1;
  background: ${({ theme, $selected, $isFree }) =>
    $isFree
      ? theme.colors.tertiary
      : $selected
      ? theme.colors.secondary
      : theme.colors.neutral};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({ theme, $selected, $isFree }) =>
    $selected || $isFree ? theme.colors.neutral : theme.colors.primary};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px ${({ theme }) => theme.colors.primary}20;
  }

  &:active {
    transform: scale(0.95);
  }
`;
