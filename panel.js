/**
 * APIs
 *
 * function createPanel(targetElement, rows, columns, labelsArray, panelCSSClassName, isMultiSelection )
 * return value : reference to the panel
 *
 * The panel has following methods.
 *
 * upHandler(fun)
 * fun : mouseup/touchend event handler
 *
 * downHandler(fun)
 * fun : mousedown/touchstart event handler
 *
 * afterEffect(fun)
 * fun : transitionend event handler
 *
 * getContents()
 * return value : list of selected panel
 *
 */

var rightTopButton=document.querySelector("#btnBack"), /* leave this page */
    panelPart=document.querySelector("#lowerPanel"), /* lower part of this page */
    header=document.querySelector("#header"), /* upper part of this page */
    frame=document.querySelector("#frame"); /* element which contains the panel */

var mypanel=createPanel(frame,3,4,["a","b","c","d","e","f","g","h","i"],"target",true);
rightTopButton.onmouseup=function(){
    clickEffect(this,"btnEffect");
    alert(mypanel.getContents());
    //location.href="fmp://_HOST_/__DB__?script=__SCRIPT__&param="+mypanel.getIDs();
};
mypanel.upHandler(function(){
    this.classList.toggle("change");
});
mypanel.afterEffect(function(){
    /*this.classList.toggle("afterEffect");*/
});
/*Set the position / size of the panel*/
init();
window.orientationchange=function(){
    init();
};
document.ontouchstart=function(e){
    e.preventDefault();
};


function init(){
    panelPart.style.height=(window.innerHeight - header.getBoundingClientRect().height)+"px";
    var w=window.innerWidth-20;
    var h=window.innerHeight-header.getBoundingClientRect().height-20;
    var min=w<h?w:h;
    var frameWidth=parseInt(min*0.9);
    frame.style.width=frameWidth+"px";
    frame.style.height=frameWidth*0.75+"px";
}

function clickEffect(elm,effect){
    elm.classList.add(effect);
    setTimeout(function(){
        elm.classList.remove(effect);
    },500);
}