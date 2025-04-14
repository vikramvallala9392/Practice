const name="vikram";

const greet="Hello!";

const calculate=(a,b,operation)=>{
    if(operation==="add"){
        return a+b;
    }else if(operation==="sub"){
        return a-b;

    }else if(operation==="div"){
        return a/b;
    }
};

export {name,greet,calculate}