// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elements = document.body.childNodes;
  var matches = []
  for (var i = 0; i < elements.length; i++) {
  	var element = elements[i]
  	var classes = element.classList;
  	if (classes) {
  	  if (classes.indexOf(className) > -1) { // doesn't work b/c classes isn't an array. Probably worth trying a different strategy at this point rather than continuing to mess with these non-array arrays. Also maybe worth looking up what these objects actually are
  	    matches.push(element);
  	  };
  	}  
  }
  return matches
};
