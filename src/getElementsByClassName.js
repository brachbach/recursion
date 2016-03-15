// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//returns an array of the parts of the DOM (not jQuery objects) that have the given class name. If a parent
//and child both have the name, both will be returned.

//equivalent to return $(document).find('.' + className);. Clearly find makes this trivial!
//however, funny enough, the test suite says that the perverse instantiation fails the test. Not sure why...
//need to make sure not to commit the changes to the test suite

//should try redownloading the test suite if I still have trouble

//I think basically what I want to do is create the results array, 
//use recursion to drill down through the DOM, adding any matching elements 
//to the results array as I go. 
//Potentially somehow using jQuery to get the child nodes at each level, then .each

//the recursion itself here should be fairly "empty", just a means to drill drown

//playing with this, you'll eventually drill down to [] if you keep taking children

//would be good to clarify the difference between element and $(element)

//NEED TO USE document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className) {
  function searchForElementsByClassName(element,className){
    var classList = element.classList || false;
    if (classList) {
      if (classList.contains(className)) { //this isn't working; note that classList is a "DOM token list"
        results.push(element)
      }
    }
    var children = element.childNodes;
    if (children.length > 0) {
      $.each(children, function(index,value) {
        searchForElementsByClassName(value,className);
      });
    }
  };
  var results = []
  var body = document.body
  searchForElementsByClassName(body,className);
  return results;
};
