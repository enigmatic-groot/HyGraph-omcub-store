import React from "react"

const Container = ({ children, className = "" }) => {
  return (
    <>
      <div
        className={`max-w-full tablet:max-w-[720px] laptop:max-w-[960px] desktop:max-w-[1140px] desktopBig:max-w-[1220px] mx-auto px-5 ${className}`}
      >
        {children}
      </div>
    </>
  )
}
export default Container
