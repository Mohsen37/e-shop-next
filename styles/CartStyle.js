import styled from "styled-components";
const { motion } = require("framer-motion");
export const CartWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
  width: 30%;
  background-color: #f1f1f1;
  padding: 2rem 2rem;
  /* overflow-y: scroll; */
  position: relative;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.6);
  h2 {
    margin-bottom: 2rem;
  }
`;

export const CartItem = styled(motion.div)`
  margin-bottom: 1rem;
  border-left: 3px solid #2f3542;
  padding: 1rem;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  img {
    height: 64px;
    margin-right: 2rem;
  }

  .close--icon {
    display: flex;
    align-items: center;
    margin-left: auto;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .quantity--number {
    font-size: 1.2rem;
    margin-right: 2rem;
  }
`;

export const PurchaseBtn = styled.button`
  margin-top: 1rem;
  background-color: black;
  border: none;
  width: 100%;
  padding: 1rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const Cards = styled(motion.div)``

export const PurchaseSection = styled(motion.div)`
  margin-top: 4rem;
`