async function getData(){
    const url="https://jsonplaceholder.typicode.com/users";

    try{
        const response=await fetch(url);   
        const result=await response.json()
        return result;
    }catch(err){
        console.log(err);
    }
}


async function printData(){
    const final=await getData();
    console.log(final);
    
}

await printData();