import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import useWishlistState from "../../hooks/useWishlistState";
import useSnipcartCount from "../../hooks/useSnipcartCount";

import Container from "../Container";
import HoverMenu from "../hover-menu/HoverMenu";

const Header = ({ scrollY }) => {
  const { hasItems } = useWishlistState();

  const { cart } = useSnipcartCount();
  const cartItemsCount = cart.items.count;

  return (
    <header
      className={`fixed left-1/2 top-0 w-full z-[15] transition-all ease-in  -translate-x-1/2  bg-white select-none py-3	 ${
        scrollY > 0 ? `bg-opacity-90 backdrop-blur-sm` : "bg-opacity-100"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="tablet:w-1/3">
            <nav className="flex items-center justify-start space-x-3 tablet:space-x-6">
              <HoverMenu className="mr-auto" />
            </nav>
          </div>
          <div className="flex items-center justify-center flex-1">
            <Link href="/">
              <a className="flex items-center text-gray-900">
                <div className="flex items-center justify-center w-40 mr-4 rounded-full">
                  <svg
                    className="w-full h-full fill-current"
                    viewBox="0 0 144 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.744 19.584C8.744 20.848 8.808 22.136 8.936 23.448C9.08 24.76 9.36 25.976 9.776 27.096C10.208 28.2 10.84 29.096 11.672 29.784C12.504 30.472 13.616 30.816 15.008 30.816C16.4 30.816 17.504 30.472 18.32 29.784C19.152 29.096 19.776 28.2 20.192 27.096C20.624 25.976 20.904 24.76 21.032 23.448C21.176 22.136 21.248 20.848 21.248 19.584C21.248 18.32 21.176 17.04 21.032 15.744C20.904 14.432 20.624 13.224 20.192 12.12C19.776 11 19.152 10.104 18.32 9.432C17.504 8.744 16.4 8.4 15.008 8.4C13.616 8.4 12.504 8.744 11.672 9.432C10.84 10.104 10.208 11 9.776 12.12C9.36 13.224 9.08 14.432 8.936 15.744C8.808 17.04 8.744 18.32 8.744 19.584ZM0.728 19.584C0.728 16.16 1.24 13.168 2.264 10.608C3.304 8.048 4.88 6.056 6.992 4.632C9.104 3.208 11.776 2.496 15.008 2.496C18.256 2.496 20.936 3.216 23.048 4.656C25.16 6.08 26.728 8.072 27.752 10.632C28.776 13.192 29.288 16.176 29.288 19.584C29.288 23.024 28.768 26.032 27.728 28.608C26.688 31.168 25.112 33.16 23 34.584C20.904 36.008 18.24 36.72 15.008 36.72C11.76 36.72 9.08 36 6.968 34.56C4.856 33.12 3.288 31.12 2.264 28.56C1.24 25.984 0.728 22.992 0.728 19.584ZM36.9688 11.712C38.3928 11.712 39.4728 12.208 40.2088 13.2C40.9608 14.176 41.3368 15.496 41.3368 17.16V36C40.8088 36.096 40.2088 36.168 39.5368 36.216C38.8808 36.264 38.2328 36.288 37.5928 36.288C36.9688 36.288 36.3208 36.264 35.6488 36.216C34.9928 36.168 34.3848 36.096 33.8248 36V12.048L34.1608 11.712H36.9688ZM46.6648 21.552C46.6648 20.272 46.4328 19.416 45.9688 18.984C45.5048 18.552 45.0168 18.336 44.5048 18.336C43.8168 18.352 43.0888 18.624 42.3208 19.152C41.5688 19.68 40.8808 20.328 40.2568 21.096C39.6328 21.848 39.1848 22.6 38.9128 23.352V16.872C39.6648 16.024 40.4888 15.2 41.3848 14.4C42.2968 13.584 43.2728 12.92 44.3128 12.408C45.3528 11.88 46.4488 11.616 47.6008 11.616C48.9928 11.616 50.1768 11.944 51.1528 12.6C52.1448 13.24 52.8968 14.128 53.4088 15.264C53.9208 16.4 54.1768 17.704 54.1768 19.176V36C53.6488 36.096 53.0488 36.168 52.3768 36.216C51.7208 36.264 51.0728 36.288 50.4328 36.288C49.8088 36.288 49.1608 36.264 48.4888 36.216C47.8328 36.168 47.2248 36.096 46.6648 36V21.552ZM59.5048 21.504C59.5048 20.224 59.2568 19.376 58.7608 18.96C58.2808 18.544 57.7848 18.336 57.2728 18.336C56.6488 18.336 55.9608 18.608 55.2087 19.152C54.4728 19.68 53.7768 20.352 53.1208 21.168C52.4648 21.968 51.9448 22.784 51.5608 23.616V16.68C52.2808 15.816 53.1288 15 54.1048 14.232C55.0808 13.448 56.1288 12.816 57.2488 12.336C58.3848 11.856 59.5128 11.616 60.6328 11.616C62.0408 11.616 63.2168 11.952 64.1608 12.624C65.1048 13.28 65.8168 14.184 66.2968 15.336C66.7768 16.488 67.0168 17.8 67.0168 19.272V30C67.0168 30.928 67.1048 31.808 67.2808 32.64C67.4568 33.456 67.7688 34.168 68.2168 34.776C67.6728 35.224 66.9928 35.608 66.1768 35.928C65.3608 36.232 64.4808 36.384 63.5368 36.384C62.0328 36.384 60.9848 35.984 60.3928 35.184C59.8008 34.384 59.5048 33.232 59.5048 31.728V21.504ZM84.6133 22.68C84.6293 21.432 84.5733 20.384 84.4453 19.536C84.3333 18.672 84.0773 18.016 83.6773 17.568C83.2773 17.12 82.6613 16.896 81.8293 16.896C80.7093 16.896 79.9333 17.464 79.5013 18.6C79.0853 19.736 78.8773 21.56 78.8773 24.072C78.8773 26.616 79.2293 28.384 79.9333 29.376C80.6373 30.368 81.6693 30.864 83.0293 30.864C83.9733 30.864 84.9013 30.664 85.8133 30.264C86.7253 29.864 87.5573 29.392 88.3093 28.848C88.9173 29.2 89.5013 29.8 90.0613 30.648C90.6213 31.496 90.9813 32.288 91.1413 33.024C90.0693 34.144 88.6853 35.04 86.9893 35.712C85.3093 36.384 83.5813 36.72 81.8053 36.72C80.0773 36.72 78.5573 36.424 77.2453 35.832C75.9333 35.24 74.8293 34.392 73.9333 33.288C73.0373 32.168 72.3573 30.832 71.8933 29.28C71.4453 27.728 71.2213 25.992 71.2213 24.072C71.2213 21.752 71.5253 19.784 72.1333 18.168C72.7573 16.536 73.5893 15.224 74.6293 14.232C75.6693 13.224 76.8213 12.488 78.0853 12.024C79.3653 11.56 80.6613 11.328 81.9733 11.328C83.3173 11.328 84.5573 11.52 85.6933 11.904C86.8453 12.288 87.8373 12.832 88.6693 13.536C89.5173 14.24 90.1733 15.08 90.6373 16.056C91.1013 17.032 91.3333 18.112 91.3333 19.296C91.3333 20.56 90.9813 21.488 90.2773 22.08C89.5893 22.656 88.7173 22.944 87.6613 22.944C87.0213 22.944 86.4693 22.92 86.0053 22.872C85.5413 22.824 85.0773 22.76 84.6133 22.68ZM115.939 29.16C115.939 29.928 116.059 30.624 116.299 31.248C116.555 31.872 116.883 32.328 117.283 32.616C117.155 33.288 116.859 33.992 116.395 34.728C115.931 35.464 115.467 36.016 115.003 36.384C112.875 36.352 111.251 35.624 110.131 34.2C109.011 32.776 108.451 31.064 108.451 29.064V12.048C108.963 11.952 109.555 11.88 110.227 11.832C110.899 11.784 111.555 11.76 112.195 11.76C112.819 11.76 113.459 11.784 114.115 11.832C114.787 11.88 115.395 11.952 115.939 12.048V29.16ZM95.3225 18.048C95.3225 17.104 95.2265 16.224 95.0345 15.408C94.8585 14.592 94.5545 13.88 94.1225 13.272C94.6825 12.808 95.3705 12.424 96.1865 12.12C97.0025 11.816 97.8745 11.664 98.8025 11.664C100.307 11.664 101.347 12.064 101.923 12.864C102.515 13.664 102.811 14.808 102.811 16.296V26.52C102.811 27.592 102.955 28.392 103.243 28.92C103.547 29.432 104.091 29.688 104.875 29.688C105.371 29.688 105.939 29.56 106.579 29.304C107.235 29.032 107.883 28.592 108.523 27.984C109.179 27.376 109.747 26.576 110.227 25.584V32.136C109.107 33.24 107.891 34.232 106.579 35.112C105.267 35.992 103.755 36.432 102.043 36.432C100.587 36.432 99.3545 36.072 98.3465 35.352C97.3545 34.616 96.6025 33.608 96.0905 32.328C95.5785 31.032 95.3225 29.552 95.3225 27.888V18.048ZM129.106 34.8H121.762V1.008L122.098 0.671997H124.93C126.402 0.671997 127.466 1.008 128.122 1.68C128.778 2.352 129.106 3.52 129.106 5.184V34.8ZM143.146 23.688C143.162 26.28 142.682 28.536 141.706 30.456C140.73 32.36 139.338 33.832 137.53 34.872C135.738 35.912 133.618 36.432 131.17 36.432C129.426 36.432 127.738 36.288 126.106 36C124.49 35.696 123.042 35.296 121.762 34.8L125.314 29.28C126.21 29.856 127.154 30.296 128.146 30.6C129.154 30.904 130.21 31.056 131.314 31.056C132.29 31.056 133.082 30.768 133.69 30.192C134.298 29.6 134.746 28.76 135.034 27.672C135.322 26.584 135.466 25.296 135.466 23.808C135.466 21.632 135.21 20.056 134.698 19.08C134.202 18.104 133.434 17.608 132.394 17.592C131.706 17.56 130.946 17.784 130.114 18.264C129.298 18.744 128.594 19.528 128.002 20.616L126.946 14.952C127.602 14.312 128.306 13.736 129.058 13.224C129.81 12.712 130.642 12.312 131.554 12.024C132.482 11.72 133.506 11.568 134.626 11.568C136.53 11.568 138.106 12.096 139.354 13.152C140.618 14.192 141.562 15.624 142.186 17.448C142.826 19.272 143.146 21.352 143.146 23.688Z"
                      fill="black"
                    />
                  </svg>
                </div>
                {/* <span className="text-xl font-bold">Jeremiah&apos;s Store</span> */}
              </a>
            </Link>
          </div>
          <div className="tablet:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
            {/* <button
              className="relative px-2 text-gray-800 transition rounded-md appearance-none cursor-pointer snipcart-customer-signin hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="User login"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
              </svg>
            </button> */}
            <Link href="/wishlist">
              <a
                className="relative px-2 text-gray-800 transition rounded-md cursor-pointer hover:text-blue-600 focus:outline-none focus:text-blue-600"
                aria-label="Wishlist"
              >
                {hasItems && (
                  <span className="absolute top-0 right-0 w-2 h-2 -mt-1 -mr-1 bg-red-500 rounded-full"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                </svg>
              </a>
            </Link>
            <button
              className="relative px-2 text-gray-800 transition rounded-md appearance-none cursor-pointer snipcart-checkout hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Cart"
            >
              <span className="absolute -top-2 right-0 w-5 h-5  -mt-1 -mr-1 bg-blue-600 rounded-full text-[10px] text-white text-center flex items-center justify-center">
                {cartItemsCount}
              </span>
              <FaShoppingCart className="w-6 h-6 fill-current" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
