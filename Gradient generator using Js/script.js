var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button1 = document.querySelector(".button1");
var wrapper = document.querySelector(".wrapper");
var css = document.querySelector(".css");

 function choose(x){
        if(x == "1"){
        function change(){
                wrapper.style.backgroundImage =
                "linear-gradient(" + color1.value + "," + color2.value + ")";
                css.innerHTML = "background-image: linear-gradient ("  + color1.value +  " , "  + 
                color2.value + ")";
                }
                change();
        }
        else if(x== "2"){
        function change(){
                wrapper.style.backgroundImage =
                "radial-gradient(" + color1.value + "," + color2.value + ")";
                css.innerHTML = "background-image: radial-gradient ("  + color1.value +  " , "  +
                 color2.value + ")";        
                }
                change();
        }
 }

 function copytext(){
        var css = document.querySelector(".css")
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(css);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("Copy");
        alert("Copied div content to clipboard");
 }
