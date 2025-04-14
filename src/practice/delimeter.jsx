function Delimeter() {
    const namesList = "name 1, name 2, name 3";
    const delimeter = ",";
    const names = namesList.split(delimeter);
  
    const trimmedNames = names.map((name) => {
      return name.trim();
    });
    return <div><h2>{trimmedNames}</h2></div>;
  }
  
  export default Delimeter;
  