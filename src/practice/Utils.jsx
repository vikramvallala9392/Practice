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

}

const vehicles=["vehicle 1","vehicle 2","vehicle 3"];
const animals=["animale 1","animale 2","animale 3","vehicle 1"];

const students={
    name:"vikram",
    age:29,
    class:"10th",
};

const teachers={
    name2:"rakesh",
    age:33,
    class:"10th",
}

const display=(firstname,lastname,middlename)=>{
    console.log("value",firstname);
    console.log("value",lastname);
    console.log("value",middlename);
};

export {
    name,
    greet,
    calculate,
    vehicles,
    animals,
    students,
    teachers,
    display,
};


