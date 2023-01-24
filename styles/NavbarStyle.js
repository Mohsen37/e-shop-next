import styled from "styled-components";
const { motion } = require("framer-motion");
export const Nav = styled.nav`
  max-width: 1150px;
  margin: auto;
  background-color: transparent;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 1rem; */
  h1 {
    font-size: 2rem;
    height: auto;
  }
`;

export const Icons = styled.div`
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  cursor: pointer;
`;

export const IconAcount = styled.div`
  display: flex;
  padding: 0.1rem;
  /* border: solid 1px transparent; */
  /* border-style: solid; */
  /* border-width: 1px; */
  /* border-image: linear-gradient(to right, #ff7f50, #5352ed) 1; */
  border-radius: 100%;
  background-image: linear-gradient(white, white),
    linear-gradient(-45deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  img{
    border-radius: 100%;
    padding: 0.1rem;
    width: 2.5rem;

  }

`;

export const IconShop = styled(motion.div)`
  display: flex;
  position: relative;
  span {
    background-color: #eb2f06;
    color: white;
    font-size: 0.75rem;
    border-radius: 100%;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -25%;
    pointer-events: none;
  }
`;
