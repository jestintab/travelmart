import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div>

<section className="product-banner-section bg-gray-200 pt-24 pb-24">

<div className="container">
    <div className="text-center pb-14">
        <span className="text-md font-normal text-orange block mb-4">EXPLORE THE AWESOME</span>
        <h3 className="font-playfair font-bold text-primary text-3xl sm:text-4xl xl:text-5xl mb-5">Product Feature</h3>
    </div>
    <div className="grid lg:grid-cols-3 gap-4 -mb-10">
        <div>

            <div className="flex flex-wrap items-center lg:flex-row-reverse mb-10">
                <div className="text-primary text-4xl lg:ml-5 mr-5 lg:mr-0"><i className="icofont-reply"></i></div>
                <div className="flex-1 lg:text-right">
                    <h3 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">Firsted Reply</h3>
                    <p>Respond to texts and messages directly from your wrist</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center lg:flex-row-reverse mb-10">
                <div className="text-primary text-4xl lg:ml-5 mr-5 lg:mr-0"><i className="icofont-battery-full"></i></div>
                <div className="flex-1 lg:text-right">
                    <h3 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">Battery Life</h3>
                    <p>Maximise your battery life on standby, and tilt your wrist.</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center lg:flex-row-reverse mb-10">
                <div className="text-primary text-4xl lg:ml-5 mr-5 lg:mr-0"><i className="icofont-mic"></i></div>
                <div className="flex-1 lg:text-right">
                    <h3 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">Personal Assistant</h3>
                    <p>Receive incoming calls or speed dial contacts without phone</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center lg:flex-row-reverse mb-10">
                <div className="text-primary text-4xl lg:ml-5 mr-5 lg:mr-0"><i className="icofont-sun"></i></div>
                <div className="flex-1 lg:text-right">
                    <h3 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">Anti Glare</h3>
                    <p>Incoming calls or speed dial contacts without reaching.</p>
                </div>
            </div>
        </div>

        <div className="flex flex-wrap items-center justify-center">
            <img className="max-w-full" src="/assets/images/bag2.webp" alt="banner image" loading="lazy" width="370" height="478"/>
        </div>

        <div>
            <div className="flex flex-wrap items-center mb-10">
                <div className="text-primary text-4xl mr-5"><i className="icofont-gym-alt-3"></i></div>
                <div className="flex-1">
                    <h4 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">Fitness Tracking</h4>
                    <p>Monitor and track your steps and distance day to day</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center mb-10">
                <div className="text-primary text-4xl mr-5"><i className="icofont-phone"></i></div>
                <div className="flex-1">
                    <h4 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">Manage Calls</h4>
                    <p>Receive incoming calls or speed dial reaching your phone</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center mb-10">
                <div className="text-primary text-4xl mr-5"><i className="icofont-brand-android-robot"></i></div>
                <div className="flex-1">
                    <h4>App Launch</h4>
                    <p>Shortcuts to your favorite apps directly on your watchface</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center mb-10">
                <div className="text-primary text-4xl mr-5"><i className="icofont-music-note"></i></div>
                <div className="flex-1">
                    <h4 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">Music Control</h4>
                    <p>Easily accessible playback commands for your</p>
                </div>
            </div>
        </div>

    </div>
</div>

</section>

      <div className="content-container py-12">
      <div className="grid grid-rows-1 grid-flow-col gap-4">
                <div className="text-center mb-14">
                    <span className="font-medium text-orange text-base uppercase mb-4 block">EXPLORE THE AWESOME</span>
                    <h2 className="font-playfair font-bold text-primary text-3xl md:text-4xl lg:text-xl">Various Products</h2>
                </div>
            </div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
      </div>


    <section className="pt-24 pb-24 bg-gray-300 bg-cover bg-center bg-no-repeat" >
        <div className="container">
            <div className="flex items-center -mx-4 flex-wrap">

                <div className="w-full md:w-1/2 px-4">
                    <span className="text-md font-normal text-primary block mb-4">#DISCOUNT PRODUCT</span>
                    <h2 className="font-playfair font-bold text-orange text-3xl sm:text-4xl xl:text-5xl mb-5">Minimalist Travel Bag</h2>

                    <hr className="w-16 h-1 bg-orange mb-7 border-0"/>
                    <p className="font-normal text-primary text-base mb-4">
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book. sint occaecaExc.
                    </p>



                    <div className="countdown item-1 flex flex-wrap item-4 mb-8" data-countdown="2022/11/20" data-format="short">
                        <div className="countdown__item w-16 lg:w-20 h-16 lg:h-20 rounded-full flex flex-wrap flex-col mr-4 justify-center items-center bg-white border border-solid border-gray-500">
                            <span className="countdown__time mr-1 text-base text-dark font-medium daysLeft">354</span>
                            <span className="countdown__text capitalize text-base text-dark font-normal daysText">days</span>
                        </div>
                        <div className="countdown__item w-16 lg:w-20 h-16 lg:h-20 rounded-full flex flex-wrap flex-col mr-4 justify-center items-center bg-white border border-solid border-gray-500">
                            <span className="countdown__time mr-1 text-base text-dark font-medium hoursLeft">09</span>
                            <span className="countdown__text capitalize text-base text-dark font-normal hoursText">hrs</span>
                        </div>
                        <div className="countdown__item w-16 lg:w-20 h-16 lg:h-20 rounded-full flex flex-wrap flex-col mr-4 justify-center items-center bg-white border border-solid border-gray-500">
                            <span className="countdown__time mr-1 text-base text-dark font-medium minsLeft">04</span>
                            <span className="countdown__text capitalize text-base text-dark font-normal minsText">mins</span>
                        </div>
                        <div className="countdown__item w-16 lg:w-20 h-16 lg:h-20 rounded-full flex flex-wrap flex-col mr-4 justify-center items-center bg-white border border-solid border-gray-500">
                            <span className="countdown__time mr-1 text-base text-dark font-medium secsLeft">18</span>
                            <span className="countdown__text capitalize text-base text-dark font-normal secsText">secs</span>
                        </div> 
                    </div>



                    <a href="single-product.html" className="bg-primary transition-all hover:bg-orange hover:text-white px-5 md:px-12 py-3 md:py-4 rounded-full text-orange capitalize font-medium text-sm lg:text-md inline-block mt-8 leading-normal">Buy Now</a>
                </div>

                <div className="w-full md:w-1/2 px-4">
                    <img className="mt-8 md:mt-0 w-full h-full" src="/assets/images/bag4.webp" alt="product image" loading="lazy" width="570" height="602" />
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default FeaturedProducts
