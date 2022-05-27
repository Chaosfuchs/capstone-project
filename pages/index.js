import { Title } from '../components/Header';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Title>Welcome to RPG 4-you</Title>
      <p>This is a Testline. Can you read this?</p>
      <Navbar />
    </>
  );
}
