$(document).ready(function() {
alert("lets do this!")

var ryudiv = $(".ryu")
var stillryu = $(".ryu-still");
var readyryu = $(".ryu-ready");
var throwryu = $(".ryu-throwing");
var coolryu = $(".ryu-cool");
var targetryu = $(".ryu-target");
var hadouken = $(".hadouken");
var allryu = $(".ryu-hideall");
var cutelady = $(".cute-lady");

  $(document).keydown(function(e) {
    if (e.keyCode == 88) {
      allryu.hide();
      coolryu.show();
      cutelady.show();
      $("#fancylady").show();
      $("#press").hide();
      $("#click").hide();
    }   
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      allryu.hide();
      $("#fancylady").hide();
      $("#press").show();
      $("#click").show();
      stillryu.show();
    }
  });

ryudiv.mouseenter(function(){
	stillryu.hide();
    readyryu.show();

})
.mouseleave(function(){
    readyryu.hide();
    stillryu.show();
})

.mousedown(function(){
	playHadouken();
    console.log("mousedown shoot");
    allryu.hide();
    throwryu.show();
    targetryu.show();
    hadouken.show()
    
    .animate(
  	{'left': '200px'},
  		500,
  		function() {
    	$(this).hide();
    	$(this).css('left', '-212px');
  	});
})
.mouseup(function(){
    console.log("mouseup back");
    allryu.hide();
    readyryu.show();
})
});
 
 function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


 // stillryu.click(function(){
 //    stillryu.hide();
 //    readyryu.show();
 //  });

 // readyryu.click(function(){
 //    readyryu.hide();
 //    throwryu.show();

 //  });

 // readyryu.mousedown(function(){
 //    readyryu.hide();
 //    stillryu.hide();
 //    throwryu.show();
 //    hadouken.show();
 //  });

 //  throwryu.mouseup(function(){
 //    readyryu.show();
 //    stillryu.hide();
 //    throwryu.hide();
 //    hadouken.hide();
 //  });
