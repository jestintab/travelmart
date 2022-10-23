import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {

  return (
   
    <section className="hero-section relative bg-sky-200">


                  
        <div className="hero-slider overflow-hidden">
            <div className="swiper-container">
                <div className="swiper-wrapper">
     <div className="swiper-slide 2xl:h-800 lg:h-700px flex flex-wrap items-center px-4 md:px-10 2xl:px-24 py-20 lg:py-0  bg-no-repeat bg-left-bottom bg-sky-100 bg-cover slide1 " >
                        <div className="container">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-12">
                                    <div className="flex flex-col md:flex-row items-center justify-between w-full my-20">
                                        <div className="flex-grow">
                                            <div className="slider-content">
                                                <span className="text-lg font-normal text-orange block mb-3">Smart Bag Collections</span>
                                                <h1 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-5 inline-block md:block">Smart Backpack</h1>
                                                <h2 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-7 inline-block md:block">Minimal Store</h2>
                                                <p className="font-normal text-primary text-sm lg:text-md">
                                                    Experience the decibels like your ears deserve to. Safe for
                                                    the <br className="hidden lg:block"/> ears, very for the heart. A treat to your ears.
                                                </p>
                                                <div className="inline-block mt-12">
                                                    <a className="flex flex-wrap items-center bg-primary transition-all hover:bg-orange hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-orange capitalize font-medium text-sm lg:text-md leading-normal" href="/store">Explore More<i className="icon-basket-loaded ml-3 xl:ml-5"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    {/* <div className="swiper-slide 2xl:h-800 lg:h-700px flex flex-wrap items-center px-4 md:px-10 2xl:px-24 py-20 lg:py-0  bg-no-repeat bg-left-bottom bg-sky-100 bg-cover slide2" >
                        <div className="container">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-12">
                                    <div className="flex flex-col md:flex-row items-center justify-between w-full">
                                        <div className="flex-grow">
                                            <div className="slider-content">
                                                <span className="text-lg font-normal text-orange block mb-3">Smart Bag Collections</span>
                                                <h1 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-5 inline-block md:block">Smart Backpack</h1>
                                                <h2 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-7 inline-block md:block">Minimal Store</h2>
                                                <p className="font-normal text-primary text-sm lg:text-md">
                                                    Experience the decibels like your ears deserve to. Safe for
                                                    the <br className="hidden lg:block"/> ears, very for the heart. A treat to your ears.
                                                </p>
                                                <div className="inline-block mt-12">
                                                    <a className="flex flex-wrap items-center bg-primary transition-all hover:bg-orange hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-orange capitalize font-medium text-sm lg:text-md leading-normal" href="shop-grid-3-column.html">Explore More<i className="icon-basket-loaded ml-3 xl:ml-5"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                
                 
                    {/* <div className="swiper-slide 2xl:h-800 lg:h-700px flex flex-wrap items-center px-4 md:px-10 2xl:px-24 py-20 lg:py-0  bg-no-repeat bg-left-bottom bg-sky-100 bg-cover">
                        <div className="container">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-12">
                                    <div className="flex flex-col md:flex-row items-center justify-between w-full">
                                        <div className="flex-grow">
                                            <div className="slider-content">
                                                <span className="text-lg font-normal text-orange block mb-3">A watch is a portable</span>
                                                <h1 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-5 inline-block md:block">Smart Backpack</h1>
                                                <h2 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-7 inline-block md:block">Minimal Store</h2>
                                                <p className="font-normal text-primary text-sm lg:text-md">
                                                    Experience the decibels like your ears deserve to. Safe for
                                                    the <br className="hidden lg:block"/> ears, very for the heart. A treat to your ears.
                                                </p>
                                                <div className="inline-block mt-12">
                                                    <a className="flex flex-wrap items-center bg-primary transition-all hover:bg-orange hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-orange capitalize font-medium text-sm lg:text-md leading-normal" href="shop-grid-3-column.html">Explore More<i className="icon-basket-loaded ml-3 xl:ml-5"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
           */}
                </div>
            </div>

            <div className="swiper-pagination mb-5 md:mb-0"></div>

          
        </div>
    </section>



  )
}

export default Hero
