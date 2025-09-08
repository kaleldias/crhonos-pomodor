import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/ContainerComponent';
import { Heading } from './components/Heading';

export function App() {
  return (
    //(React Fragment)sempre tem que ter um container pai encapsulando
    <>
      <Container>
        <Heading>HEADER</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
