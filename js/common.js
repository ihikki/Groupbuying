//命名空间
window.bobi= {};
//添加过渡
window.bobi.addTransition = function (obj){
    obj.style.transition = "all 1s";
    obj.style.webkitTransition = "all 1s";
};
//移除过渡
window.bobi.removeTransition = function (obj){
    obj.style.transition = "none";
    obj.style.webkitTransition = "none";
};
//过渡结束绑定事件
window.bobi.addEvent = function(obj,callback){
    obj.addEventListener('transitionEnd',callback);
    obj.addEventListener('webkitTransitionEnd',callback);
};
//移除过渡结束绑定事件
window.bobi.removeEvent = function(obj,callback){
    obj.removeEventListener('transitionEnd',callback);
    obj.removeEventListener('webkitTransitionEnd',callback);
};
//设置平移
window.bobi.setTranslate=function(obj,X,Y){
    obj.style.transform=`translate(${X}px,${Y}px)`;
    obj.style.webkitTransform=`translate(${X}px,${Y}px)`;
}

//轻触事件
window.bobi.tap=function(obj,callback){
    var start=0;
    var end=0;
    var isMove=false;
    obj.addEventListener("touchstart",function(){
        start=(new Date()).getTime();
    })
    obj.addEventListener("touchmove",function(){
        isMove=true;
    })
    obj.addEventListener("touchend",function(){
        end=(new Date()).getTime();
        if(!isMove&&(end-start)<150){
            callback();
        }
        start=0;
        end=0;
        isMove=false;
    })
}

window.bobi.getStyle=function(obj, str) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[str]
    }
    else {
        return obj.currentStyle[str];
    }
}