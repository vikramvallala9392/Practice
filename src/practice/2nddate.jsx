export let arr=[1,2,3,4,5,6,7,8,9,10];

console.log("my array numbers are:",arr);

export let odd=[];
export let even=[];
for(let i=0;i<arr.length;i++){
    let num=arr[i];
    if(num%2==0){
        even.push(num);
        
    }else {
        odd.push(num);
    }
}
console.log("Even numbers are :"+even);
console.log("Odd numbers are :"+odd);

export let num1=9;
export let rem=(num1%2)
if(rem==0){
    console.log(`${num1} is even`);

}else {
   console.log(`${num1} is odd`);
}


export let num2=1.6;
console.log("the given number is in ceil",Math.ceil(num2));
console.log("the given number is in floor",Math.floor(num2));