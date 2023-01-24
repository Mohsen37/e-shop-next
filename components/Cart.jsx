import {useStateContext} from '../lib/context'
import { AiFillCloseCircle } from 'react-icons/ai';
import {CartWrapper, CartStyle,CartItem, PurchaseBtn,Cards, PurchaseSection} from '../styles/CartStyle'
import getStripe from '../lib/getStripe';


const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren:0.2,
      staggerChildren: 0.1
    }
  }
}

const card = {
  hidden: { opacity: 0, scale:0 },
  show: { opacity: 1, scale:1 }
}


function Cart() {
  const {cartItem, setShowCart, onRemove, totalPrice} = useStateContext()

  const checkoutHandle = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(cartItem)
    })
    const data = await response.json()
    await stripe.redirectToCheckout({sessionId:data.id})
  }

  return (
    <CartWrapper initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} onClick={() => setShowCart(false)}>
      <CartStyle initial={{x: '50%'}} animate={{x: '0%'}} exit={{x:'100%'}} onClick={(e) => e.stopPropagation()}>
          {cartItem.length > 0 ? <h2>Shoping List</h2> : <h2>Empty List</h2>}

          <Cards layout variants={cards} initial="hidden" animate="show">
            {cartItem.map(item => {
              return(
              <CartItem layout variants={card} key={item.slug}>
                  <img src={item.image.data.attributes.url} alt="" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                  </div>
                  <div className='close--icon' onClick={() => onRemove(item)}>
                  <div className='quantity--number'>{item.quantity}</div>
                    <AiFillCloseCircle />
                  </div>
              </CartItem>
              )
            })}
          </Cards>
          {cartItem.length >= 1 && (
            <PurchaseSection layout>
            <h3>Subtotal : {totalPrice} Toman</h3>
            <PurchaseBtn onClick={checkoutHandle}>Purchase</PurchaseBtn>
            </PurchaseSection>
          )}
      </CartStyle>
    </CartWrapper>
  )
}

export default Cart