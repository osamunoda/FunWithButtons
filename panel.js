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
    this.toggle=!this.toggle;
    var subSVG=this.querySelector("svg");
    this.style.background=this.toggle?"#fff":"#333";
    subSVG.setAttribute("fill-opacity",this.toggle?"1":"0.5");
    var subRect=this.querySelector("rect");
    if(this.toggle){
        if(mypanel.count()>5){
            //location.href="fmp://_HOST_/__DB__?script=alertFuncs&param=" + mypanel.count();
            this.toggle=false;
            subSVG.setAttribute("fill-opacity","0.5");
            this.style.background="#333";
            return;

        }
        var box=document.createElement("div");
        box.style.width="30px";
        box.style.height="30px";
        box.style.background=subRect.getAttribute("fill");
        box.style.float="left";
        box.style["box-sizing"]="border-box";
        box.style.border="1px solid white";
        box.style["margin-left"]="1000px";
        box.style["-webkit-transition"]="0.5s";
        box.id=subRect.getAttribute("fill");
        selectedBox.appendChild(box);
        setTimeout(function(){
            box.style["margin-left"]=0;
        },10);
    }else{
        var boxes=[].slice.call(selectedBox.querySelectorAll("div"));
        var toRemove=boxes.filter(function(item){
            return item.id== subRect.getAttribute("fill");
        });
        if(toRemove.length){
            selectedBox.removeChild(toRemove[0]);
            delete toRemove;
        }

    }

});
mypanel.css({
    color:"red",font:"32px sans-serif",background:"#333",
    "box-shadow":"inset 0 0 200px rgba(0,0,0,0.3)",
    border:"2px solid #ccc"
});

var fig1=mypanel.createSVGElm({
    type:"rect",
    x:"5",
    y:"5",
    width:"30",
    height:"30",
    stroke:"#444",
    "stroke-width":2,
    fill:"none",
    rx:"5"
});
mypanel.setSVG(0,fig1);
defaultSetting.id="rect";
mypanel.attr(fig1,defaultSetting);

var fig2=mypanel.createSVGElm({
    type:"circle",
    cx:"20",
    cy:"20",
    r:"15",
    stroke:"#444",
    "stroke-width":2,
    fill:"none"
});
mypanel.setSVG(1,fig2);
defaultSetting.id="circle";
mypanel.attr(fig2,defaultSetting);

var fig3=mypanel.createSVGElm({
    type:"ellipse",
    cx:"20",
    cy:"20",
    ry:"12",
    rx:"19",
    stroke:"#444",
    "stroke-width":2,
    fill:"none"
});
mypanel.setSVG(2,fig3);
defaultSetting.id="oval";
mypanel.attr(fig3,defaultSetting);

var fig4=mypanel.createSVGElm({
    type:"path",
    d:"M10,30L30,10",
    stroke:"#444",
    "stroke-width":2,
    fill:"none"
});
mypanel.setSVG(3,fig4);
defaultSetting.id="line";
mypanel.attr(fig4,defaultSetting);

var fig5=mypanel.createSVGElm({
    type:"path",
    d:"M5,35L30,10zM26,11L29,14L30,10z",
    stroke:"#444",
    "stroke-width":2,
    fill:"#444"/*,
     "marker-end":"url(#myarrow)"*/
});
var marker=mypanel.createMarker({
    type:"polygon",
    points:"4 0 0 2 0 -2"
},fig5);
mypanel.setSVG(4,fig5);
defaultSetting.id="arrow";
mypanel.attr(fig5,defaultSetting);

mypanel.attr(marker,{
    viewBox:"0 -2 4 4",
    refX:"2",
    refY:"0",
    orient:"auto",
    markerWidth:"4",
    markerHeight:"4",
    id:"myarrow",
    fill:"#555",
    "stroke-width":"0"

});

var fig6=mypanel.createSVGElm({
    type:"path",
    d:"M10,6Q15,35 30,25Q40,-10 10,34",
    stroke:"#444",
    "stroke-width":2,
    fill:"none"
});
mypanel.setSVG(5,fig6);
defaultSetting.id="free";
mypanel.attr(fig6,defaultSetting);


var fig7=mypanel.createSVGElm({
    type:"path",
    d:"M10,40 25,10 40,40 25,9 16,9 25,9 25,10 10,40 5,40 15,40 10,40 25,10 40,40 35,40 45,40 40,40 35,30 15,30",
    stroke:"#444",
    "stroke-width":2,
    fill:"none"
});
mypanel.setSVG(6,fig7);
mypanel.attr(fig7,{
    width:"55%",
    height:"55%",
    viewBox:"0 0 50 50",
    id:"text"
});



var fig8=mypanel.createSVGElm({
    type:"path",
    d:"M15,10L15,30M5,20L25,20M20,30L40,30M30,20L30,40",
    stroke:"#444",
    fill:"none",
    "stroke-width":"2"
});
mypanel.setSVG(7,fig8);
mypanel.attr(fig8,{
    width:"60%",
    height:"60%",
    viewBox:"0 0 45 45",
    id:"copy"
});




