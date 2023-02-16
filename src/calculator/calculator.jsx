import { useState } from "react";
import "./calculate.css";

const OPERATIONS = ["+", "-", "*", "/"];

function Operation({ label, handleonclick }) {
  return <button onClick={handleonclick}>{label}</button>;
}
function Calculator() {
  const [numbers, setNumbers] = useState([0, 0]);
  const [result, setResult] = useState();

  function handleOnChange(value, index) {
    const newNumbers = [...numbers];
    newNumbers[index] = parseInt(value);
    setNumbers(newNumbers);
  }
  function handeloperation(Operationtype) {
    switch (Operationtype) {
      case "+":
        setResult(numbers[0] + numbers[1]);
        break;
      case "-":
        setResult(numbers[0] - numbers[1]);
        break;
      case "*":
        setResult(numbers[0] * numbers[1]);
        break;
      case "/":
        setResult(numbers[0] / numbers[1]);
        break;
      default:
        break;
    }
  }

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="input">
        {[0, 1].map((id) => (
          <input
            type="number"
            onChange={(e) => handleOnChange(e.target.value, id)}
          />
        ))}
      </div>
      <div className="operations">
        {OPERATIONS.map((operation, index) => (
          <Operation
            key={index}
            label={operation}
            handleonclick={() => handeloperation(operation)}
          />
        ))}
      </div>
      <div>
        <h3>Result = {result}</h3>
      </div>
    </div>
  );
}
export default Calculator;
