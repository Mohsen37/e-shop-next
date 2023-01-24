import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductDetail = styled.div`
  max-width: 1500px;
  background-color: white;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    margin-left: 1rem;
    border-style: solid;
    border-width: 0 0 2px 0;
    border-image: linear-gradient(to right, #a4b0be, #dfe4ea) 1;
  }
  img {
    /* max-width: 50%; */
    margin-right: 2rem;
  }
`;

export const ProductSpec = styled.div`
  display: flex;
  align-items: flex-start;
  img {
    max-width: 500px;
  }
`;

export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
  .numbers {
    max-width: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  .desc {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const NumBtn = styled.button`
  cursor: pointer;
  font-size: 24px;
  border: none;
  background: none;
  color: black;
  display: flex;
`;
