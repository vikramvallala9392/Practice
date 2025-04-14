function Vlc(){
    var name="vikram";
    var name1="rakesh";
    name="vimal";
    name=100;


    let num=10;
    num=100;
    num=1000;


    const s=1;


    function apple(){
        console.log("my name is normal function");
    }
    apple();

var a=function apple(){
    console.log("my name is  function expression");
}
a();

var b=function (){
    console.log("my name is  anyomous  expression");
}
b();

var c=()=>{
    console.log("my name is  arrow  expression");
}
c();
    
    return(
        <div>
         <h1>my name is {`${name} ${name1}`}</h1>
         <h1>my number is {num}</h1>
         <h1>my  favourite number is {s}</h1>
      
        </div>
    )
}
export default Vlc;