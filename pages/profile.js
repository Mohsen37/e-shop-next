import { useRouter } from "next/router"
import Stripe from "stripe"
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0"
import styled from "styled-components"


export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx){
    const session = getSession(ctx.req, ctx.res)
    const stripeId = await session.then(json => json.user[`${process.env.BASE_URL}/stripe_customer_id`])
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId
    })
    return {props: {orders: paymentIntents.data}}
  }
})


function Profile({user, orders}) {
  const route = useRouter()
  return (
    user && (
      <Wrapper>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <div>
          {orders.map(order => {
            return (
              <Order>
                <h3>ID : {order.id}</h3>
                <h4>Price: {order.amount}</h4>
                <h4>Receipt Email : {user.email}</h4>
              </Order>
            )
          })}
        </div>
        <LogoutBtn onClick={() => route.push('/api/auth/logout')} >Logout</LogoutBtn>
      </Wrapper>
    )
  )
}

export default Profile

const Order = styled.div`
  background-color: white;
  padding: 3rem;
  margin: 1rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Wrapper = styled.div`
  max-width: 1500px;
  margin: 4rem auto;
`

const LogoutBtn = styled.button`
  background-color: black;
  color: white;
  padding: 1rem 3rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
`