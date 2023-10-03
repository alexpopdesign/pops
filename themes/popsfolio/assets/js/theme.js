/**
 *  POPOVERS initials
 *  ========================================
*/
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

/**
 *  TOOLTIPS initials
 *  ========================================
*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/**
 *  On DOM ready events
 *  ========================================
 *  These events are related to browser window changes
*/
var html = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)

window.onload = function() {
  html.classList.add('pageloaded');
};

// Add "domready" class to HTML
document.addEventListener('DOMContentLoaded', function() {
  html.className = 'smooth-scroll domready';
});


// if (document.readyState !== "loading") {
//   html.classList.add('domready');
// } else {
//   html.className = '';
// }


// Add "scrolled" class to HTML element if window scrolled with throttling
// https://www.afasterweb.com/2017/09/26/performance-basics-throttling/
var lastScrollPosition = 0,
    tick = false;  // Track whether call is currently in process
function scrollWindow (scrollPos) {
  scrollposition = window.scrollY;
  if (scrollposition > 0) {
    html.classList.add('scrolled');
  } else { 
    html.classList.remove('scrolled');
  }
  // Scrolled Btn
  if (scrollposition > 800) {
    html.classList.add('scrolledBtn');
  } else { 
    html.classList.remove('scrolledBtn');
  }
}

window.addEventListener('scroll', function(e) {
  lastScrollPosition = window.scrollY;
  if (!tick) {
    setTimeout(function () {
      scrollWindow(lastScrollPosition);
      tick = false;
    }, 20)
  }
  tick = true;
});

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/**
 *  jQUery
 *  ========================================
*/