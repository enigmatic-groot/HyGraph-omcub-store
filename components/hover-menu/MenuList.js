const MenuList = ({ className = '', aside = false, children }) => {
  return (
    <ul
      className={`absolute z-20 flex flex-col py-3 text-left list-none w-[200px] dropdown-menu bg-white shadow-md rounded-bl-lg rounded-br-lg   ${
        aside ? '-top-2 right-0 ' : 'top-full left-0'
      } ${className}`}
    >
      {children}
    </ul>
  )
}

export default MenuList
