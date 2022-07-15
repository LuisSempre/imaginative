import Image from 'next/image'
import logotipo from '../images/logos/logotipo.png'
export function Logo() {
  return <Image src={logotipo} width={200} height={32} alt="Logo" />
}
