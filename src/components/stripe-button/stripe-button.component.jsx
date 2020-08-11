import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  console.log(token);
  alert('Payment successful.');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey =
    'pk_test_51HF4yGFusmerhZmLEridEEG7E1SkhFSlZAu8AhEVWKp2xnnU1qxECAJSWYufcEy2uKBOuoaBRKkjnl1y6U6G0yVZ00T0HltRmf';

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.sgv'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeCheckoutButton;
