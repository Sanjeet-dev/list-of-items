import "./index.css";
import { useState } from "react";

function App() {
  const [cars, setCars] = useState(["bmw", "audi", "nexa", "ferrari"]);
  const handleDel = (id) => {
    setCars((prevCars) => prevCars.filter((_, index) => index !== id));
  };
  return (
    <main>
      <h1>Car Brands</h1>
      <div>
        {cars.map((car, id) => (
          <ul key={id}>
            <li>
              <span>{car}</span>
              <button onClick={() => handleDel(id)}>Delete</button>
            </li>
          </ul>
        ))}
      </div>
    </main>
  );
}

export default App;
