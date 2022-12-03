import { Options, Wrapper } from './styles';
import { TfiRuler } from 'react-icons/tfi';
import { SiOpenstreetmap } from 'react-icons/si';
import { RiRestaurantLine } from 'react-icons/ri';
import { BsInfoCircle } from 'react-icons/bs';

function AnimalCard({ animal, modalHandler }) {
  return (
    <Wrapper>
      <h3>{animal.name}</h3>
      <img
        src={animal.image}
        alt={animal.name}
        onClick={() =>
          modalHandler(() => ({
            type: 'image',
            name: animal.name,
            info: animal.image,
            state: true,
          }))
        }
      />
      <Options>
        <TfiRuler
          onClick={() =>
            modalHandler(() => ({
              type: 'info',
              name: animal.name,
              info: animal.height,
              state: true,
              value: 'Altura',
            }))
          }
        />
        <SiOpenstreetmap
          onClick={() =>
            modalHandler(() => ({
              type: 'info',
              name: animal.name,
              info: animal.habitat,
              state: true,
              value: 'Habitat',
            }))
          }
        />
        <RiRestaurantLine
          onClick={() =>
            modalHandler(() => ({
              type: 'info',
              name: animal.name,
              info: animal.feeding,
              state: true,
              value: 'Alimentación',
            }))
          }
        />
        <BsInfoCircle
          onClick={() =>
            modalHandler(() => ({
              type: 'info',
              name: animal.name,
              info: animal.description,
              state: true,
              value: 'Descripción',
            }))
          }
        />
      </Options>
    </Wrapper>
  );
}

export default AnimalCard;
