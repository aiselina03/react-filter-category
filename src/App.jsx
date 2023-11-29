import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [data, setData] = useState([]);
  const [filterdata, setFilterdata] = useState("All");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((api) => setData(api));
  });

  function filter(category) {
    setFilterdata(category)
  }

  const filteredProducts = filterdata === "All" ? data : data.filter((item)=> item.category === filterdata)

  return (
    
    <div className="App">
      <ul className="buttons">
        <li onClick={()=>filter("All")}>All</li>
        <li onClick={()=>filter("men's clothing")}>Men</li>
        <li onClick={()=>filter("jewelery")}>Jewelery</li>
        <li onClick={()=>filter("electronics")}>Electronics</li>
        <li onClick={()=>filter("women's clothing")}>Women</li>
      </ul>
      <div className="cards">
        {filteredProducts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>Title: {item.title}</p>
            <p>
              <span>Price: $</span>
              {item.price}
            </p>
            <p>Description: {item.description.slice(0,40)}</p>
            <h3>{item.category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
