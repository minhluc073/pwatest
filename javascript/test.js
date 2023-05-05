var H = jQuery(window).height();
console.log(H);
var headerHeight = $("#header").height();
console.log(headerHeight);
var footerHeight = $("#footer").height();
console.log(footerHeight);
var contentHeight = document.getElementById("content");
console.log(contentHeight);
var heightTest = H - (headerHeight + footerHeight);
contentHeight.style.height = heightTest + "px";

console.log("height", heightTest);
