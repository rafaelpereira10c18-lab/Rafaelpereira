// Google tag (gtag.js)
(function() {
  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  // Configure gtag
  gtag('js', new Date());
  gtag('config', 'AW-17888254668');

  // Load the gtag.js script
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17888254668';
  
  // Fire conversion event after script loads
  script.onload = function() {
    // Event snippet for Visualização de página conversion page
    gtag('event', 'conversion', {
      'send_to': 'AW-17888254668/pnSfCO7-xegbEMy15NFC',
      'value': 1.0,
      'currency': 'EUR'
    });
  };
  
  document.head.appendChild(script);
})();
