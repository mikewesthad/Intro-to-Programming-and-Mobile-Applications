// Code wrapped in annonymous function to prevent collisions
$(document).ready(function() {

  var ndbAPICall = "http://api.nal.usda.gov/usda/ndb/search";
  var callParameters = {
    format: "json",
    q: "butter",
    sort: "n",
    max: "25",
    offset: "0",
    api_key: "nGaK10u7f4V6pugwf4goIeJtFo6fLKSBKjt4YlI8"
  };

  function handler(data, status) {
    $("h2#requestStatus").text("Status of the search request: " + status);
    $("h2#version").text("NDB Version: " + data.list.sr);
    $("h2#query").text("Query: " + data.list.q);
    for (var i=0; i<data.list.item.length; i++) {
      $("ul#searchResults").append("<li>" + data.list.item[i].name + "</li>");
    }
    console.log("Recieved data");
  }

  $.getJSON(ndbAPICall, callParameters, handler);

});