window.onload=function(){
    backTop();
    advDisappear();
    showMask(leftSwipe);  
    maskBack() 
}
function backTop(){
    window.onscroll=function(event){
        var Y=window.pageYOffset;
        var backBtn=document.querySelector(".backtotop");
        if(Y<150){
            
            backBtn.style.display="none";
           
        }
        else {
            backBtn.style.display="block";
        }
    }
    var backBtn=document.querySelector(".backtotop");
    window.bobi.tap(backBtn,function(){
        window.scrollTo(0,0)
    })
}

function advDisappear(){
    var closed=document.querySelector(".closed");
    var footCon=document.querySelector(".footer");
    window.bobi.tap(closed,function(){
        footCon.style.display="none"
    })
}


function leftSwipe(){

    var parentBox = document.querySelector('.left_cate');
    var childBox = parentBox.querySelector('ul');
    var h = parentBox.offsetHeight;
    var H = childBox.offsetHeight;
    var distance = 30;
    var minPosition = -(H-h);
    var maxPosition = 0;
    var minSwipe = -(H-h)-distance;
    var maxSwipe = distance;
    var currY = 0;
    var startY = 0;
    var moveY = 0;
    var isMove = false;
    childBox.addEventListener('touchstart',function(event){
        startY = event.touches[0].clientY;
    });
    childBox.addEventListener('touchmove',function(){
        isMove = true;
        moveY = event.touches[0].clientY;
        if(currY+moveY-startY<maxSwipe&&currY+moveY-startY>minSwipe){
            window.bobi.removeTransition(childBox);
            window.bobi.setTranslate(childBox,0,currY+moveY-startY)
        }
    });
    childBox.addEventListener('touchend',function(){
        if(isMove){
            if(currY+moveY-startY>maxPosition){
                currY = maxPosition;
            }else if(currY+moveY-startY<minPosition){
                currY = minPosition
            }else{
                currY = currY+moveY-startY;
            }
            window.bobi.addTransition(childBox);
            window.bobi.setTranslate(childBox,0,currY);
        }
        startY = 0;
        moveY = 0;
        isMove = false;
        
    });
    bobi.tap(childBox,function(){
        var currLi = event.target;
        var liArr = childBox.children;
        var rightCate=document.querySelector(".right_cate");
        var rightUl=rightCate.children;
        for(var i=0;i<liArr.length;i++){
            liArr[i].className = "";
            rightUl[i].className="";
            liArr[i].index = i;
        }
        currLi.className = "now";
        var index = currLi.index;
        rightUl[index].className="cur";
        rightUl[index].style.transform="translate(0px,0px)";
        var rightLiArr=rightUl[index].children;
        for(var j=0;j<rightLiArr.length;j++){
            rightLiArr[j].className="";

        }
        var liHeight = currLi.offsetHeight;
        if(-index*liHeight>minPosition&&(-index*liHeight)<maxPosition){
            currY = -index*liHeight
        }else if(-index*liHeight<minPosition){
            currY = minPosition;
        }
        bobi.addTransition(childBox);
        bobi.setTranslate(childBox,0,currY);
        rightSwipe();
    })

}

function showMask(fn){
    var allKind=document.querySelector(".allkind");
    var main=document.querySelector(".main");
    var mask=document.querySelector(".mask");
    bobi.tap(allKind,function(){
        main.style.overflow="hidden";
        mask.style.display="block";
        if(fn){fn()}
    })
}

function rightSwipe(){
    
    var parentBox = document.querySelector('.right_cate');
    var childBox = parentBox.querySelector('.cur');
    var h = parentBox.offsetHeight;
    var H = childBox.offsetHeight;
    if(h<H){
    var distance = 30;
    var minPosition = -(H-h);
    var maxPosition = 0;
    var minSwipe = -(H-h)-distance;
    var maxSwipe = distance;
    var currY = 0;
    var startY = 0;
    var moveY = 0;
    var isMove = false;
    childBox.addEventListener('touchstart',function(event){
        startY = event.touches[0].clientY;
    });
    childBox.addEventListener('touchmove',function(){
        isMove = true;
        moveY = event.touches[0].clientY;
        if(currY+moveY-startY<maxSwipe&&currY+moveY-startY>minSwipe){
            window.bobi.removeTransition(childBox);
            window.bobi.setTranslate(childBox,0,currY+moveY-startY)
        }
    });
    childBox.addEventListener('touchend',function(){
        if(isMove){
            if(currY+moveY-startY>maxPosition){
                currY = maxPosition;
            }else if(currY+moveY-startY<minPosition){
                currY = minPosition
            }else{
                currY = currY+moveY-startY;
            }
            window.bobi.addTransition(childBox);
            window.bobi.setTranslate(childBox,0,currY);
        }
        startY = 0;
        moveY = 0;
        isMove = false;
        
    });
    }
    bobi.tap(childBox,function(){
        var currLi = event.target;
        var liArr = childBox.children;
        for(var i=0;i<liArr.length;i++){
            liArr[i].className = "";
            liArr[i].index = i;
        }
        currLi.className = "now";
        var index = currLi.index;
        var liHeight = currLi.offsetHeight;
        if(-index*liHeight>minPosition&&(-index*liHeight)<maxPosition){
            currY = -index*liHeight
        }else if(-index*liHeight<minPosition){
            currY = minPosition;
        }
        bobi.addTransition(childBox);
        bobi.setTranslate(childBox,0,currY);
    })

}

function maskBack(){
    var BackArea=document.querySelector(".mask_back");
    var main=document.querySelector(".main");
    var mask=document.querySelector(".mask");
    bobi.tap(BackArea,function(){
        main.style.overflow="visible";
        mask.style.display="none";
    })
}

