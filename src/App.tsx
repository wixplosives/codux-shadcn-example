import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Clicked: {count}
        </Button>
      </div>
    </>
  );
}

export default App;
