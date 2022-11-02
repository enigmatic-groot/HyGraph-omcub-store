import Image from 'next/image'

const Hero = ({ imgSrc }) => (
  <div className="bg-neutral-50 h-[75vh] laptop:h-screen flex items-center overflow-hidden relative">
    <Image src={imgSrc} alt="" layout="fill" objectFit="cover" />
  </div>
)

export default Hero
