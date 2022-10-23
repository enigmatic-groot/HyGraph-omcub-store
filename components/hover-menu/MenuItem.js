import Link from "next/link";

const MenuItem = ({ title = "Menu Title", link = "#", className = "" }) => {
  return (
    <>
      <li
        className={`duration-300 ease-out hover:text-primary-600 text-body-md text-neutral-600 ${className}`}
      >
        <Link href={link}>
          <a className="inline-flex px-6 py-3">{title}</a>
        </Link>
      </li>
    </>
  );
};

export default MenuItem;
