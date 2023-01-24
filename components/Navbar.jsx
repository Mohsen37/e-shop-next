import Link from "next/link"
import {useUser} from '@auth0/nextjs-auth0/client'
import {useRouter} from 'next/router'
import {BsFillBagFill} from 'react-icons/bs'
import {RiAccountCircleFill} from 'react-icons/ri'
import {Nav,Icons,IconAcount,IconShop} from '../styles/NavbarStyle'
import Cart from "./Cart"
import {useStateContext} from '../lib/context'
const { AnimatePresence,motion } = require("framer-motion");


function Navbar() {
  const router = useRouter()
  const { user, error, isLoading } = useUser();

  const {showCart, setShowCart, totalQuantities} = useStateContext()
  return (
    <Nav>
      <Link href={'/'}>
        <h1>SIGMNOR</h1>
      </Link>
      <Icons>
        <IconAcount onClick={() => router.push('/api/auth/login')}>
          {user? <img src={user.picture} onClick={() => router.push('/profile')} /> : <RiAccountCircleFill />}
        </IconAcount>
        <IconShop onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && <motion.span initial={{scale:0}} animate={{scale:1}}>{totalQuantities}</motion.span> }
          <BsFillBagFill />
        </IconShop>
      </Icons>
      <AnimatePresence>
        {showCart && <Cart />}
      </AnimatePresence>
    </Nav>
  )
}

export default Navbar