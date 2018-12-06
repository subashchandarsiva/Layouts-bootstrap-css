var button = document.getElementById("nametext");
var field = document.getElementById("text");

var listorder =document.getElementById("unordered");
//console.log(field);

// button.addEventListener(onclick,function(){
//     //console.log(field);
//     console.log("Clicked");
// })
//console.log(field.value);
button.addEventListener("click",function(){
    if(field.value.length>0){
        var hi = document.createElement("h1");
        //    hi.appendChild(document.createTextNode("Hello Boossss"));
        //    listorder.appendChild(hi);
           hi.appendChild(document.createTextNode(field.value));
           listorder.appendChild(hi);
           field.value="";
    }
    else{
        alert("Enter something");
    }
  
})