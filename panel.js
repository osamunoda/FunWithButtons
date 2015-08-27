/**
 * fmPanel.js APIs
 *
 * function createPanel(targetElement, rows, columns, labelsArray, panelCSSClassName, isMultiSelection )
 *
 * targetElement : the container element of this panel
 * rows : number of rows of this panel
 * columns : number of columns of this panel
 * labelsArray : array of labels of this panel
 * panelCSSClassName : basic style of each panel - class name or object which defines properties
 * isMultiSelection : choose multi panels or not
 *
 * return value : reference to this panel
 *
 * === The panel has following methods which affect all buttons. ===
 *
 * toggle( className/property-set(object) )
 * className : you can specify the behaviour of buttons on click, specifying the className/property-set(object)
 *
 * afterEffect(className/property-set(object))
 * className : applied style after transition-end
 *
 * decorate( property-set(object) )
 * property-set : add pseudo-element(::after) to each button
 *
 * effectDecorate( property-set(object) )
 * property-set : add pseudo-element(::before) to each button which is selected
 *
 * getContents()
 * return value : list of selected buttons
 *
 */



/*========================== Sample button styles  =============================*/
var sampleIndex=1;
/* basic style of button */
var sampleCSS=[];
 sampleCSS[0]={
    "background-image":"-webkit-radial-gradient(circle,white 23%,pink 24%,white 25%)",
    "-webkit-transition":"0.3s ease-in background-size",
    "background-size":"0%",
    "background-repeat":"no-repeat",
    "background-position":"center",
    "background-color":"#eee",
    color:"#777",
    font:"32px arial"
};
sampleCSS[1]={
    "background-image":"-webkit-radial-gradient(circle,blue 20%, transparent 20%)",
    "-webkit-transition":"0.3s ease-in background-size",
    "background-size":"0%",
    "background-repeat":"no-repeat",
    "background-position":"center",
    "background-color":"#eee",
    font:"32px sans-serif"
};
sampleCSS[2]={
    "border":"1px solid #aaa",
    "background":"#c00",
    "border-radius":"20px",
    "color":"#ddd",
    "text-shadow":"0 -1px black",
    "position":"relative",
    "font":"2rem sans-serif",
    "box-shadow":"inset 0 -0.3em 0.4em rgba(0,0,0,0.2),inset 0 0.3em 0.3em rgba(255,255,255,0.6),inset 0 0 10px #aaa,0 3px 5px #a00",
    "-webkit-user-select":"none"
};
sampleCSS[3]={
    "border-radius":"8px",
    "font":"18px sans-serif",
    "background-color":"red",
    "color":"white",
    "-webkit-transition":"1s",
    "background-image":"-webkit-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3))"
};
sampleCSS[4]={
    "border":"1px solid #aaa",
    "background":"#ccc",
    "color":"#eee",
    "text-shadow":"0 -1px black",
    "position":"relative",
    "font":"2rem sans-serif",
    "box-shadow":"inset 0 -0.2em 0.3em rgba(0,0,0,0.2),inset 0 1em 1em rgba(255,255,255,0.6),inset 0 0 10px #aaa,0 3px 5px #aaa",
    "-webkit-user-select":"none"
};

/*------------------------------------------------------------------------------*/

/* Decorator style (::after pseudo-element) */
var decoratorCSS=[];
decoratorCSS[2]={
    "content":"''",
    "position":"absolute",
    "width":"94%",
    "height":"50%",
    "left":"3%",
    "top":"0%",
    "background":"-webkit-linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.3))",
    "border-radius":"0% 0% 50% 50%"
};
decoratorCSS[4]={
    "content":"''",
    "position":"absolute",
    "width":"20px",
    "height":"20px",
    "left":"8%",
    "top":"8%",
    "background":"rgba(0,0,0,0.5)",
    "border-radius":"50%",
    "opacity":"0.5",
    "z-index":"1",
    "box-shadow":"inset 2px 2px #555"
};
/*------------------------------------------------------------------------------*/
/* specify the behaviour( class name or property-set( object ) ) on click */
/* Add effects on click - sample CSS */
var effectCSS=[];
effectCSS[0]={
    "background-size":"500%"
};
effectCSS[1]={
    "background-size":"500%",
    "color":"white"
};
effectCSS[2]={
    "box-shadow":"inset 0 -0.3em 0.4em rgba(0,0,0,0.2),inset 0 0.3em 0.3em rgba(255,255,255,0.6),inset 0 0 10px #aaa,0 0 1px #a00",
    "-webkit-transform":"translateY(3px)",
    "background":"red"
};
effectCSS[3]={
    "-webkit-transform":"perspective(600) rotateY(180deg)",
    "background-color":"gray",
    "color":"#ccc"
};
effectCSS[4]={"color":"white","text-shadow":"0 0 1px green"};
/*------------------------------------------------------------------------------*/
/* effectDecorator */
var effectCSSDecorate=[];
effectCSSDecorate[4]={
    "content":"''",
    "position":"absolute",
    "width":"20px",
    "height":"20px",
    "left":"8%",
    "top":"8%",
    "background":"lightgreen",
    "border-radius":"50%",
    "z-index":"10",
    "box-shadow":"inset 1px 1px #777,0 0 15px lightgreen"
};
/*------------------------------------------------------------------------------*/
/* Add effects after transitionend */
var endCSS=[];
endCSS[0]={color:"pink","box-shadow":"inset 0 0 5px pink"};
endCSS[1]={color:"white","box-shadow":"inset 0 0 5px white"};
endCSS[3]={"text-decoration":"line-through"};
/*===================================================================================*/



/************************************************************************************* setup header part **/

var rightTopButton=document.querySelector("#btnBack"), /* leave this page */
    panelPart=document.querySelector("#lowerPanel"), /* lower part of this page */
    header=document.querySelector("#header"), /* upper part of this page */
    frame=document.querySelector("#frame"); /* element which contains the panel */

rightTopButton.onmouseup=function(){
    clickEffect(this,"btnEffect");
    alert(mypanel.getContents());
    //location.href="fmp://_HOST_/__DB__?script=__SCRIPT__&param="+mypanel.getIDs();
};


/**************************************************************************************** setup the Panel **/

var mypanel=createPanel(frame,3,4,["a","b","c","d","e","f","g","h","i"],sampleCSS[sampleIndex],true);
if(decoratorCSS[sampleIndex]){
    mypanel.decorate(decoratorCSS[sampleIndex]);
}
if(effectCSS[sampleIndex]){
    mypanel.toggle(effectCSS[sampleIndex]);
}
if(endCSS[sampleIndex]){
    mypanel.afterEffect(endCSS[sampleIndex]);
}
if(effectCSSDecorate[sampleIndex]){
    mypanel.effectDecorate(effectCSSDecorate[sampleIndex]);
}

/* Set the position / size of the panel */
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