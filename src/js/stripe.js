export const loadStripeCheckout = callback => {
    let e = document.createElement('script');
    e.src = `https://sandbox-assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js`;
    e.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(e);
    e.addEventListener('load', callback);
};
