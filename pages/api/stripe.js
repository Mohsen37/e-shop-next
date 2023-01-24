import Stripe from 'stripe';
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)
import {getSession} from "@auth0/nextjs-auth0";

export default async function handler(req, res){
  const session = getSession(req, res);
  const user = await session?.then(json => json.user);
  const stripeId = user["http://localhost:3000/stripe_customer_id"];

  if(req.method === 'POST'){
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: 'pay',
        mode:'payment',
        customer: stripeId,
        payment_method_types:['card'],
        line_items: req.body.map(item => {
          return {
            price_data:{
              currency:'usd',
              product_data:{
                name:item.title,
                images: [item.image.data.attributes.url]
              }, 
              unit_amount: item.price
            },
            quantity:item.quantity
          }
        }),
        success_url:`${req.headers.origin}/success`,
        cancel_url:`${req.headers.origin}/canceled`
      })
      res.status(200).json(session)
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message)
    }
  }
}
