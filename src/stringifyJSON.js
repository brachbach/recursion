// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


//things that this needs to deal with according to the spec: ~all primitives, objects, arrays
//doesn't need to deal with: functions, undefined
//[1,2].toString() returns "1,2"
//object to string returns nonsense
//things that can't simply be .toString'ed: null, arrays, objects. typeof null = object btw. Start w/ object and drill down.
//note that .toString of an array gives you the values separated by commas, collapsing any inner structure of nesting
var stringifyJSON = function(obj) {
  if (typeof obj == "object") {
  	if (obj === null) {
  	  return "null";
  	};
  	if (Array.isArray(obj)) {
  	  var content = obj.reduce(function(accumulator,item){
  	  	return accumulator + stringifyJSON(item) + ","
  	  },"")
  	  return "[" + content.slice(0,-1) + "]"
  	} else {
  	  var content = "";
  	  for (key in obj) {
  	  	content += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
  	  }
  	  return "{" + content.slice(0,-1) + "}"
  	}
  };
  if (typeof obj == "string") {
  	return '"' + obj + '"'
  }
  return obj.toString()
};
