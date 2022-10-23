import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <>
       <div className="bg-dark bg-no-repeat bg-center bg-cover pt-24">
            <div className="container">

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-6 mb-10">
                        <h3 className="text-white font-bold text-md capitalize leading-none mb-8 font-playfair">About Info</h3>
                        <p className="mb-8 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor inci ut labore et dolore</p>


                        <ul className="text-white">
                            <li className="mb-4">
                                <i className="sli sli-location-pin"></i>
                                <span>Addresss: 123 Pall Mall, London England</span>
                            </li>
                            <li className="mb-4">
                                <i className="sli sli-envelope"></i>
                                <a className="transition-all hover:text-orange" href="mailto:info@gmail.com">Email: hello@example.com</a>
                            </li>
                            <li className="mb-4">
                                <i className="sli sli-phone"></i>
                                <a className="transition-all hover:text-orange" href="tell:0123456789">Phone: (012) 345 6789</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2 mb-10">
                        <h3 className="text-white font-bold text-md capitalize leading-none mb-8 font-playfair">Information</h3>
                        <ul>
                            <li className="ml-4 mb-5 list-circle text-white"><a className="hover:text-orange transition-all" href="#">Best Value</a></li>
                            <li className="ml-4 mb-5 list-circle text-white"><a className="hover:text-orange transition-all" href="#">Your Order</a></li>
                            <li className="ml-4 mb-5 list-circle text-white"><a className="hover:text-orange transition-all" href="#">Terms Condition</a></li>
                            <li className="ml-4 mb-5 list-circle text-white"><a className="hover:text-orange transition-all" href="#">Contact us</a></li>
                            <li className="ml-4 mb-5 list-circle text-white"><a className="hover:text-orange transition-all" href="#">Manufactureres</a></li>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2 mb-10">
                        <h3 className="text-white font-bold text-md capitalize leading-none mb-8 font-playfair">Quick Links</h3>
                        <ul>
                            <li className="ml-4 mb-5 list-circle text-white"><a className="hover:text-orange transition-all" href="#">New Brands</a></li>
                            <li className="ml-4 mb-5 list-circle text-white"><a className="hover:text-orange transition-all" href="#">News &amp; Blog</a></li>
                            <li className="ml-4 mb-5 list-circle text-white"><a className="hover:text-orange transition-all" href="#">Our Office</a></li>
                            <li className="ml-4 mb-5 list-circle text-white"><a className="hover:text-orange transition-all" href="#">Our Store</a></li>
                            <li className="ml-4 mb-5 list-circle text-white"><a className="hover:text-orange transition-all" href="#">Return Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2 mb-10">
                        <h3 className="text-white font-bold text-md capitalize leading-none mb-8 font-playfair">Main Menu</h3>
                        <ul>
                            <li className="mb-5 text-white"><a className="hover:text-orange transition-all" href="#"><i className="mr-2 icon-social-facebook"></i> Best Value</a></li>
                            <li className="mb-5 text-white"><a className="hover:text-orange transition-all" href="#"><i className="mr-2 icon-social-twitter"></i> Your Order</a></li>
                            <li className="mb-5 text-white"><a className="hover:text-orange transition-all" href="#"><i className="mr-2 icon-social-instagram"></i> Terms &amp; Condition</a></li>
                            <li className="mb-5 text-white"><a className="hover:text-orange transition-all" href="#"><i className="mr-2 icon-social-youtube"></i> Contact us</a></li>
                            <li className="mb-5 text-white"><a className="hover:text-orange transition-all" href="#"><i className="mr-2 icon-social-dribbble"></i> Manufactureres</a></li>
                        </ul>

                    </div>
                </div>


            </div>
        </div>
      <div className="footer-bottom-section py-8 bg-gray-500">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex order-last md:order-first flex-wrap items-center justify-center md:justify-start">
                        <p className="text-white flex flex-wrap items-center text-sm lg:text-base">&copy; 2022 TravelMart. Made with <i className="icon-heart mx-2 text-orange"></i> for<a href="#" className="ml-1 transition hover:text-orange">Medusajs</a>.</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-end">
                        <a href="#">
                            <img className="w-full h-full" src="/assets/images/payment.webp" alt="payment logo" loading="lazy" width="286" height="23" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default FooterNav
