
function age(){
     var birthyear=prompt("what is your birth year ...good friend?");//taking input from prompt
     var ageindays=(2019-birthyear)*365;
     var div =document.createElement("div"); //creating an element div
     var answer=document.createTextNode('you are'+" " + ageindays+" "+'days old');//creating text reply in form of node
     div.setAttribute('id','tv'); //creating id attribute and giving it value tv
     div.appendChild(answer); // now answer is the child of div
     document.getElementById('bx').appendChild(div); // now div is the child of element by id bx
}
function reset(){
     document.getElementById('tv').remove();// removes the element by id tv
}