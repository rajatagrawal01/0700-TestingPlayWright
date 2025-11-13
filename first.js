var a=34;
console.log("Before scope: ",a+a);
{
    let a=50;
    console.log("Inside scope:",a+a);
}
console.log("After scope: ",a);
