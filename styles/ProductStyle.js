import styled from "styled-components";

export const ProductStyle = styled.div`
  background-color: white;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: black;
  border-radius: 4px;
  /* border: 1px solid rgba(0, 0, 0, 0.2); */
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  img {
    max-height: 250px;
    margin-bottom: 1rem;
    cursor: pointer;
  }
`;

export const BuyBtn = styled.button`
  font-size: 1.2rem;
  width: ${({ full }) => (full ? "100%" : "inherit")};
  cursor: pointer;
  border-radius: 4px;
  background-color: #5352ed;
  padding: 0.5rem 2rem;
  border: none;
  margin-top: 1rem;
  margin-bottom: 0rem;
  :hover {
    background-color: #3742fa;
  }
`;
