import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <a>
        <div>
          <Thumbnail thumbnail={thumbnail} size="full" />
          <div className="text-base-regular mt-2">
          <h3><a className="block text-base hover:text-orange transition-all" href="#">{title}</a></h3>
           
          
            <h4 className="font-bold text-md leading-none text-orange mt-3">
              {price ? (
                <>
                  {price.price_type === "sale" && (
                    <del className="font-normal text-sm mr-1 inline-block">
                      {price.original_price}
                    </del>
                  )}
                 
                    {price.calculated_price}
                  
                </>
              ) : (
                <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
              )}
            </h4>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductPreview
