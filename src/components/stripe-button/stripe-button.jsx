import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100; //stripe wants price in US cents
   const publishableKey = 'pk_test_51GsmrGBp28TBmKjuq5pjX1BYmJIzGiB50p4EcXtlNjs7eAIsUgTszN0gQCMXUZp83mKh6ZwaIJ1dkWayVf4XVozo00bZP7umTr';
    
   const onToken = token => {
       alert('Order Successful!');
       console.log(token)
   }
   
   return(
        <StripeCheckout
            label='Pay Now'
            name='Phoenix Clothing Ltd'
            billingAddress
            shippingAddress
            currency="GBP"
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;