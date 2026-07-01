const GA_MEASUREMENT_ID = 'G-QF6FXNR4BR';

window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

const gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
document.head.appendChild(gtagScript);

gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID);
