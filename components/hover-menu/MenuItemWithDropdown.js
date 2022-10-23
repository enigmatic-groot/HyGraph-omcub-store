import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

import MenuItem from "./MenuItem";
import MenuList from "./MenuList";

const MenuItemWithDropdown = ({
  title = "Dropdown Title",
  link = "#",
  className = "",
  menuItems = null,
}) => {
  return (
    <>
      <li
        className={`relative hover:text-primary-600 text-body-md text-neutral-700 dropdown ${className}`}
      >
        <Link href={link}>
          <a className="inline-flex items-center justify-between w-full gap-2 px-6 py-3 ">
            {title}
            <FaChevronDown className="text-body-sm" />
          </a>
        </Link>

        <MenuList>
          {menuItems.map((itemInner, indexInner) => {
            if (itemInner.menuItems) {
              return (
                <li
                  className={`relative hover:text-success-600 text-body-md text-neutral-600 dropdown-inner group ${className}`}
                  key={indexInner}
                >
                  <Link href={itemInner.link}>
                    <a className="inline-flex items-center justify-between w-full gap-2 px-6 py-3 ">
                      {itemInner.title}
                      <FaChevronDown className="duration-300 -rotate-90 text-body-sm group-hover:rotate-0" />
                    </a>
                  </Link>
                  <MenuList aside>
                    {itemInner.menuItems.map((innerMost, indexInnerMost) => (
                      <MenuItem
                        title={innerMost.title}
                        link={innerMost.link}
                        key={indexInnerMost}
                        className="hover:!text-secondary-600"
                      />
                    ))}
                  </MenuList>
                </li>
              );
            } else {
              return (
                <MenuItem
                  title={itemInner.title}
                  link={itemInner.link}
                  key={indexInner}
                  className="hover:!text-success-600"
                />
              );
            }
          })}
        </MenuList>
      </li>
    </>
  );
};

export default MenuItemWithDropdown;
