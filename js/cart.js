window.onload=function(){
    checkedBox();
    addPro();
    subPro();
    checkInp();
    deleted();
}

function checkedBox(){
    var checkBoxS=document.querySelectorAll(".checked_box");
    for(var i=0;i<checkBoxS.length;i++){
        bobi.tap(checkBoxS[i],function(){
           var curBox= event.target;
           if(curBox.hasAttribute("checked")){
           curBox.removeAttribute("checked");}
           else curBox.setAttribute("checked","");
        })
    }
}

function addPro(){
    var addBtn=document.querySelectorAll(".change_num span:nth-child(3)");
    for(var i=0;i<addBtn.length;i++){
        bobi.tap(addBtn[i],function(){
            var curAdd=event.target;
            var curInp=curAdd.parentNode.querySelector("input");
            if(curInp.value<999)
            curInp.value++;
        })
    }
}


function subPro(){
    var subBtn=document.querySelectorAll(".change_num span:nth-child(1)");
    for(var i=0;i<subBtn.length;i++){
        bobi.tap(subBtn[i],function(){
            var curSub=event.target;
            var curInp=curSub.parentNode.querySelector("input");
            if(curInp.value>1)
            curInp.value--;
        })
    }
}

function checkInp(){
    var checkInp=document.querySelectorAll(".change_num input");
    var reg=/^\+?[1-9][0-9]*$/;
    for(var i=0;i<checkInp.length;i++){
        checkInp[i].index=i;
        checkInp[i].onblur=function(){
            if(!reg.test(this.value)||this.value>999){
                this.value=1;
            }
        }
    }
}

function deleted(){
    var deleteBtn=document.querySelectorAll(".delete_down");
    var deleteMask=document.querySelector(".deleteMask");
    var index=0;
    for(var i=0;i<deleteBtn.length;i++){
        deleteBtn[i].index=i;
        bobi.tap(deleteBtn[i],function(){
            var curdeleteBtn=event.target;
            index=curdeleteBtn.index;
            curdeleteBtn.style.backgroundImage="url('./img/Trash_Emptyt.png')"
            deleteMask.style.display="block";
            document.body.style.overflow="hidden";
            var cancelBtn=document.querySelector(".cannel_delete");
            var confirmBtn=document.querySelector(".delete");
            bobi.tap(cancelBtn,function(){
                deleteMask.style.display="none";
                document.body.style.overflow="visible";
                curdeleteBtn.style.backgroundImage="url('./img/Trash_Empty.png')";
            })
            bobi.tap(confirmBtn,function(){
                deleteMask.style.display="none";
                document.body.style.overflow="visible";
                var removepro=curdeleteBtn.parentNode.parentNode.parentNode.parentNode.parentNode
                var fatherpro=curdeleteBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                fatherpro.removeChild(removepro);
            })
        })
    }
}