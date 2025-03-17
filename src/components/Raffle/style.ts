import styled from "styled-components";

export const Container = styled.div`
  max-width: 350px;
  width: 100%;
  margin: 2rem auto;
  padding: 20px;

  display: flex;
  gap: 20px;

  background: ${({ theme }) => theme.colors.neutral};

  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const RaffleButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    gap: 40px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.2s ease;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
    transform: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const NumerosSorteadosLista = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 12px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

  height: 150px;
  width: 190px;

`;

export const NumeroSorteado = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;
