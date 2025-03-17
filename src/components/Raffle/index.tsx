import React, { useEffect } from "react";
import {
  Button,
  Container,
  NumeroSorteado,
  NumerosSorteadosLista,
  RaffleButtons,
} from "./style";
import { CiPlay1 } from "react-icons/ci";
import { VscDebugRestart } from "react-icons/vsc";
import { MdOutlineAutorenew, MdOutlinePowerSettingsNew } from "react-icons/md";

const CACHERAFFLE = "bingo-sorteador-cache";

const saveCache = async (key: string, data: number[]) => {
  const cache = await caches.open(CACHERAFFLE);
  const response = new Response(JSON.stringify(data));
  await cache.put(key, response);
};

const getCache = async (key: string): Promise<number[] | null> => {
  const cache = await caches.open(CACHERAFFLE);
  const response = await cache.match(key);
  if (response) {
    const data = await response.json();
    return data;
  }
  return null;
};

export const Raffle: React.FC = () => {
  const [numbers, setNumbers] = React.useState<number[]>([]);
  const [numberDrawn, setNumberDrawn] = React.useState<number | null>(null);
  

  useEffect(() => {
    const savedNumbers = async () => {
      const numeros = await getCache("@numbersDrawn");
      if (numeros) {
        setNumbers(numeros);
      }
    };
    savedNumbers();
  }, []);

  useEffect(() => {
    saveCache("@numbersDrawn", numbers);
  }, [numbers]);

  const handleDrawNumber = () => {
    if (numbers.length === 75) {
      alert("Todos os números já foram sorteados!");
      return;
    }

    let newNumber: number;
    do {
      newNumber = Math.floor(Math.random() * 75) + 1;
    } while (numbers.includes(newNumber));

    setNumberDrawn(newNumber);
    setNumbers((prev) => [...prev, newNumber]);
  };

  const handleRestartRaffle = async () => {
    setNumbers([]);
    setNumberDrawn(null);
    const cache = await caches.open(CACHERAFFLE);
    await cache.delete("@numbersDrawn");
  };

  const handleConfirmRestart = () => {
    if (window.confirm("Deseja realmente reiniciar o sorteio?")) {
      handleRestartRaffle();
    }
  };

  return (
    <Container>
     <NumerosSorteadosLista>
        {numbers
          .slice(-16)
          .reverse()
          .map((numero) => (
            <NumeroSorteado key={numero}>
              {numero}
            </NumeroSorteado>
          ))}
      </NumerosSorteadosLista>
      <RaffleButtons>
        <Button title="sortear numero" onClick={handleDrawNumber} disabled={numbers.length === 75}> 
          <CiPlay1 size={20} />
        </Button>
        <div>
          <Button title="Resetar numeros" onClick={handleConfirmRestart}>
            <VscDebugRestart size={20} />
          </Button>
          <Button>
            <MdOutlineAutorenew />
          </Button>
        </div>
        <Button>
          <MdOutlinePowerSettingsNew />
        </Button>
      </RaffleButtons>
    </Container>
  );
};
