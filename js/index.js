window.onload=function(){

    //左侧部分
    var liObj=document.getElementsByTagName("li");
    for(var i=0;i<liObj.length;i++){
        liObj[i].onmouseover=function(){
            this.style.backgroundColor="pink";
        };
        liObj[i].onmouseout=function(){
            this.style.backgroundColor="";
        };
    }


    liObj[0].onclick=function(){
        my$("form").style.display="block";
        my$("table").style.display="";
        my$("myChart").style.display="";
    };

    liObj[1].onclick=function(){
        my$("table").style.display="block";
        my$("form").style.display="";
        my$("myChart").style.display="";
    };

    liObj[2].onclick=function(){
        my$("myChart").style.display="block";
        my$("form").style.display="";
        my$("table").style.display="";
    };

    // 右侧表格部分
    var trObjs=document.getElementsByTagName("tr");
    for(var i=0;i<trObjs.length;i++){
        trObjs[i].onmouseover=function(){
            this.style.backgroundColor="pink";
        };
        trObjs[i].onmouseout=function(){
            this.style.backgroundColor="";
        };
    }

   //验证表单输入信息是否有误
    function checkInput(input,reg){
        my$(input).onblur=function(){
            if(reg.test(this.value)){
                //输入正确，则背景为绿色
                this.style.backgroundColor="green"
            }else{
                //输入错误，则背景为红色
                alert("您输入有误，请重新输入，让你嘚瑟，嘻嘻");
                this.style.backgroundColor="pink";
            }
        }
    }

    checkInput("account",/^[0-9a-zA-Z]{5,11}$/);
    checkInput("mm",/^[0-9a-zA-Z]{6,11}$/);
    checkInput("name",/^[\u4e00-\u9fa5]{2,6}$/);


};