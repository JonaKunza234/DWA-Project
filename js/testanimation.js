console.clear();
TweenLite.defaultEase = Linear.easeNone;
var dur = 20;
var scale = -1;

TweenMax.set("#animStuff", {transformOrigin:"center center", scaleX:scale});
TweenMax.set("#rocket", {xPercent:-50, yPercent:-50, transformOrigin:"center center"});

TweenMax.to("#rocket", dur/2, {bezier:{values:MorphSVGPlugin.pathDataToBezier("#motionPath"), type:"cubic", autoRotate:90}, repeat:-1});
TweenMax.to("image", dur, {rotation:360, transformOrigin:"center center", repeat:-1});

document.querySelector("#action").addEventListener("click", doCoolStuff);

function doCoolStuff() {
  scale = scale === 1 ? -1 : 1;
  TweenMax.set("#animStuff", {scaleX:scale});
}