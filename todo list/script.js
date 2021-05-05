var today = new Date();
document.getElementById("1").innerHTML=today.toDateString();

var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate()+1);
document.getElementById("2").innerHTML=tomorrow.toDateString();

   
var input1 = document.querySelector('.input1');
var displaymain = document.querySelector('.displaymain');
var add= document.querySelector('.add');

function add1() { 
    
var display1 = document.createElement('div');
    display1.classList.add("display1class");
    
var todoli = document.createElement('li');
    todoli.innerHTML = input1.value;
    todoli.classList.add("todoliclass");
    display1.appendChild(todoli);
    
var trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fa fa-trash" ></i>';
    trashbutton.classList.add("trashbuttonclass");
    display1.appendChild(trashbutton);
    trashbutton.addEventListener ("click", function(event) {
    event.preventDefault();
    display1.style.display="none";
    });
        
var donebutton = document.createElement('button');
    donebutton.innerHTML = '<i class="fa fa-check-circle" ></i>';
    donebutton.classList.add("donebuttonclass");
    display1.appendChild(donebutton);
    donebutton.addEventListener ("click", function(event) {
    event.preventDefault();
    display1.style.textDecoration="line-through";
    display1.style.textDecorationColor = "#26de81";
    display1.style.color = "#9b9b9b";
});
    
var editbutton = document.createElement('button');
editbutton.innerHTML ='<i class="fa fa-edit"></i>';
editbutton.classList.add("editbuttonclass");
display1.appendChild(editbutton);
editbutton.addEventListener("click", (event)=>{
    event.preventDefault();
   todoli.contentEditable ="true" ;
});
    
displaymain.appendChild(display1);     
    
document.forms[0].reset();

};

var input2 = document.querySelector('.input2');
var displaymain2 = document.querySelector('.displaymain2');
var addt= document.querySelector('.addt');


function add2(){ 
    
var display2 = document.createElement('div');
    display2.classList.add("display2class");
    
var todoli2 = document.createElement('li');
    todoli2.innerHTML = input2.value;
    todoli2.classList.add("todoliclass2");
    display2.appendChild(todoli2);
    
var trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fa fa-trash" ></i>';
    trashbutton.classList.add("trashbuttonclass");
    display2.appendChild(trashbutton);
    trashbutton.addEventListener ("click", function(event) {
    event.preventDefault();
    display2.style.display="none";
    });
        
var donebutton = document.createElement('button');
    donebutton.innerHTML = '<i class="fa fa-check-circle" ></i>';
    donebutton.classList.add("donebuttonclass");
    display2.appendChild(donebutton);
    donebutton.addEventListener ("click", function(event) {
    event.preventDefault();
    display2.style.textDecoration="line-through";
    display2.style.textDecorationColor = "#26de81";
    display2.style.color = "#9b9b9b";
});
    
var editbutton = document.createElement('button');
editbutton.innerHTML ='<i class="fa fa-edit"></i>';
editbutton.classList.add("editbuttonclass");
display2.appendChild(editbutton);
editbutton.addEventListener("click", (event)=>{
    event.preventDefault();
   todoli2.contentEditable ="true" ;
});

    
displaymain2.appendChild(display2); 
input2.value="";

};

var input3 = document.querySelector('.input3');
var displaymain3 = document.querySelector('.displaymain3');
var addu= document.querySelector('.addu');


function add3(){ 
    
var display3 = document.createElement('div');
    display3.classList.add("display3class");
    
var todoli3 = document.createElement('li');
    todoli3.innerHTML = input3.value;
    todoli3.classList.add("todoliclass3");
    display3.appendChild(todoli3);
    
var trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fa fa-trash" ></i>';
    trashbutton.classList.add("trashbuttonclass");
    display3.appendChild(trashbutton);
    trashbutton.addEventListener ("click", function(event) {
    event.preventDefault();
    display3.style.display="none";
    });
        
var donebutton = document.createElement('button');
    donebutton.innerHTML = '<i class="fa fa-check-circle" ></i>';
    donebutton.classList.add("donebuttonclass");
    display3.appendChild(donebutton);
    donebutton.addEventListener ("click", function(event) {
    event.preventDefault();
    display3.style.textDecoration="line-through";
    display3.style.textDecorationColor = "#26de81";
    display3.style.color = "#9b9b9b";
});
    
var editbutton = document.createElement('button');
editbutton.innerHTML ='<i class="fa fa-edit"></i>';
editbutton.classList.add("editbuttonclass");
display3.appendChild(editbutton);
editbutton.addEventListener("click", (event)=>{
    event.preventDefault();
   todoli3.contentEditable ="true" ;
});

    
displaymain3.appendChild(display3); 
input3.value="";

};