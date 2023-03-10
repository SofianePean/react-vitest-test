import "./App.css";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div className="App">
      <Accordion title="Je suis un title">
        <div>Je suis un enfant</div>
      </Accordion>
    </div>
  );
}

export default App;
