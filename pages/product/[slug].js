import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import Image from "next/image";
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

function ProductDetails() {
  const { query } = useRouter();
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = result;
  if (fetching) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error : {error.message}</h1>;
  }
  const { title, description, price, image } = data.products.data[0].attributes;

  return (
    <Container>
      <ProductDetail>
        <h1>{title}</h1>
        <ProductSpec>
          <Image
            src={image.data.attributes.url}
            alt="Phone image"
            width={300}
            height={300}
            layout={"responsive"}
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
                <NumBtn>
                  <AiFillPlusCircle />
                </NumBtn>
                <span>0</span>
                <NumBtn>
                  <AiFillMinusCircle />
                </NumBtn>
              </div>
            </ProductQuantity>
            <div>
              <BuyBtn full>Add to Cart</BuyBtn>
            </div>
          </ProductInfo>
        </ProductSpec>
      </ProductDetail>
    </Container>
  );
}

export default ProductDetails;
