jquery.scrollParams
====================

$().scrollParams tests for scrollbar visibility and widths.
Useful when auto sizing container DOM elements without causing window scrolling.

//Element to size
var container = $("container");

//Current Stylesheet
var cStyle = window.getComputedStyle(document.body);

//Dog Food
var params = $("<div>").scrollParams();

//Which (Window or Element) is bigger?
var maxHeight = Math.max(parseInt(cStyle.height, 10), window.innerHeight - container[0].offsetTop);

//Is the presence of the vertical scrollbar causing the horizontal one to appear?
var isVertWhyHorz = ((window.innerWidth + scrollParams.vertical.width) > parseInt(cStyle.minWidth, 10));

//Reduce max height if scrollbars are present 
maxHeight -= (isVertWhyHorz * scrollParams.horizontal.width);

//Set Height
container.height(maxHeight);
