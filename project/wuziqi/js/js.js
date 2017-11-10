class Games{
    constructor(){
        this.star=document.querySelector("#star");
        this.container=document.querySelector(".container");
        this.canvas=document.querySelector("canvas");
        this.chong=document.querySelector("#chong");
        this.cobj=this.canvas.getContext("2d");
        this.mode=document.querySelector("#mode");
        this.games=document.querySelector(".games");
        this.shadow=document.querySelector(".shadow");
        this.h1=document.querySelector("h1");
        this.output=document.querySelector("#output");
        this.imgbox=document.querySelector(".imgbox");
        this.download=document.querySelector("#download");
        this.music=document.querySelector(".music");
        this.audio=document.querySelector("audio");
        this.kaiguan=true;
        this.isAI=false;
        this.obj={};
        this.blank={};
        this.w=40;
        this.flag=true;
    }
    init(){
        this.startobj()
        this.draboardobj();
        this.drapoint(x,y);
        this.dracheer(x,y,color);
        this.add();
        
    }
    startobj(){
        this.star.onclick=function () {
            this.games.style.display="none";
            this.container.classList.add("anima");
            this.star.style.display="none";
            this.chong.style.display="block";
        }.bind(this);
    }

    draboardobj() {
        this.cobj.clearRect(0, 0, 600, 600);
        this.cobj.beginPath();
        for (let i = 0; i < 15; i++) {
            this.cobj.moveTo(20, i * this.w + 20);
            this.cobj.lineTo(580, i * this.w + 20);
            this.cobj.moveTo(i * this.w + 20, 20);
            this.cobj.lineTo(i * this.w + 20, 580);
        }
        this.cobj.stroke();

        this.drapoint(3, 3);
        this.drapoint(11, 3);
        this.drapoint(3, 11);
        this.drapoint(11, 11);
        this.drapoint(7, 7);
    }
//        创建棋盘上的点
        drapoint(x,y) {
            this.cobj.save();
            this.cobj.translate(x*this.w+20,y*this.w+20);
            this.cobj.beginPath();
            this.cobj.arc(0,0,5,0,2*Math.PI+20);
            this.cobj.fill();
            this.cobj.restore();
            for(let i=0;i<15;i++){
                for(let k=0;k<15;k++){
                    this.blank[this.fn(i,k)]=i+"_"+k;
                }
            }
    }
    dracheer(x,y,color) {
        this.cobj.save();
        this.cobj.translate(x*this.w+20,y*this.w+20);
        this.cobj.fillStyle=color;
        this.cobj.beginPath();
        this.cobj.arc(0,0,15,0,2*Math.PI);
        this.cobj.fill();
        this.cobj.restore();
        this.obj[this.fn(x,y)]=color;
        delete this.blank[this.fn(x,y)];
    }
    add(){
        this.canvas.onclick=function (e) {
            let x=Math.round((e.offsetX-20)/this.w);
            let y=Math.round((e.offsetY-20)/this.w);
            if(this.obj[this.fn(x,y)]){
                return;
            }
            if(flag){
                this.dracheer(x,y,"white");
                if(this.check(x,y,"white")===5){
                    over("白");
//              alert("白棋获胜");
                }
                if(this.isAI){
                    let p=this.getpos();
                    this.dracheer(p.x,p.y,"black");
                    if(this.check(p.x,p.y,"black")===5){
//                  alert("黑棋获胜");
                        over("黑")
                    }
                    return;
                }
            }else{
                this.dracheer(x,y,"black");
                if(this.check(x,y,"black")===5){
                    alert("黑棋获胜");
                }
            }
            this.flag=!this.flag;
        }.bind(this);
    }
    getpos() {
        let max1=0;
        let pos1={};
        for(let i in this.blank){
            let x=parseInt(i.split("_")[0]);
            let y=parseInt(i.split("_")[1]);
            let length=this.check(x,y,"white");
            if(length>max1){
                max1=length;
                pos1={x,y}
            }
    
        };
    
        let max2=0;
        let pos2={};
        for(let i in blank){
            let x=parseInt(i.split("_")[0]);
            let y=parseInt(i.split("_")[1]);
            let length=this.check(x,y,"black");
            if(length>max2){
                max2=length;
                pos2={x,y}
            }
        }
        if(max1>max2){
            return pos1;
        }else{
            return pos2;
        }
    }
    fn(x,y) {
        return x+"_"+y;
    }
    check(x,y,color){
//        行
        let row=1;
        let i=1;
        while(this.obj[this.fn(x+i,y)]===color){
            row++;
            i++;
        }
        i=1;
        while (this.obj[this.fn(x-i,y)]===color){
            row++;
            i++;
        }
    //        列
        let lie=1;
        i=1;
        while (this.obj[this.fn(x,y+i)]===color){
            lie++;
            i++;
        }
        i=1;
        while (this.obj[this.fn(x,y-i)]===color){
            lie++;
            i++;
        }
    //        斜线
        let x1=1;
        i=1;
        while (this.obj[this.fn(x-i,y-i)]===color){
            x1++;
            i++;
        }
        i=1;
        while (this.obj[this.fn(x+i,y+i)]===color){
            x1++;
            i++;
        }
        let x2=1;
        i=1;
        while (this.obj[this.fn(x-i,y+i)]===color){
            x2++;
            i++;
        }
        i=1;
        while (this.obj[this.fn(x+i,y-i)]===color){
            x2++;
            i++;
        }
        return Math.max(row,lie,x1,x2)
    }
    over(name) {
        this.chong.style.display="block";
        this.shadow.style.display="block";
        this.h1.innerHTML=name+"棋获胜";
        this.imgbox.style.display="none";
    }
    chongobj() {
        this.chong.onclick = function () {
            console.log(1);
            this.games.style.display = "block";
            this.shadow.style.display = "none";
            this.container.classList.remove("anima");
            this.star.style.display = "block";
            this.cobj.clearRect(0, 0, 600, 600);
            this.obj = {};
            this.imgbox.innerHTML = "";
            this.download.style.display = "none";
            this.draboard();
        }.bind(this);
    }
    ontputobj(){
        this.output.onclick=function () {
            this.imgbox.innerHTML="";
            this.output.style.display="block";
            this.setnum();
            this.h1.innerHTML="";
            this.imgbox.style.display="block";
            this.download.style.display="block";
            let url=canvas.toDataURL();
            let newimg=new Image();
            newimg.src=url;
            this.imgbox.appendChild(newimg);
            this.download.href=url;
            this.download.setAttribute("download","棋谱.png")
        }.bind(this);
    }
    setnum() {
        let n=1;
        for(let i in this.obj){
            let x=parseInt(i.split("_")[0]);
            let y=parseInt(i.split("_")[1]);
            this.cobj.textAlign="center";
            this.cobj.textBaseline="middle";
            this.cobj.font="20px 微软雅黑";
            this.cobj.save();
            if(this.obj[i]==="black"){
                this.cobj.fillStyle="white";
            }else{
                this.cobj.fillStyle="black";
            }
            this.cobj.translate(x*w+20,y*w+20);
            this.cobj.fillText(n++,0,0);
            this.cobj.restore();
        }
    }
    musicobj(){
        this.music.onclick=function () {
            if(this.kaiguan){
                this.music.style.animationPlayState="paused";
                this.audio.pause();
            }else{
                this.music.style.animationPlayState="running";
                this.audio.play();
            }
            this.kaiguan=!this.kaiguan;
        }.bind(this);
    }

}
let games=new Games();