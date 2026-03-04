function encodeText(){

let text=document.getElementById("inputText").value;
let result="";

for(let i=0;i<text.length;i++){

let c=text[i];

if(c>='a' && c<='z')
result+=String.fromCharCode(((c.charCodeAt(0)-97+6)%26)+97);

else if(c>='A' && c<='Z')
result+=String.fromCharCode(((c.charCodeAt(0)-65+6)%26)+65);

else result+=c;

}

document.getElementById("result").value=result;

}


function decodeText(){

let text=document.getElementById("inputText").value;
let result="";

for(let i=0;i<text.length;i++){

let c=text[i];

if(c>='a' && c<='z')
result+=String.fromCharCode(((c.charCodeAt(0)-97-6+26)%26)+97);

else if(c>='A' && c<='Z')
result+=String.fromCharCode(((c.charCodeAt(0)-65-6+26)%26)+65);

else result+=c;

}

document.getElementById("result").value=result;

}


function copyText(){

let text=document.getElementById("result");

navigator.clipboard.writeText(text.value);


}