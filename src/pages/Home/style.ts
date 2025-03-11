import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 100vh;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

export const InputBingo = styled.input`
  padding: 16px 0;
  text-indent: 10px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 250px;
  color: ${({ theme }) => theme.colors.neutral};
  @media (max-width: 768px) {
    width: 150px;
  }

`;

export const Bingo = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: #ff6b6b;
  text-shadow: 1px 1px #e95d5d, 2px 2px #e04444, 3px 3px #d63030,
    4px 4px #bd2424, 5px 5px #7a1c1c;
  transition: transform 0.3s, text-shadow 0.3s;
  letter-spacing: 2px;
  margin: 20px 0;

  &:hover {
    transform: translateY(-2px);
    text-shadow: 2px 2px #e95d5d, 4px 4px #e04444, 6px 6px #d63030,
      8px 8px #bd2424, 10px 10px #7a1c1c;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  /* Opcional: Adicionar contorno */
  -webkit-text-stroke: 1px #d63030;
  text-stroke: 1px #d63030;

  user-select: none;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.neutral};
  height: 100%;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;
