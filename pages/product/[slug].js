import { useStateContext } from "../../lib/context";
import { useQuery } from "urql";
import { useEffect } from "react";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
// import Image from "next/image";
import {
  ProductDetail,
  ProductSpec,
  ProductInfo,
  ProductQuantity,
  NumBtn,
  Container,
} from "../../styles/ProductDetail";
import { BuyBtn } from "../../styles/ProductStyle";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import Head from "next/head";

function ProductDetails() {
  const { quantity, IncreaseQty, DecreaseQty, onAdd, setQuantity } = useStateContext();
  useEffect(() => {
    setQuantity(1)
  }, [])

  const { query } = useRouter();
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = result;
  if (fetching) {
    return <h1></h1>;
  }
  if (error) {
    return <h1>Error : {error.message}</h1>;
  }
  const { title, description, price, image } = data.products.data[0].attributes;

  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <ProductDetail>
        <h1>{title}</h1>
        <ProductSpec>
          <img
            src={image.data.attributes.url}
            alt="Phone image"
            // width={600}
            // height={600}
            // layout={"responsive"}
          />
          <ProductInfo>
            <div>
              <p className="desc">{description}</p>
              <span className="price">Price:</span>
              <span className="price"> {price}</span>
              <span className="price"> Toman</span>
            </div>
            <ProductQuantity>
              <div className="numbers">
                <NumBtn onClick={IncreaseQty}>
                  <AiFillPlusCircle />
                </NumBtn>
                <span>{quantity}</span>
                <NumBtn onClick={DecreaseQty}>
                  <AiFillMinusCircle />
                </NumBtn>
              </div>
            </ProductQuantity>
            <div>
              <BuyBtn
                full
                onClick={() =>
                  onAdd(data.products.data[0].attributes, quantity)
                }
              >
                Add to Cart
              </BuyBtn>
            </div>
          </ProductInfo>
        </ProductSpec>
      </ProductDetail>
    </Container>
  );
}

export default ProductDetails;
