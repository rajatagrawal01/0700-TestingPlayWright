// var a="Hello";

// console.log(a.charCodeAt(4));

// Breaking a loop
// for(let i=65;i<=90;i++){
//     if(i==70){
//         break;
//     }
//     console.log(String.fromCharCode(i));
// }


// Continuing a loop

// for(let i=65;i<=90;i++){
//     if(i==70){
//         continue;
//     }
//     console.log(String.fromCharCode(i));
// }


var a='A'
var asciiCode=a.charCodeAt(0);
if(asciiCode==65 || asciiCode==69 || asciiCode==73|| asciiCode==79|| asciiCode==85|| asciiCode==97 || asciiCode==101 || asciiCode==105|| asciiCode==111|| asciiCode==117){
    console.log("It is a vowel");
}
else{
    console.log("It is a not a vowel");
    
}
