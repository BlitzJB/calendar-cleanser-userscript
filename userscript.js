// ==UserScript==
// @name         Calendar Cleanser
// @namespace    https://calendar.google.com/calendar/u/0/r
// @match        https://calendar.google.com/calendar/u/0/r
// ==/UserScript==

(function() {
  'use strict';
  console.log('Loaded Calendar Cleanser Script')
  window.addEventListener('load', () => {
    document.getElementById('gb').style.display = 'none';
    document.querySelector('.JE11kf').style.display = 'none';
    document.querySelector('.QQYuzf').style.display = 'none';
    document.querySelector('.dwlvNd').style.display = 'none';
    document.querySelector('.gboEAb').style.display = 'none';
    document.querySelector('.Kk7lMc-QWPxkf-LgbsSe-haAclf').style.display = 'none';
    document.querySelector('.SGWAac').style = 'height: 100%'
  }, false);
})();
