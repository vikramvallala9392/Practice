function Find(){
let studentMarks2=[52,92,79,65,89,77];
    const findNumber=studentMarks2.find(num=>num%2===0);
return(
    <div>
        <h2>find number:{findNumber}</h2>
        
    </div>
)
}
export default Find