import { Title } from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Title>Welcome to RPG 4-you</Title>
      <Link passHref href="/create-character">
        <a>Go to create your Character</a>
      </Link>
    </>
  );
}
