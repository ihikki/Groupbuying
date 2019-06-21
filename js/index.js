window.onload=function(){
    headScroll();
    backTop();
    navAppear();
    slider();
}

function headScroll(){
    var headCon=document.querySelector(".head_con");
    var banHeight=document.querySelector(".banner").offsetHeight;
    var nav=document.querySelector(".nav");
    
    window.onscroll=function(event){
        window.bobi.removeTransition(nav);
        var Y=window.pageYOffset;
        var backBtn=document.querySelector(".backtotop");
        if(Y<banHeight){
            opacity=0.8+Y/banHeight*0.2;
            backBtn.style.display="none";
           
        }
        else {opacity=1;
            backBtn.style.display="block";
        }

        headCon.style.background=`rgba(65,179,255,${opacity})`;
        
        nav.style.top=Y+"px";
        window.bobi.removeTransition(nav);
    }
}

function backTop(){
    var backBtn=document.querySelector(".backtotop");
    window.bobi.tap(backBtn,function(){
        window.scrollTo(0,0)
    })
}

function navAppear(){
    var nav=document.querySelector(".nav");
    var startX=0;
    var endX=0;
    var moveX=0;
    var moveY=0;
    var move=0;
    var isDrag=false;
    var isMoveY=0;
    var index=0;
    function fn(){nav.style.display="none";}
    document.body.addEventListener("touchstart",function(event){
     startX=event.changedTouches[0].clientX;
     startY=event.changedTouches[0].clientY;
     window.bobi.removeEvent(nav,fn);
    })
    document.body.addEventListener("touchmove",function(event){
        isDrag=true;
        nav.style.display="block";
        // var navWidth=nav.offsetWidth;
        // moveX=event.touches[0].clientX;
        // moveY=event.touches[0].clientY;
        // isMoveY=Math.abs(moveY-startY);
        // if(isMoveY>10){nav.style.display="none";}
        // else{
        // move=moveX-startX;
        // if(move>navWidth)move=navWidth;
        // if(index==0){
        // window.bobi.removeTransition(nav);
        // window.bobi.setTranslate(nav,move,0);}
        // }
        
    })
    document.body.addEventListener("touchend",function(event){
        if(isDrag){
        endX=event.changedTouches[0].clientX;
        move=endX-startX;
        moveY=event.changedTouches[0].clientY; 
        isMoveY=Math.abs(moveY-startY);
        var navWidth=nav.offsetWidth;
            if(move>150&&isMoveY<90){ 
               index=1;
               document.querySelector("html").style.overflow="hidden"
            }
            else if(move<0&&isMoveY<90){
                index=0;
                document.querySelector("html").style.overflow="visible"
            }   
                window.bobi.setTranslate(nav,index*navWidth,0);
                window.bobi.addTransition(nav);
                
                
        }
        if(index==0) window.bobi.addEvent(nav,fn);
        
        startX=0;
        endX=0;
        move=0;
        isDrag=false;
    })
}

function slider(){
    var Box=document.querySelector(".fun_options");
    var width=Box.offsetWidth;
    var imgUl=Box.children[0];
    var pointUl=Box.children[1];
    var liS=imgUl.children;
    var pointS=pointUl.children;
    var startX=0;
    var moveX=0;
    var distanceX=0;
    var isMove=false;
    var index=0;
    Box.addEventListener("touchstart",function(event){
        event.preventDefault();
        startX=event.touches[0].clientX;
    },true)
    Box.addEventListener('touchmove',function(event){
        
        event.preventDefault();
        isMove=true;
        moveX=event.touches[0].clientX;
        
        distanceX=moveX-startX;
        if((index==2&&distanceX<0)||(index==0&&distanceX>0)){}
        
        else{
        window.bobi.removeTransition(imgUl);
        window.bobi.setTranslate(imgUl,-index*width+distanceX,0)}
    },true);
    Box.addEventListener('touchend',function(event){
        event.cancelBubble = true;
        event.preventDefault();
        if(isMove){
            if(Math.abs(distanceX)>width/3){
                if(distanceX<0&&index<2){
                    index++;
                }else if(distanceX>0&&index>0){
                    index--;
                }
            }
            setPoint();
            window.bobi.addTransition(imgUl);
            window.bobi.setTranslate(imgUl,-index*width,0);
        }
        console.log(index)
        
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;
    },true);

    window.bobi.addEvent(imgUl,function(){
        if(index>2){
            index=2;
        }else if(index<0){
            index=0;
        }
       
        window.bobi.removeTransition(imgUl);
        window.bobi.setTranslate(imgUl,-index*width);
        
    });
    
    function setPoint(){
        for(var i=0;i<pointS.length;i++){
            pointS[i].className="";
        }
        pointS[index].className="cur";
    }
}
