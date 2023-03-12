import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";

function App() {
  return (
    <div className="App">
      <Accordion title="Title">
        <div>Children</div>
      </Accordion>
    </div>
  );
}

export default App;
