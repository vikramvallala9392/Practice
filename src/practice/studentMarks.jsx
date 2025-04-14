{/*function Marks(){
let studentMarks=[70,81,56,69,92,75];
console.log("student marks:"+studentMarks);
studentMarks.sort();
return(
    <div>
        <h2>sorted student marks:{studentMarks.join(",")}</h2>
    </div>
)

}
export default Marks
*/}

function Marks(){
    const studentmarks=[60,55,76,38,50,72];
    const b=studentmarks.sort((a,b)=>a-b);
    return(
        <div>{b.map((m)=>{
            if (m>60){
                return <div>{m}</div>;
            }
    }
    )
}
        </div>
    )
}
export default Marks;