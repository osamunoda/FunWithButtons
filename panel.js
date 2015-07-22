init();
/*
document.ontouchstart=function(e){
    e.preventDefault();
};
window.orientationchange=function(){
    init();
};
*/
function init(){
    document.body.style.background="black";
    lowerPanel.style.height=(window.innerHeight - header.getBoundingClientRect().height)+"px";
    var w=window.innerWidth-20;
    var h=window.innerHeight-header.getBoundingClientRect().height-20;
    var min=w<h?w:h;
    var frameWidth=parseInt(min*0.9);
    frame.style.width=frameWidth+"px";
    frame.style.height=frameWidth*0.75+"px";
}

var mypanel=createPanel(frame,3,4,["a","b","c","d","e","f","g","h","i"]);
btnBack.onmouseup=function(){
    clickEffect(this,"btnEffect");
    //location.href="fmp://_HOST_/__DB__?script=__SCRIPT__&param="+mypanel.getIDs();

};

var defaultSetting={
    width:"60%",
    height:"60%",
    viewBox:"0 0 40 40",
    "fill-opacity":"0.5"
};
mypanel.upHandler(function(){
    this.classList.toggle("change");
});
mypanel.afterEffect(function(){
    /*this.classList.toggle("afterEffect");*/
});
function clickEffect(elm,effect){
    elm.classList.add(effect);
    setTimeout(function(){
        elm.classList.remove(effect);

    },500);

};