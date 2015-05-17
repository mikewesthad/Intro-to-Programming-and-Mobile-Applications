// Code wrapped in annonymous function to prevent collisions
(function() {

  var ndbAPICall = "http://api.nal.usda.gov/usda/ndb/search/";
  var callParameters = {
    format: "json",
    q: "butter",
    sort: "n",
    max: "25",
    offset: "0",
    api_key: "nGaK10u7f4V6pugwf4goIeJtFo6fLKSBKjt4YlI8"
  };

  function handler(data) {
    console.log("Recieved data");
  }

  $.getJSON(ndbAPICall, callParameters, handler);

})();