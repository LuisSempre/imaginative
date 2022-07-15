import Image from 'next/image'
import logo from '../images/logos/logo.png'
export function Logo(props) {
  return <Image src={logo} alt="Picture of the author" />
}
