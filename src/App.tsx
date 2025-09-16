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


      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <label htmlFor='meuInput'>Task:</label>
            <input id='meuInput' type='text' />
          </div>

          <div className='formRow'>
            <p>Nesse ciclo foque por 60 min.</p>
          </div>

          <div className='formRow'>
            <p>Cliclos:</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button type='submit'>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
