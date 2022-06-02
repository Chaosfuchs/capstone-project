import { Title } from '../components/Header';
import ShowCharacter from '../components/ShowCharacter';
import Navbar from '../components/Navbar';
import Toast from '../components/Toasts';

export default function Characters() {
  return (
    <>
      <Title>
        <img src={'/LogoDragon.svg'} width="35px" />
        My Characters
      </Title>
      <ShowCharacter />
      <Toast />
      <Navbar />
    </>
  );
}
