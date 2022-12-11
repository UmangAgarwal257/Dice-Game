document.querySelector(".dice1").addEventListener("click",numberChange1)
document.querySelector(".dice2").addEventListener("click",numberChange2)


function numberChange1()
{
    var randomNumber1=(Math.floor(Math.random()*6))+1;
    
    var images1="images/dice"+randomNumber1+".png";
    
    
    document.querySelector(".dice1 .img1").setAttribute("src",images1);
    
}
function numberChange2()
{
    var randomNumber2=(Math.floor(Math.random()*6))+1;
    var images2="images/dice"+randomNumber2+".png";
    document.querySelector(".dice2 .img2").setAttribute("src",images2);
    
    if (randomNumber1 > randomNumber2) 
    {
        document.querySelector("h1").textContent = "Player 1 Wins!";
        
    }
     else if (randomNumber2 > randomNumber1)
    {
        document.querySelector("h1").textContent = "Player 2 Wins!";
        
    } 
    else 
    {
       document.querySelector("h1").textContent = "Draw!";
    }
}


  
