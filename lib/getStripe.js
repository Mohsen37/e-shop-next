import {loadStripe} from '@stripe/stripe-js'

let stripe

const getStripe = async () => {
  if(!stripe){
    stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH)
  }
  return stripe
}

export default getStripe