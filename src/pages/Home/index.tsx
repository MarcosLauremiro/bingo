import { CiFaceSmile } from "react-icons/ci";
import {
  BingoCell,
  BingoGrid,
  BingoLetter,
  Container,
  Content,
  Header,
  PreHeader,
} from "./style";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import {
  WiHorizonAlt,
  WiMoonWaxingCrescent2,
  WiNightAltSnowThunderstorm,
  WiUmbrella,
} from "react-icons/wi";
import { HiFire } from "react-icons/hi";
import { useThemeStore } from "../../store/theme/themeStore";
import { PiPlant } from "react-icons/pi";
import { VscPerson } from "react-icons/vsc";
import { BiLogOutCircle } from "react-icons/bi";
import { capitalizeFirstLetter } from "../../utils/capitalizerFirst";

interface CellData {
  content: string | number | React.JSX.Element;
  path?: string;
  isStatic?: boolean;
  onClick?: () => void;
}

interface ColsType {
  B: CellData[];
  I: CellData[];
  N: CellData[];
  G: CellData[];
  O: CellData[];
}

export const Home: React.FC = () => {
  const generateMenuCells = () => {
    const cols: ColsType = {
      B: [
        {
          content: <VscPerson />,
          onClick: () => setCurrentTheme("purple"),
        },
        { content: <FaRegPlayCircle />, path: "/game" },
        { content: "Jogar", path: "/game" },
        {
          content: <HiFire />,
          onClick: () => setCurrentTheme("orange"),
        },
        { content: <WiNightAltSnowThunderstorm />, path: "/game" },
      ],
      I: [
        { content: "Jogar", path: "/game" },
        {
          content: <PiPlant />,
          onClick: () => setCurrentTheme("green"),
        },
        {
          content: <WiHorizonAlt />,
          onClick: () => setCurrentTheme("light"),
        },
        { content: <FaRegPlayCircle />, path: "/game" },
        { content: "Jogar", path: "/game" },
      ],
      N: [
        { content: <HiFire />, onClick: () => setCurrentTheme("orange") },
        {
          content: <WiHorizonAlt />,
          onClick: () => setCurrentTheme("light"),
        },
        { content: <CiFaceSmile size={60} />, isStatic: true },
        {
          content: <HiFire />,
          onClick: () => setCurrentTheme("orange"),
        },
        { content: <WiUmbrella />, path: "/game" },
      ],
      G: [
        { content: <WiUmbrella />, path: "/game" },
        {
          content: <VscPerson />,
          onClick: () => setCurrentTheme("purple"),
        },
        {
          content: <WiMoonWaxingCrescent2 />,
          onClick: () => setCurrentTheme("dark"),
        },
        {
          content: <PiPlant />,
          onClick: () => setCurrentTheme("green"),
        },
        {
          content: <BiLogOutCircle />,
          onClick: () => {
            handleLogout();
          },
        },
      ],
      O: [
        { content: "Jogar", path: "/game" },
        { content: <FaRegPlayCircle />, path: "/game" },
        { content: "Jogar", path: "/game" },
        {
          content: <WiMoonWaxingCrescent2 />,
          onClick: () => setCurrentTheme("dark"),
        },
        {
          content: <VscPerson />,
          onClick: () => setCurrentTheme("purple"),
        },
      ],
    };

    return cols;
  };

  const navigate = useNavigate();
  const [cells] = useState(generateMenuCells());
  const [selectedCells] = useState<Set<string>>(new Set());
  const { setCurrentTheme } = useThemeStore();

  const handleLogout = () => {
    localStorage.removeItem("@name-game");
    navigate("/");
  };

  const nameuser = capitalizeFirstLetter(
    localStorage.getItem("@name-game") || ""
  );
  return (
    <Container>
      <PreHeader>
        <h1>Olá, {nameuser}</h1>
      </PreHeader>
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
              {cells[letter as keyof ColsType].map((cell, index) => {
                const cellKey = `${letter}-${index}`;
                const isInteractive = !cell.isStatic;
                const isLink = !!cell.path;

                const cellContent = (
                  <>
                    {cell.content}
                    {selectedCells.has(cellKey) && (
                      <div className="selection-indicator" />
                    )}
                  </>
                );

                return (
                  <BingoCell
                    key={cellKey}
                    as={isLink ? Link : "div"}
                    to={cell.path || ""}
                    $selected={selectedCells.has(cellKey)}
                    $isStatic={!!cell.isStatic}
                    $isInteractive={isInteractive}
                    onClick={cell.onClick}
                  >
                    {cellContent}
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
