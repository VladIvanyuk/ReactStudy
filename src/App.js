import { useState } from "react";
import { Costs } from "./components/Costs/Costs";
import { NewCost } from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    date: new Date(2023, 4, 3),
    description: "Холодильник",
    amount: "999.99",
    id: "c1",
  },
  {
    date: new Date(2023, 8, 14),
    description: "Телевизор",
    amount: "142.99",
    id: "c2",
  },
  {
    date: new Date(2023, 11, 11),
    description: "Телефон",
    amount: "88.99",
    id: "c3",
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    console.log(cost);
    setCosts((prev) => [cost, ...prev]);
  };

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} onAddCost={addCostHandler} />
    </div>
  );
}

export default App;
