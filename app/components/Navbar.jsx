import Image from 'next/image'
import Logo from '../favicon.ico'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <Image
            src={Logo}
            alt=''
            width={64}
            quality={100}
        />
        <h1>Forecaster</h1>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
    </nav>
  );
}
