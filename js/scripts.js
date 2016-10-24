$(function() {
  var iceCreams = ["chocolate", "vanilla", "strawberry", "mint", "coffee", "almond brittle", "cookie dough", "tequila", "wasabi", "garlic", "meatball", "double fudge", "twinkie"];

  iceCreams.forEach(function(iceCream) {
    $("ul").append("<li>" + iceCream + "</li>");
  });
});
