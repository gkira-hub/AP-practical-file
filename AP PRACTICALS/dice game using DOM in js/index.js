var a=Math.random()*6;
var b=Math.random()*6;
var x=Math.floor(a+1);
var y=Math.floor(b+1);
console.log(x);
console.log(y);
if(x===1)
{
document.querySelector(".dice1 img").setAttribute("src","images/dice1.png");
}
else if(x===2)
{
document.querySelector(".dice1 img").setAttribute("src","images/dice2.png");
}
else if(x===3)
{
document.querySelector(".dice1 img").setAttribute("src","images/dice3.png");
}
else if(x===4)
{
document.querySelector(".dice1 img").setAttribute("src","images/dice4.png");
}
else if(x===5)
{
document.querySelector(".dice1 img").setAttribute("src","images/dice5.png");
}
else
{
document.querySelector(".dice1 img").setAttribute("src","images/dice6.png");
}


if(y===1)
{
document.querySelector(".dice2 img").setAttribute("src","images/dice1.png");
}
else if(y===2)
{
document.querySelector(".dice2 img").setAttribute("src","images/dice2.png");
}
else if(y===3)
{
document.querySelector(".dice2 img").setAttribute("src","images/dice3.png");
}
else if(y===4)
{
document.querySelector(".dice2 img").setAttribute("src","images/dice4.png");
}
else if(y===5)
{
document.querySelector(".dice2 img").setAttribute("src","images/dice5.png");
}
else
{
document.querySelector(".dice2 img").setAttribute("src","images/dice6.png");
}

if(x>y)
{
    document.querySelector("h1").innerText="🎉Player 1 won";
}
else if(x===y){
    document.querySelector("h1").innerText="Roll Again";   
}
else{
    document.querySelector("h1").innerText="Player 2 won🎉";
}