var turn = 1;
var size = 5;
    
  function display(){
      
      var playerInfo = document.querySelector(".playerInfo");
      var container = document.querySelector(".container");
      var welcome = document.getElementById("welcome");
      
      var Xcount = 0;
      var Ocount = 0;
      
      playerInfo.style.display = "block";
      welcome.style.display = "none";
      playerInfo.innerHTML = "PLAYER 1's TURN";
      
      container.addEventListener("click",(event)=>{
          
          if (turn == 1){ 
             event.target.innerHTML = 'x';
             Xcount += 1;
             playerInfo.innerHTML = "PLAYER 2's TURN";
             checkWinner();
             turn = 0;
          }
          
          else{
              event.target.innerHTML = 'o';
              event.target.style.color="red";
              Ocount += 1;
              playerInfo.innerHTML = "PLAYER 1's TURN";
              checkWinner();
              turn = 1;
          }
      });
  };
     
        const box1 = document.getElementById("box-1");
        const box2 = document.getElementById("box-2");
        const box3 = document.getElementById("box-3");
        const box4 = document.getElementById("box-4");
        const box5 = document.getElementById("box-5");
        const box6 = document.getElementById("box-6");
        const box7 = document.getElementById("box-7");
        const box8 = document.getElementById("box-8");
        const box9 = document.getElementById("box-9");
    
   function checkWinner(){
        
        if(box1.innerHTML!=="" && box1.innerHTML==box2.innerHTML && box1.innerHTML==box3.innerHTML){
            changeColor(box1,box2,box3);
            restart();
        }
       
       else if(box4.innerHTML!=="" && box4.innerHTML==box5.innerHTML && box4.innerHTML==box6.innerHTML)
        {
            changeColor(box4,box5,box6);
            restart();
        }
       
        else if(box7.innerHTML!=="" && box7.innerHTML==box8.innerHTML && box7.innerHTML==box9.innerHTML)
        {
            changeColor(box7,box8,box9);
            restart();
        }
        else if(box1.innerHTML!=="" && box1.innerHTML==box4.innerHTML && box1.innerHTML==box7.innerHTML)
        {
            changeColor(box1,box4,box7);
            restart();
        }
        else if(box2.innerHTML!=="" && box2.innerHTML==box5.innerHTML && box2.innerHTML==box8.innerHTML)
        {
            changeColor(box2,box5,box8);
            restart();
        }
        else if(box3.innerHTML!=="" && box3.innerHTML==box6.innerHTML && box3.innerHTML==box9.innerHTML)
        {
            changeColor(box3,box6,box9);
            restart();
        }
        else if(box1.innerHTML!=="" && box1.innerHTML==box5.innerHTML && box1.innerHTML==box9.innerHTML)
        {
            changeColor(box1,box5,box9);
            restart();
        }
        else if(box3.innerHTML!=="" && box3.innerHTML==box5.innerHTML && box3.innerHTML==box7.innerHTML)
        {
            changeColor(box3,box5,box7);
            restart();
        }
       else if(box1.innerHTML!==""&& box2.innerHTML!==""&& box3.innerHTML!==""&& box4.innerHTML!==""&& box5.innerHTML!==""&& box6.innerHTML!==""&& box7.innerHTML!==""&& box8.innerHTML!==""&& box9.innerHTML!=="")
        {
            var playerInfo = document.querySelector(".playerInfo");
            playerInfo.innerHTML = "ITS A TIE";
            restart();
        }
       
    };
    
    function changeColor(winbox1 ,winbox2,winbox3){
        var winbox1 ,winbox2,winbox3;
        winbox1.style.backgroundColor="#1dd1a1";
        winbox2.style.backgroundColor="#1dd1a1";
        winbox3.style.backgroundColor="#1dd1a1";
        
        var playerInfo = document.querySelector(".playerInfo");
        var container = document.querySelector(".container");
        var play2 = document.getElementById("play2");
        
        container.style.pointerEvents="none";
        play2.style.pointerEvents="none";
        
        if(winbox1.innerHTML=='x' && winbox2.innerHTML=='x' && winbox3.innerHTML=='x'){
            playerInfo.innerHTML = 'PLAYER 1 WINS!'
        }
        else if(winbox1.innerHTML=='o' && winbox2.innerHTML=='o' && winbox3.innerHTML=='o'){
            playerInfo.innerHTML = 'PLAYER 2 WINS!'
        }
    };
    
    var wrapper = document.querySelector(".wrapper");
    var mainScreen = document.querySelector(".mainScreen");
    
    function restart(){
        
        var container = document.querySelector(".container");
        var restart = document.getElementById("restart");
        var yes = document.getElementById("yes");
        var no = document.getElementById("no");
        
       function blur(){
           restart.style.display="flex";
           container.style.filter="blur(8px)";
       };
        
        setTimeout(blur,2000);
        
        yes.addEventListener("click",()=>{
            window.location.reload();
        });
        
        no.addEventListener("click",()=>{
           wrapper.style.display = "none";
           mainScreen.style.display = "flex";
        });
        
    };
   
    function playGame(){
        
        var play1 = document.getElementById("play1");
        
           wrapper.style.display = "block";
           mainScreen.style.display = "none";
        
    };