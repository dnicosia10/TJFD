

$(document).ready(function(){
        alert("OKS");
})
$(".try-p").text("Try words")
.css("background-color","blue");
// var a = 9;
// console.log(a);
//document.writeln(a);
// var add = function(a,b){
//     return a+b;
// }
// var math = function(a,b,operation){
//     return operation(a,b);
// }
// var answer = math(6,3,function(a,b){
//     return a-b;
// });
// document.writeln(answer);
// document.write(math(4,7,add));
// $(".p-try")
// .text("hi")
// .css("background-color","cyan");
// var a = $(".p-try").text("yow");
// a.css("background","red");

// var button = ".alert-btn";
// var input = ".input-btn";
// $(button).click(function() {alert("hey watsup!"); $('.alert-btn').text('changed')});

// var alertFunc = function(btnf,inputf){
//   $(btnf).click(function(){
//   var value =$(inputf).val();
//   alert("this is the value:" + value);
//   $(".p-try").css("background-color","green").text(value);
// })
// }
// alertFunc(button,input);
$(button).click(function(){
        $(".p-try").text("....Loading");
        $.ajax({
        type:"GET",
        url:"connect.php",
        success: function(data) {
          $(".p-try").text(JSON.stringify(data));
        },
        dataType:'jsonp',
      });
      });