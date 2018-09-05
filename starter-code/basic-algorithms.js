// Names and Input
var hacker1 = "marlon"; 
console.log("The driver's name is "+ hacker1);
var hacker2 = window.prompt("insert navigartor's name");
console.log("The navigator's name is "+ hacker2);
//Conditionals

if (hacker1.length > hacker2.length){
  console.log("Driver has the longest name, it has "+ hacker1.length + " characters");
}
 else if(hacker2.length > hacker1.length){
   console.log("Yo, navigator has the longest name, it has " + hacker2.length + " characters");
 }else
    console.log("wow, you both got equally long names," + hacker2.length + " characters");
var capName="";
for(i=0;i<hacker1.length;i++){
  capName = capName + hacker1[i] + " ";
}
console.log(capName.toUpperCase());

var revName="";
for(i=0;i<hacker2.length;i++){
  revName= hacker2[i] + revName;
}
console.log(revName);

var abc = "AaBbCcDdEeFfGgHhIiJjKkLlMmOoNnÑñPpPqRrSsTtUuVvWwXxYyZz";
var h1;
var h2;
var i=0;
while(i<hacker1.length){
  var j = 0;
  while(j<abc.length){
    if(hacker1[i]===abc[j]){
      h1=j;
      break;
    }else
    j++;
  }
  var y=0;
  while(y<abc.length){
    if(hacker2[i]===abc[y]){
      h2=y;
      break;
    }else
    y++;
  }
 if(h1<h2){
   console.log("The driver's name goes first");
   break;
 }else if(h1>h2){
   console.log("Yo, the navigator goes first definitely");
   break;
 }else if(hacker1===hacker2){
   console.log("What?! You both got the same name?");
   break;
 }else if(i===hacker1.length || hacker1.length<hacker2.length){
    console.log("The driver's name goes first");
   break;
 }else if(i===hacker2.length || hacker2.length<hacker1.length){
   console.log("Yo, the navigator goes first definitely");
   break;
 }else
 i++;
}

var pal = window.prompt("Palindrome check");
pal= pal.toLowerCase();
var simpal="";
var revpal="";
for(i=0;i<pal.length;i++){
  for(j=0;j<abc.length;j++){
    if(pal[i]===abc[j]){
      revpal=abc[j]+revpal;
      simpal=simpal+abc[j];
    }
  }  
 
}
if(simpal===revpal){
  console.log(pal + " it's a palindrome");
}else
  console.log(pal + " isn't a palindrome");

var lore="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna tortor, feugiat quis pulvinar non, ullamcorper et nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum aliquet magna, sit amet cursus nibh tempor et. In interdum arcu a mauris dapibus ultrices. Suspendisse non purus elit. Vivamus sed leo quam. In semper hendrerit elit, vel bibendum magna elementum sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos./n Etiam eu lectus interdum, finibus arcu non, sodales augue. Integer nec fermentum velit. Vivamus sagittis tempus ultrices. Curabitur dictum euismod lectus, vitae elementum ligula maximus vel. Praesent in malesuada ante, at gravida erat. Nulla molestie sollicitudin nibh. Vestibulum finibus vitae mi vitae ornare. Nullam sollicitudin dolor eget mi tincidunt vulputate. Sed efficitur nisl sit amet dolor efficitur convallis. Nullam gravida justo sed blandit egestas. Integer ut varius magna, quis blandit urna. Duis mauris erat, sagittis in consectetur vel, ornare a justo. Phasellus a ex sit amet quam maximus blandit eu lacinia nisi. Integer eu tempus lorem./n Donec eget urna malesuada, posuere sapien id, commodo tellus. Integer ac nibh semper, aliquet lorem pretium, faucibus leo. Nunc eleifend nulla at nibh sollicitudin, consequat blandit augue ornare. Cras at urna tempor mauris sodales scelerisque vel at lectus. Mauris eu fringilla lacus. Duis sit amet urna a est accumsan luctus. Nulla varius, libero ut porttitor semper, risus lorem congue magna, et pharetra magna tortor vel ante. Donec rutrum tellus nec sodales cursus. Donec sed ligula nec felis accumsan vulputate non at sem. Vivamus sed congue eros. Pellentesque posuere eros dolor, ullamcorper varius erat sagittis eu. Nunc a arcu sed metus varius tempus id et mi. Nullam eu arcu nec risus porttitor sollicitudin nec eu dui. In nec ex nec diam vestibulum fringilla. Curabitur eleifend dapibus nisi in pretium. Quisque aliquet tortor non ex interdum, non molestie enim sagittis.";
splitLore=lore.split(" ");
wordNum=splitLore.length;
var et=lore.indexOf("et");
// Lorem ipsum generator