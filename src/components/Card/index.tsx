import React, { useState } from "react";
import {
  BingoCell,
  BingoGrid,
  BingoLetter,
  Container,
  Content,
  Header,
} from "./style";

interface ColsType {
  B: number[];
  I: number[];
  N: number[] | string[];
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

  cols.N[2] = "Free";
  return cols;
};

export const Card: React.FC = () => {
  const [numbers] = useState(generateBingoNumbers());
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());

  const handleCellClick = (cellKey: string) => {
    setSelectedCells((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cellKey)) {
        newSet.delete(cellKey);
      } else {
        newSet.add(cellKey);
      }
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
          {["B", "I", "N", "G", "O"].map((letter, colIndex) => (
            <div className="column" key={letter}>
              {numbers[letter as keyof typeof numbers].map((num, rowIndex) => {
                const cellkey = `${letter}-${rowIndex}`;
                return (
                  <BingoCell
                    key={cellkey}
                    onClick={() => handleCellClick(cellkey)}
                    $selected={selectedCells.has(cellkey)}
                    $isFree={num === "FREE"}
                  >
                    {num}
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
