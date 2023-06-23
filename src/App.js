import React, {useState} from "react"
import { Calculator } from './components/calculator';

function App() {
  const [result, setResult] = useState("0")
  
  return (
    <>
      <Calculator result={result} setResult={setResult}></Calculator>
    </>
  );
}

export default App;
