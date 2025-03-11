import React, { useRef } from "react";
import { Bingo, Button, Container, Content, Form, InputBingo } from "./style";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      localStorage.setItem("@name-game", inputRef.current.value);
      navigate("/jogo");
    }
  };

  return (
    <Container>
      <Content>
        <Bingo>BINGO</Bingo>
        <Form onSubmit={handleSubmit}>
          <InputBingo ref={inputRef} type="text" placeholder="Seu nome" />
          <Button onClick={(e) => e.preventDefault} type="submit">
            <FaPlay size={20} />
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
