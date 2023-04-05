import { Costs } from "./components/Costs/Costs";
import { NewCost } from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      date: new Date(2023, 4, 3),
      description: "Холодильник",
      amount: "999.99",
    },
    {
      date: new Date(2023, 8, 14),
      description: "Телевизор",
      amount: "142.99",
    },
    {
      date: new Date(2023, 11, 11),
      description: "Телефон",
      amount: "88.99",
    },
  ];

  return (
    <div className="App">
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
