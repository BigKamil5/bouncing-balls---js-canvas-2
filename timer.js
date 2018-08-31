var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas);

var c = canvas.getContext('2d');
var arr = [];

var collorarr = ['#7B2A3B','#E57661','#F8C58C','#F8E7A2','#86DDB2'];

var mouse = {
	x: undefined,
	y: undefined
}


function Circle()
{
	this.r = Math.random()*15;	
	this.primr = this.r;	
	this.x = (Math.random()*(window.innerWidth - this.r * 2)) + this.r;
	this.y = (Math.random()*(window.innerHeight - this.r * 2 )) + this.r;
	this.dx = (Math.random()-0.5)*4;
	this.dy = (Math.random()-0.5)*4;
	this.color = collorarr[Math.floor(Math.random() * collorarr.length)];

	this.draw = function()
	{
		c.beginPath();
		c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
		//c.strokeStyle = 'blue';
		c.stroke();
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function()
	{

		if(this.x>window.innerWidth-this.r || this.x<0+this.r)
		{
			this.dx = -this.dx;
		}

		if(this.y>window.innerHeight-this.r || this.y<0+this.r)
		{
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		
		if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50)
		{
			if(this.r<50){
			this.r += 2;
			}
		}
		else if(this.r>this.primr && this.r>1)
		{
			this.r-=1;
		}

		this.draw();
	}

}




window.addEventListener('mousemove',function(event){
	console.log(event.x,event.y);
	mouse.x = event.x;
	mouse.y = event.y;

	/*for(var i = 0; i<arr.length; i++)
	{
		if(mouse.x-arr[i].x<arr[i].r && mouse.x-arr[i].x>-arr[i].r)
		{
			arr[i].r += 1;
		}
	}*/

	
})


window.addEventListener('resize',function(event){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
})

for(var i = 0; i<1000; i++){
	arr.push(new Circle());

	arr[i].draw();
}



function anime()
{
	requestAnimationFrame(anime);
	c.clearRect(0,0,window.innerWidth,window.innerHeight);

	for(var i = 0; i<arr.length; i++)
	{
		arr[i].update();
		//console.log("sssssss");
	}
	
}

anime();