import { Card } from "../../components/Card";
import { Raffle } from "../../components/Raffle";
import { Container, Content, Header } from "./style";

export const Game: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header></Header>
        <Raffle />
        <Card />
      </Content>
    </Container>
  );
};
