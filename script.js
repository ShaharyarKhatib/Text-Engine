function encodeText(){

let text=document.getElementById("inputText").value;
let result="";

for(let i=0;i<text.length;i++){

let c=text[i];

if(c>='a' && c<='z'){
result+=String.fromCharCode(((c.charCodeAt(0)-97+6)%26)+97);
}

else if(c>='A' && c<='Z'){
result+=String.fromCharCode(((c.charCodeAt(0)-65+6)%26)+65);
}

else if(c=='1') result+=".g.";
else if(c=='2') result+=".h.";
else if(c=='3') result+=".i.";
else if(c=='4') result+=".j.";
else if(c=='5') result+=".k.";
else if(c=='6') result+=".l.";
else if(c=='7') result+=".m.";
else if(c=='8') result+=".n.";
else if(c=='9') result+=".o.";
else if(c=='0') result+=".p.";

else if(c=='@') result+="6";
else if(c=='!') result+="5";
else if(c=='#') result+="7";
else if(c=='$') result+="8";
else if(c=='&') result+="9";
else if(c=='*') result+="10";

else if(c==' ') result+="2";
else if(c=='.') result+="3";

else result+=c;

}

document.getElementById("result").value=result;

}



function decodeText(){

let text=document.getElementById("inputText").value;
let result="";
let i=0;

while(i<text.length){

if(text.substring(i,i+3)===".g."){result+="1";i+=3;}
else if(text.substring(i,i+3)===".h."){result+="2";i+=3;}
else if(text.substring(i,i+3)===".i."){result+="3";i+=3;}
else if(text.substring(i,i+3)===".j."){result+="4";i+=3;}
else if(text.substring(i,i+3)===".k."){result+="5";i+=3;}
else if(text.substring(i,i+3)===".l."){result+="6";i+=3;}
else if(text.substring(i,i+3)===".m."){result+="7";i+=3;}
else if(text.substring(i,i+3)===".n."){result+="8";i+=3;}
else if(text.substring(i,i+3)===".o."){result+="9";i+=3;}
else if(text.substring(i,i+3)===".p."){result+="0";i+=3;}

else if(text.substring(i,i+2)=="10"){result+="*";i+=2;}

else if(text[i]=='6'){result+="@";i++;}
else if(text[i]=='5'){result+="!";i++;}
else if(text[i]=='7'){result+="#";i++;}
else if(text[i]=='8'){result+="$";i++;}
else if(text[i]=='9'){result+="&";i++;}

else if(text[i]=='2'){result+=" ";i++;}
else if(text[i]=='3'){result+=".";i++;}

else if(text[i]>='a' && text[i]<='z'){
result+=String.fromCharCode(((text.charCodeAt(i)-97-6+26)%26)+97);
i++;
}

else if(text[i]>='A' && text[i]<='Z'){
result+=String.fromCharCode(((text.charCodeAt(i)-65-6+26)%26)+65);
i++;
}

else{
result+=text[i];
i++;
}

}

document.getElementById("result").value=result;

}



function copyText(){

let text=document.getElementById("result");
navigator.clipboard.writeText(text.value);


}
