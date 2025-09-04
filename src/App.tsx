import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  console.log('Olá, mundo!');
  return (
    <>
      <Heading>Olá Mundo!</Heading>
      <Heading>Olá Mundo! 2</Heading>
      <Heading>Olá Mundo! 3</Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        delectus quaerat aperiam rem voluptas porro quia voluptatum
        necessitatibus dolores dicta iusto doloribus eaque, quas placeat, ea
        impedit. Laboriosam, consectetur beatae?
      </p>
    </>
  );
}

