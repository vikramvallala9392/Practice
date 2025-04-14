function String() {
    const description = "hello all";
    const ss = description.substr(0, 3);
    return <div>
        <h2>{ss}</h2>
    </div>;
  }
  
  export default String;

