$(".p-try")
  .text("hi")
  .css("background-color","cyan");
var a = $(".p-try").text("yow");
a.css("background","red");

var button = ".alert-btn";
var input = ".input-btn";

$(button).click(function(){
  var value =$(input).val();
  $(".p-try").text("....Loading")
  .css("background-color","green");
  $.ajax({
  type:"GET",
  url:"https://www.reddit.com/r/aww/search.json?q="+ value +"&restrict_sr=true",
  success: function(response) {
    $('.p-try').html("");
    for(var i=0; i < response.data.children.length;i++){
    console.log(i);
      var image = "<img src='" + response.data.children[i].data.thumbnail + "'/>";
      $('.p-try').append(image);
      console.log(image);
    }
  }
  
});
});

// $(button).click(function() {alert("hey watsup!"); $('.alert-btn').text('changed')});

// var alertFunc = function(btnf,inputf){
//   $(btnf).click(function(){
//   var value =$(inputf).val();
//   alert("this is the value:" + value);
//   $(".p-try").css("background-color","green").text(value);
// })
// }
// alertFunc(button,input);