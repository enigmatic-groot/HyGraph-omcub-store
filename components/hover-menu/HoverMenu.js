import MenuItem from './MenuItem'
import MenuItemWithDropdown from './MenuItemWithDropdown'
import { menuItems } from '../header/menuItems'

const HoverMenu = ({ className = '' }) => {
  return (
    <>
      <ul
        className={` gap-0 pr-8 font-semibold list-none text-neutral-700 flex text-body-md ${className}`}
      >
        {menuItems.map((item, index) => {
          if (item.menuItems) {
            return (
              <MenuItemWithDropdown
                key={index}
                title={item.title}
                link={item.link}
                menuItems={item.menuItems}
              />
            )
          } else {
            return (
              <MenuItem
                key={index}
                title={item.title}
                link={item.link}
                className="!text-neutral-700"
              />
            )
          }
        })}
      </ul>
    </>
  )
}

export default HoverMenu
