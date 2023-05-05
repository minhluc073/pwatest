var H = jQuery(window).height();
console.log(H);
var headerHeight = $("#header").height();
console.log(headerHeight);
var footerHeight = $("#footer").height();
console.log(footerHeight);
var contentHeight = H - (headerHeight + footerHeight);
console.log(contentHeight);
