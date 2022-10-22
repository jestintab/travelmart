import React from 'react'

export const MainMenu = () => {
  return (
    <nav className="main-menu">
    <ul className="flex flex-wrap">
      <li className="main-menu__item relative group">
        <a className="block py-10 xl:pr-6 md:pr-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" href="/">Home</a>
        <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="index.html">Airpod</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="index-2.html">Smartwatch</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="index-3.html">Drone</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="index-4.html">BackPack</a></li>
        </ul>
      </li>
  
      <li className="main-menu__item group">
        <a className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" href="#">Shop</a>
        <ul className="mega-menu flex flex-wrap bg-white py-5 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10">
          <li className="flex-auto px-4">
            <a className="font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange" href="#">Shop Grid </a>
            <ul className="pb-2">
              <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="shop-grid-3-column.html">Shop Grid 3 Column</a></li>
              <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="shop-grid-4-column.html">Shop Grid 4 Column</a></li>
              <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="shop-grid-left-sidebar.html">Shop Grid Left Sidebar</a></li>
              <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="shop-grid-right-sidebar.html">shop Grid Right Sidebar</a></li>
            </ul>
          </li>
  
          <li className="flex-auto px-4">
            <a className="font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange" href="shop-list.html">shop list</a>
            <ul className="pb-2">
              <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="shop-list.html">Shop List</a></li>
              <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
              <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
            </ul>
          </li>
  
          <li className="flex-auto px-4">
            <a className="font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange" href="#">Product Types</a>
            <ul className="pb-2">
              <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="single-product.html">Shop Single</a></li>
              <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="single-product-configurable.html">Shop Variable</a></li>
              <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="single-product-affiliate.html">Shop Affiliate</a></li>
              <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="single-product-group.html">Shop Group</a></li>
            </ul>
          </li>
          <li className="overflow-hidden flex-auto mx-4"><a href="#"><img className="transform hover:scale-105 transition-all w-full" src="assets/images/mega-menu/megamenu.webp" alt="Smartwatch" loading="lazy" width="1000" height="120"/></a></li>
        </ul>
      </li>
      <li className="main-menu__item relative group"><a className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" href="#">Blog</a>
      
        <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="blog-grid-3-column.html">Blog Grid 3 Column</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="blog-grid-2-column.html">Blog Grid 2 Column</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="blog-list.html">Blog list</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="blog-list-right-sidebar.html"> Blog List Right Sideba</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="blog-details.html"> Blog details</a></li>
        </ul>
  
      </li>
      <li className="main-menu__item relative group"><a className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" href="#">pages</a>
        <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="about-us.html">About Page</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="cart.html">Cart Page</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="checkout.html">Checkout Page</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="compare.html">Compare Page</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="login-register.html">Login & Register Page</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="account.html">Account Page</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="whishlist.html">Wishlist Page</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="faq.html">Frequently Questions</a></li>
          <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="404.html">Error 404</a></li>
        </ul>
      </li>
      <li className="main-menu__item"><a className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" href="contact-us.html">Contact</a></li>
    </ul>
  </nav>
  
  )
}