var fig9=mypanel.createSVGElm({
    type:"path",
    d:"M20,20 20,10 5,25 20,40 20,32 Q40 30 45 45Q40,15 20,18z",
    stroke:"#444",
    fill:"#555",
    "stroke-width":"2"
});
mypanel.setSVG(8,fig9);
mypanel.attr(fig9,{
    width:"50%",
    height:"50%",
    viewBox:"0 0 50 50",
    id:"undo"
});

var fig10=mypanel.createSVGElm({
    type:"path",
    d:"M30,20 30,10 45,25 30,40 30,32 Q10 30 5 45Q10,15 30,18z",
    stroke:"#444",
    fill:"#555",
    "stroke-width":"2"
});
mypanel.setSVG(9,fig10);
mypanel.attr(fig10,{
    width:"50%",
    height:"50%",
    viewBox:"0 0 50 50",
    id:"redo"
});


function createPanel(target,columns,rows,labels){
    /* frame style*/
    target.style.margin=0;
    target.style.padding=0;
    target.style["box-sizing"]="border-box";
    target.style.display="-webkit-flex";
    target.style["-webkit-flex-direction"]="column";


    var SVG="http://www.w3.org/2000/svg";
    var upHandler=function(e){

    };
    for(var i=0;i<columns;i++){
        var divParent=document.createElement("div");

        divParent.classList.add("__panel_parent");
        divParent.style.display="-webkit-flex";
        divParent.style["-webkit-flex"]="1";
        divParent.style["-webkit-flex-direction"]="row";
        target.appendChild(divParent);
    }
    var rowDivs=document.querySelectorAll(".__panel_parent");
    for(var i=0;i<rowDivs.length;i++){
        for(var j=0;j<rows;j++){
            var div=document.createElement("div");
            rowDivs[i].appendChild(div);
            div.classList.add("__panel_child");
            div.style.display="-webkit-flex";
            div.style["-webkit-justify-content"]="center";
            div.style["-webkit-align-items"]="center";
            div.style["-webkit-flex"]="1";
        }
    }
    var children=document.querySelectorAll(".__panel_child");
    for(var i=0;i<children.length;i++){
        //children[i].style.background="url(file:///users/osamu/desktop/gear.png)";
        children[i].innerText=labels[i]?labels[i]:"";
        children[i].toggle=false;
        children[i].ontoucend=upHandler;
        children[i].onmouseup=upHandler;
    }
    var panelArr=[].slice.call(children);
    return  {
        count:function(){
            var counter=0;
            for(var i=0;i<children.length;i++){
                if(children[i].toggle){
                    counter++;
                }
            }
            return counter;
        },
        upHandler:function(func){
            panelArr.forEach(function(item){
                item.onmouseup= func;
                item.ontouchend= func;
            })
        },
        downHandler:function(func){
            panelArr.forEach(function(item){
                item.onmousedown= func;
                item.ontouchstart= func;
            })
        },
        moveHandler:function(func){
            panelArr.forEach(function(item){
                item.onmousemove= func;
                item.ontouchstart= func;
            })
        },
        leaveHandler:function(func){
            panelArr.forEach(function(item){
                item.onmouseleave= func;
            })
        },
        enterHandler:function(func){
            panelArr.forEach(function(item){
                item.onmouseenter= func;
            })
        },
        css:function(attrSet){
            for(var prop in attrSet){
                panelArr.forEach(function(item){
                    item.style[prop]=attrSet[prop];
                })
            }
        },
        attr:function(target,attrSet){
            for(var prop in attrSet){
                target.setAttribute(prop,attrSet[prop]);
            }
        },
        setSVG:function(index,svgElm){
            panelArr[index].innerText="";
            panelArr[index].appendChild(svgElm);
        },
        createSVGElm:function(info,svgObj){
            if(!svgObj){
                var svgObj=document.createElementNS(SVG,"svg");
            }
            var newElm=document.createElementNS(SVG, info.type);
            for(var prop in info){
                if(prop!="type"){
                    newElm.setAttribute(prop, info[prop]);
                }
            }
            svgObj.appendChild(newElm);
            return svgObj;
        },
        createMarker:function(description, svgObj){
            if(!svgObj){
                var svgObj=document.createElementNS(SVG,"svg");
            }
            var newMarker=document.createElementNS(SVG, "marker");
            svgObj.appendChild(newMarker);
            var newElm=document.createElementNS(SVG, description.type);
            for(var prop in description){
                if(prop!="type"){
                    newElm.setAttribute(prop, description[prop]);
                }
            }
            newMarker.appendChild(newElm);
            return newMarker;
        },
        getColors:function(){
            var selected=[];
            panelArr.forEach(function(item){
                if(item.toggle){
                    var rect=item.querySelector("rect");
                    selected.push(rect.getAttribute("fill"));
                }

            });
            return selected.join(",");
        },
        getIDs:function(){
            var selected=[];
            panelArr.forEach(function(item){
                if(item.toggle){
                    var subSVG=item.querySelector("svg");
                    selected.push(subSVG.id);
                }

            });
            return selected.join(",");
        }


    }
}
function clickEffect(elm,effect){
    elm.classList.add(effect);
    setTimeout(function(){
        elm.classList.remove(effect);

    },500);

};