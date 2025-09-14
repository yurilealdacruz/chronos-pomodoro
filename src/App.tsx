import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/global.css';
import './styles/theme.css';
import { Teste } from './components/Teste';



export function App() {
  return (
    <>
      <Container>
        <Logo/>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>

      <Container>
        <Teste/>
      </Container>
    </>
  );
}
