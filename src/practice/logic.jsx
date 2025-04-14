function Logic(){

const studentMarks = [85, 92, 78, 88, 90, 76, 95];
const condition = (mark) => mark > 90;
const firstSatisfyingMark = studentMarks.find(condition);
console.log("First mark satisfying the condition:", firstSatisfyingMark);
return(
    <div><h2>{firstSatisfyingMark}</h2></div>
)
}
export default Logic