{
	let li=document.querySelectorAll('.color ul li');
	let img=document.querySelectorAll('.content1-l-img ul li');
	let centerbox=document.querySelectorAll('.centerbox ul li')
	
	
	// 颜色分类
	li.forEach(function(val,index){
		val.onclick=function(){
			for(let i=0;i<li.length;i++){
				li[i].classList.remove('active');
				img[i].classList.remove('active');
			
			}
			val.classList.add('active');
			img[index].classList.add('active');
		
		}
	});

	centerbox.forEach(function(val,index){
		val.onclick=function(){
			for(let i=0;i<centerbox.length;i++){
				// centerbox[i].classList.remove('active');
				img[i].classList.remove('active');

			}
			img[index].classList.add('active');
		
		}
	});
	
}


{
	// 适用尺寸
	let span=document.querySelectorAll('.row4 span');
	span.forEach(function(val,index){
		val.onclick=function(){
			for(let i=0;i<span.length;i++){
				
				span[i].classList.remove('active');
			}
			span[index].classList.add('active');
		}
	})
}
{
	let jian=document.querySelector('.row5 .jia-jian .jian');
	let num=document.querySelector('.row5 .jia-jian input');
	let jia=document.querySelector('.row5 .jia-jian .jia');
	let now=1;
	// 购买数量
	jia.onclick=function(){
		let val=num.value;
		now++;
		num.value=now;

	}
	jian.onclick=function(){
		now--;
		if(now==0){
			num=0;
		}
		num.value=now;
	}

	
}












// 右侧栏

