import React, { useEffect, useState } from "react";
import {
  BingoCell,
  BingoGrid,
  BingoLetter,
  Container,
  Content,
  Header,
} from "./style";
import { CiFaceSmile } from "react-icons/ci";

const CACHEBINGO = "bingo-cache";

interface ColsType {
  B: number[];
  I: number[];
  N: Array<number | "FREE">;
  G: number[];
  O: number[];
}

const generateBingoNumbers = () => {
  const cols: ColsType = {
    B: Array.from({ length: 5 }, () => Math.floor(Math.random() * 15) + 1),
    I: Array.from({ length: 5 }, () => Math.floor(Math.random() * 15) + 16),
    N: Array.from({ length: 5 }, () => Math.floor(Math.random() * 15) + 31),
    G: Array.from({ length: 5 }, () => Math.floor(Math.random() * 15) + 46),
    O: Array.from({ length: 5 }, () => Math.floor(Math.random() * 15) + 61),
  };

  cols.N[2] = "FREE";
  return cols;
};

export const Card: React.FC = () => {
  const [numbers, setNumbers] = useState<ColsType>(generateBingoNumbers());
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // dados do cache
  useEffect(() => {
    const loadFromCache = async () => {
      try {
        const cache = await caches.open(CACHEBINGO);
        const response = await cache.match("bingo-data");
        if (response) {
          const data = await response.json();
          setNumbers(data.numbers);
          setSelectedCells(new Set(data.selectedCells));
        }
        console.log(response);
      } catch (error) {
        console.error("Erro ao acessar cache:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadFromCache();
  }, []);

  // salvar dados no cache
  useEffect(() => {
    const saveToCache = async () => {
      try {
        const data = { numbers, selectedCells: [...selectedCells] };
        const response = new Response(JSON.stringify(data));
        const cache = await caches.open(CACHEBINGO);
        await cache.put("bingo-data", response);
      } catch (error) {
        console.error("Erro ao salvar cache:", error);
      }
    };

    if (!isLoading) {
      saveToCache();
    }
  }, [numbers, selectedCells, isLoading]);

  const handleCellClick = (cellKey: string) => {
    setSelectedCells((prev) => {
      const newSet = new Set(prev);
      newSet.has(cellKey) ? newSet.delete(cellKey) : newSet.add(cellKey);
      return newSet;
    });
  };

  return (
    <Container>
      <Content>
        <Header>
          <h1>
            {["B", "I", "N", "G", "O"].map((letter) => (
              <BingoLetter key={letter}>{letter}</BingoLetter>
            ))}
          </h1>
        </Header>

        <BingoGrid>
          {["B", "I", "N", "G", "O"].map((letter) => (
            <div className="column" key={letter}>
              {numbers[letter as keyof typeof numbers].map((num, rowIndex) => {
                const cellKey = `${letter}-${rowIndex}`;
                const isFree =
                  letter === "N" && rowIndex === 2 && num === "FREE";

                return (
                  <BingoCell
                    key={cellKey}
                    onClick={() => !isFree && handleCellClick(cellKey)}
                    $selected={selectedCells.has(cellKey)}
                    $isFree={isFree}
                  >
                    {isFree ? <CiFaceSmile size={60} /> : num}
                  </BingoCell>
                );
              })}
            </div>
          ))}
        </BingoGrid>
      </Content>
    </Container>
  );
};
