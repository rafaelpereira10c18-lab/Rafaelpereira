// Google tag (gtag.js)
(function() {
  // Load the gtag.js script
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17888254668';
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  // Configure gtag
  gtag('js', new Date());
  gtag('config', 'AW-17888254668');
})();
