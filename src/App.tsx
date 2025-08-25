import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    //sempre tem que ter um container pai encapsulando
    <>
      <Heading attr={2} attr2='string'>
        Meus Ovos
      </Heading>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </>
  );
}
