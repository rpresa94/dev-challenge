const body = document.body;
window.addEventListener('load', checkSidebar());

function checkSidebar() {
  (960 > window.innerWidth) ? removeClass(body, 'show-sidebar') : addClass(body, 'show-sidebar');
}

function toggleSidebar() {
  hasClass(body, 'show-sidebar') ? removeClass(body, 'show-sidebar') : addClass(body, 'show-sidebar');
}

function toggleOverlay() {
  hasClass(body, 'show-overlay') ? removeClass(body, 'show-overlay') : addClass(body, 'show-overlay');
}


// Helpers
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}
