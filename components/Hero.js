import Image from 'next/image'

import imgHero from '../images/hero-home.jpg'

const Hero = () => (
  <div className="bg-gray-50 h-[75vh] laptop:h-screen flex items-center overflow-hidden relative">
    <Image src={imgHero} alt="" layout="fill" objectFit="cover" />
  </div>
)

export default Hero
