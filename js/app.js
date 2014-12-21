$(document).ready(function() {
alert("lets do this!")

var ryudiv = $(".ryu")
var stillryu = $(".ryu-still");
var readyryu = $(".ryu-ready");
var throwryu = $(".ryu-throwing");
var hadouken = $(".hadouken");

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
    readyryu.hide();
    throwryu.show();
    hadouken.show();
})
.mouseup(function(){
    console.log("mouseup back");
    throwryu.hide();
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
