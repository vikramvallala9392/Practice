function Even(){
const numbers = [7, 10, 15, 8, 13, 18, 6];
const evens = numbers.filter((num) => num % 2 === 0);
return(
    <div>
        <h2>even numbers are :{evens.join(",")}</h2>
    </div>
)
}
export default Even