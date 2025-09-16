import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/ContainerComponent';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

export function App() {
  return (
    //(React Fragment)sempre tem que ter um container pai encapsulando
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>
    </>
  );
}
