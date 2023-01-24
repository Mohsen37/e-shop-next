import {ProductStyle, BuyBtn} from '../styles/ProductStyle'
import Link from "next/link";
import Image from 'next/image'

function Product({ product }) {
  const {title,price,image,slug} = product.attributes
  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <Image src={image.data.attributes.formats.small.url} width={300} height={300} layout={'responsive'} alt={slug} />
        </div>
      </Link>
      <h4>{title}</h4>
      <p>{price} Toman</p>
      <BuyBtn full>
        <Link href={`/product/${slug}`}>
          <div>Buy</div>
        </Link>
      </BuyBtn>
    </ProductStyle>
  );
}

export default Product;
