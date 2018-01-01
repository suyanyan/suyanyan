$(".container").fullpage({
    verticalCentered:true,
    anchors:["第一页","第二页","第三页","第四页","第五页"],
    navigation:true,
    navigationPosition:"left",
    navigationTooltips:["第一页","第二页","第三页","第四页","第五页"],
    slidesNavigation:true,
    navigationColor:"#purple",
    controlArrowColor:"#f89",
    loopHorizontal:false,
    animateAnchor:true,
    fixedElement:"#nav",
    menu:"#nav",
    data_menuanchor:"第一页,第二页,第三页,第四页,第五页",
    afterLoad:function (onchor,index) {
        if(index===1){
            $(".title").addClass("title1");
            console.log($(".title"))
        }else if(index===2) {
            $(".about-child").addClass("anima");
            $(".about1").addClass("abouts");
            $(".about").addClass("abouts")
        }else if(index===3){
            circle(canvas1,90,"red");
            circle(canvas2,80,"blue");
            circle(canvas3,80,"purple");
            circle(canvas4,75,"blue");
            circle(canvas5,75,"purple");
        }else if(index===4) {
            $(".section4-inner-l").addClass("left1");
            $(".section4-inner-center").addClass("center");
            $(".section4-inner-r").addClass("right1");
        }else if(index===5) {
            $(".section5-box").addClass("box1");
        }
    },
    onLeave:function (index) {
        setTimeout(function () {
            if(index===1){
                $(".title").removeClass("title1")
            }else if(index===2){
                $(".about-child").removeClass("anima");
                $(".about1").removeClass("abouts");
                $(".about").removeClass("abouts");
            }else if(index===4){
                $(".section4-inner-l").removeClass("left1");
                $(".section4-inner-center").removeClass("center");
                $(".section4-inner-r").removeClass("right1");
            }else if(index===5) {
                $(".section5-box").removeClass("box1");
            }
        },500)
    }
})
   // setInterval(function () {
   //     $.fn.fullpage.moveSectionDown()
   //
   // },2000)
   // 介绍
{
    var time=setInterval(fn,3000);
    var num=0;
    function fn() {
        num++;
        if(num===4){
            num=0
        }else if(num===-1){
            num=$(".info ul").length;
        }
        $(".info ul").each(function (index,ele) {
            $(ele).removeClass("active")
        });
        $(".info ul").eq(num).addClass("active");
    }
    $(".info").hover(function () {
        clearInterval(time)
    },function () {
        time=setInterval(fn,3000);
    })

}

//背景1
{
    window.onload = function() {
        //配置
        var config = {
            vx: 4,	//小球x轴速度,正为右，负为左
            vy: 4,	//小球y轴速度
            height: 2,	//小球高宽，其实为正方形，所以不宜太大
            width: 2,
            count: 200,		//点个数
            color: "121, 162, 185", 	//点颜色
            stroke: "130,255,255", 		//线条颜色
            dist: 6000, 	//点吸附距离
            e_dist: 20000, 	//鼠标吸附加速距离
            max_conn: 10 	//点到点最大连接数
        }

        //调用
        CanvasParticle(config);
    }
}


//轮播图
{
        var oPic=document.getElementById('pic');
        var oPrev=getByClass(oPic,'prev')[0];
        var oNext=getByClass(oPic,'next')[0];

        var aLi=oPic.getElementsByTagName('li');

        var arr=[];

        for(var i=0;i<aLi.length;i++)
        {
            var oImg=aLi[i].getElementsByTagName('img')[0];

            arr.push([parseInt(getStyle(aLi[i],'left')),parseInt(getStyle(aLi[i],'top')),
                getStyle(aLi[i],'zIndex'),oImg.width,parseFloat(getStyle(aLi[i],'opacity')*100)]);
        }


        oPrev.onclick=function()
        {
            arr.push(arr[0]);
            arr.shift();
            for(var i=0;i<aLi.length;i++)
            {
                var oImg=aLi[i].getElementsByTagName('img')[0];

                aLi[i].style.zIndex=arr[i][2];
                startMove(aLi[i],{left:arr[i][0],top:arr[i][1],opacity:arr[i][4]});
                startMove(oImg,{width:arr[i][3]});
            }

        

        oNext.onclick=function()
        {
            arr.unshift(arr[arr.length-1]);
            arr.pop();
            for(var i=0;i<aLi.length;i++)
            {
                var oImg=aLi[i].getElementsByTagName('img')[0];

                aLi[i].style.zIndex=arr[i][2];
                startMove(aLi[i],{left:arr[i][0],top:arr[i][1],opacity:arr[i][4]});
                startMove(oImg,{width:arr[i][3]});
            }
        }

        function getStyle(obj,name)
        {
            if(obj.currentStyle){ return obj.currentStyle[name]; }
            else{ return getComputedStyle(obj,false)[name]; }
        }
    }

    function getByClass(oParent,sClass)
    {
        var aResult=[];
        var aEle=oParent.getElementsByTagName('*');

        for(var i=0;i<aEle.length;i++)
        {
            if(aEle[i].className==sClass)
            {
                aResult.push(aEle[i]);
            }
        }
        return aResult;
    }
}

//第五页旋转
{
    var box=$(".section5-box");
    var angle=0;
    setInterval(function () {
        angle+=40;
        box.css("transform","rotateY("+angle+"deg)");
    },3000);
   
}
//旋转
{
    var li2=$(".nav ul li");
    console.log(li2);
    var li3=$(".nav-info ul li");
    console.log(li3);
    li2.each(function (index,val) {
        console.log($(val));
        $(val).hover(function () {
            $(this).addClass("key");
            console.log(1);
        },function () {
            $(this).removeClass("key");
        }).click(function () {
            li3.eq(index).show(500).delay(3000).hide(500);
        });
    })

}



