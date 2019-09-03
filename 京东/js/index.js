//轮播图


var photo = document.querySelector(".left-photo")

var circle = document.querySelector(".circle")
var spans = circle.getElementsByTagName("span")
var img = photo.getElementsByTagName("img")
var left= document.querySelector(".arrow-left")
var right= document.querySelector(".arrow-right")
var r_li = document.getElementsByClassName("r-li-1")
var sm_arrow_left = document.querySelector(".sm-arrow-left")
var sm_arrow_right = document.querySelector(".sm-arrow-right")




var imgarr=["./images/running1.jpg","./images/running2.webp",
"./images/running3.webp",
"./images/running4.webp","./images/running5.webp","./images/running6.webp",]

  // span,图片动态增加
var str1='';
var str2=''
window.onload=function(){
for(i=0;i<imgarr.length;i++){
       str1+='<span></span>';
       str2+='<a href="#"><img src="'+imgarr[i] + '"></a>'
         
}   
   

photo.innerHTML=str2;

circle.innerHTML=str1;

img[0].style.display="block"
spans[0].className="circle-white"
  //轮播效果
 var count=0
 timer = setInterval(autoNext,2000)
function autoNext(){
       count++
      
       if(count>=img.length){
              count=0;
       }
       
       for(i=0;i<img.length;i++){
              img[i].style.display="none"
              spans[i].className=''
       }
       img[count].style.display="block"
       spans[count].className='circle-white'
}
  //鼠标悬停photo 清除定时器
photo.onmouseout=function(){
      
       timer = setInterval(autoNext,2000)
}
photo.onmouseover=function(){
       clearInterval(timer)
}


  //小圆点

for(i=0;i<spans.length;i++){
 spans[i].index = i;
  spans[i].onmouseover=function(){
       for(i=0;i<spans.length;i++){
              //清空所有小圆点样式 
              spans[i].className="none"
              img[i].style.display='none'
       }
       spans[this.index].className='circle-white'
       img[this.index].style.display='block'
       count=this.index
  }





}
  //左侧按钮
left.onclick=function(){
       count--;
       if(count<0){
              count=img.length-1;
       }
      
       for(i=0;i<img.length;i++){
              img[i].style.display="none"
              spans[i].className=''
       }
      
       img[count].style.display="block"
       spans[count].className='circle-white'



}
  //右侧按钮
right.onclick=function(){
       count++;
       if(count>=img.length){
              count=0
       }
      
       for(i=0;i<img.length;i++){
              img[i].style.display="none"
              spans[i].className=''
       }
       
       
       img[count].style.display="block"
       spans[count].className='circle-white'



}

  //侧边栏轮播
r_li[0].style.display="block"

var arrow=0;
sm_arrow_left.onclick=function(){
              arrow--;
              if(arrow<0){
                     arrow=r_li.length-1;
              }
       for(i=0;i<r_li.length;i++){
              r_li[i].style.display="none"
       }
       r_li[arrow].style.display="block"
    
       
}

sm_arrow_right.onclick=function(){
       arrow++;
       if(arrow>=r_li.length){
              arrow=0;
       }
for(i=0;i<r_li.length;i++){
       r_li[i].style.display="none"
}
r_li[arrow].style.display="block"



}

//选项卡
var item_bread=document.querySelector(".item-bread")
var li = item_bread.querySelectorAll("li")
var item_select = document.querySelector(".item-select")
var  item = document.querySelectorAll(".item-s")
var content_item = document.querySelector(".content-item")
for(i=0;i<li.length;i++){
      li[i].index =i

       li[i].onmouseover=function(){
             for(i=0;i<li.length;i++){
              item_select.style.display='none'
              item[i].style.display='none'
           
             }
             item_select.style.display='block'
             item[this.index].style.display='block'
       }
       content_item.onmouseout=function(){
              item_select.style.display='none'
       }


      


       item_select.onmouseover=function(){
              item_select.style.display='block'
       }
       item_select.onmouseout=function(){
              item_select.style.display='none'
       }

}
//右下角面包屑

       var up = document.getElementsByClassName("up")
      var getStick = document.getElementsByClassName("getStick")

       var cancle= document.querySelectorAll(".quxiao")
       
 var select = document.querySelector(".select-item")
 var original = document.querySelectorAll(".original")
//悬停 选项卡上升
for(i=0;i<up.length;i++){
       up[i].index=i
  
       
       up[i].onmouseover=function(){
         
                  
                            
              clearTimeout(stop)
             
           
          
             
              for(i=0;i<up.length;i++){
                   
                     up[i].style="margin-top:-40px;"
                     original[i].style.display='none'
                     
              }
             
              select.style="margin-top:-212px"
            
              original[this.index].style.display='block' 
     
                     
      
             
              
                     
     
            
              
              cancle[this.index].onclick=function(){
                     select.style.display="none"
                     for(i=0;i<up.length;i++){
                         
                            select.style=""
                          
                            for(i=0;i<up.length;i++){
                                   up[i].style=""
                                   getStick[i].className='s-red getStick'
                            }
                     }  
              }


       }




}
  //添加a标签底部border
for(i=0;i<up.length;i++){
     
       up[i].index=i;
       up[i].onmouseenter=function(){
            
              for(i=0;i<up.length;i++){
                     getStick[i].className='s-red getStick'
                 
              }
              getStick[this.index].className='s-red getStick stick'
       }
}   

     

}





































































