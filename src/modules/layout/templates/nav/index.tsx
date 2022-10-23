import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { MainMenu } from "../main-menu"

const Nav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div className="px-4 md:px-10 2xl:px-24 py-6 lg:py-0">
  <div className="flex items-center lg:relative">
    <div className="w-6/12 lg:w-2/12"><div className="logo">
  <a href="/"
    ><img
      src="/travel-logo.png"
      alt="logo"
      loading="lazy"
      width="125"
      height="45"
  /></a>
</div>
</div>
    <div className="hidden lg:flex flex-1 xl:relative">
      <MainMenu/>
    </div>

    <div className="w-6/12 lg:w-3/12">

    <ul className="flex items-center justify-end">
  <li className="ml-6 hidden lg:block">
    <button className="search-toggle text-right text-primary text-md hover:text-orange transition-all" aria-label="icon-settings">
      <i className="icon-magnifier"></i>
    </button>
  </li>

  <CartDropdown/>
  <li id="toggle-menu" className="ml-6 hidden lg:block relative">
    <button className="text-primary text-md hover:text-orange transition-all toggle-menu" aria-label="icon-settings">
      <i className="icon-settings"></i>
    </button>
  
  
    <div id="settings-card" className="bg-white absolute right-0 px-8 py-5 shadow w-80 opacity-0 invisible transition-all duration-300 ease-in-out z-20">
  <h4 className="text-md text-dark font-normal capitalize tracking-wide pb-5 border-b border-solid border-gray-600 mb-5">Currency</h4>
  <ul>
    <li className="my-4"><a href="#" className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide">USD - US Dollar</a></li>
    <li className="my-4"><a href="#" className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide">EUR - Euro</a></li>
    <li className="my-4"><a href="#" className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide">GBP - British Pound</a></li>
  </ul>
  <h4 className="text-md text-dark font-normal capitalize tracking-wide pb-5 border-b border-solid border-gray-600 mb-5">Account</h4>
  <ul>
    <li className="my-4"><a href="login-register.html" className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide">Login</a></li>
    <li className="mt-4"><a href="account.html" className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide">Create Account</a></li>
  </ul>
</div>



  </li>
  <li className="ml-6 lg:hidden">
    <a href="#offcanvas-mobile-menu" className="offcanvas-toggle text-primary text-md hover:text-orange transition-all"><i className="icon-menu"></i></a>
  </li>
</ul>

    </div>
  </div>
</div>

  )
}

export default Nav
