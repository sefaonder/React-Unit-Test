import React, { useState } from "react";
import { randomColor } from "../../utils/helper";

function SampleComponent() {
  const [state, setstate] = useState(1);
  return (
    <div>
      <h1 data-testid='numberSample'>{state}</h1>
      <div
        data-testid='randomColor'
        style={{ backgroundColor: randomColor(), width: 50 }}
      >
        Hello
      </div>
      <button data-testid='changeButton' onClick={() => setstate(state * 2)}>
        Multiply
      </button>
    </div>
  );
}

export default SampleComponent;
