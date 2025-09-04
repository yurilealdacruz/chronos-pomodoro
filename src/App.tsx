import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Heading attr='String' sttr2={123} >Olá Mundo!</Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        delectus quaerat aperiam rem voluptas porro quia voluptatum
        necessitatibus dolores dicta iusto doloribus eaque, quas placeat, ea
        impedit. Laboriosam, consectetur beatae?
      </p>
    </>
  );
}

