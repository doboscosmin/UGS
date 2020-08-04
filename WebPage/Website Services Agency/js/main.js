
//Efectele din Header


TweenMax.fromTo('.header-title h2 ', 0.6, { y: 80, opacity: 0 }, {y: 0, opacity:1, delay:1 });

TweenMax.fromTo('.header-description p ', 0.6, { y: 80, opacity: 0 }, {y: 0, opacity:1, delay:1.5 });

$('.box1 ,.box2,.box3,.box4').hover(function() {
    TweenMax.to($(this), 0.5, { y:-10, scale: 1.03 });
    TweenMax.to($(this), 0.5, { boxShadow: '0 0 20px rgba(0,0,0,0.36)'  });
},
                                    function() {
    TweenMax.to($(this), 0.5, { y:0, scale: 1 });
    TweenMax.to($(this), 0.5, { boxShadow: '0 0 20px rgba(0,0,0,0.06)'  });
});

//Cele doua cercuri 
TweenMax.to('.cogLeft', 8, { rotation:360, repeat:-1, ease: Linear.easeNone });
TweenMax.to('.cogRight', 8, { rotation:-360, repeat:-1, ease: Linear.easeNone });

//Banner de jos



$('#section-4').hover(function() {

    TweenMax.staggerTo('#section-4',1,{x:360},0.01);
});

//Efecte de numaratoare la cele douaa chenare
function count(){
    var counter = { var: 0 };
    TweenMax.to(counter, 4, {
        var: 92, 
        onUpdate: function () {
            $('.procent1').html(Math.ceil(counter.var)+"%");
        },
        onComplete: function(){

            count();

        },    
        ease:Circ.easeOut,
        delay:3.5
    });

}
count(); 

function count2(){
    var counter = { var: 0 };
    TweenMax.to(counter, 3, {
        var: 3, 
        onUpdate: function () {
            $('.procent2').html("+"+Math.ceil(counter.var)+".125%");
        },
        onComplete: function(){

            count2();

        },    
        ease:Circ.easeOut,
        delay:3.5
    });

}
count2();

//Efect de levitare pe poze
const can = document.querySelector(".photos");

const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

TweenLite.set(can, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(can, 1);
moveY(can, -1);
rotate(can, 1);

function rotate(target, direction) {
  
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}
//Slide banner animat

function projects3(){
    var banner=new TimelineMax({repeat:-1});
        banner
            .fromTo('.projects',9,{x:-330},{x:400},1)
            .fromTo('.projects',9,{x:400},{x:-330})
    ;
    
    return banner;
}


function go(){
        var masterTL=new TimelineMax();

        masterTL
            .add( projects3(),'scene-clear-stage') 
        ;
    }
    go();

