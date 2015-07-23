function createPanel(target,columns,rows,labels,panelCSSClass,isMulti){
    var isMulti=isMulti?isMulti:false;

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
        /*children[i].ontoucend=upHandler;
        children[i].onmouseup=upHandler;*/
        children[i].classList.add(panelCSSClass);
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
                item.addEventListener("mouseup",function(){
                    item.toggle=!item.toggle;
                });
                item.addEventListener("touchend",function(e){
                    e.preventDefault();
                    item.toggle=!item.toggle;
                });
                item.addEventListener("transitionend",function(){
                    if(isMulti){

                    } else{
                        alert("Do what you want here! You select "+item.innerText);
                    }
                });
            })
        },
        afterEffect:function(func){
            panelArr.forEach(function(item){
                item.addEventListener("transitionend",func);
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
        },
        getContents:function(){
            var selected=[];
            panelArr.forEach(function(item){
                if(item.toggle){
                    selected.push(item.innerText);
                }

            });
            return selected.join(",");
        },
        multiSelect:isMulti


    }
}