import Image from 'next/image'
import Container from '@/components/Container'

const HeroCards = ({ hero_cards }) => {
  return (
    <div className="bg-neutral-100">
      <Container>
        <div className="grid grid-cols-3 laptop:gap-28">
          {hero_cards[0] &&
            hero_cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col items-center gap-6 p-5 laptop:flex-row"
              >
                <div>
                  <Image src={card.icon.url} width={68} height={68} />
                </div>
                <div className="font-bold">{card.text}</div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default HeroCards
