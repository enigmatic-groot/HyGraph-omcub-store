import React from "react"

const Section = ({ children, className = "", isHero = false }) => {
  return (
    <>
      <section
        className={`laptop:py-[120px] tablet:py-24 py-16 mx-auto ${className}`}
      >
        {isHero ? (
          <div className="pt-[72px] laptop:pt-[85px]">{children}</div>
        ) : (
          children
        )}
      </section>
    </>
  )
}

export default Section
