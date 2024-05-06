import React, {useState} from 'react';

function App() {
  const [count, theState] = useState(0);
  return (
    <div className="container my-5">
      <div class="card text-center my-7">
      <div class="card-body">
        <h1>Counter</h1>
        <div class="my-5">
        <h2 class="my-5">{count}</h2>
        <button class="btn btn-success mx-5" onClick={()=>theState(count+1) }>Increment</button>
        <button class="btn btn-danger mx-5" onClick={()=>theState(count-1)} disabled = {count===0}>Decrement</button>
        <button class="btn btn-secondary mx-5" onClick={()=>theState(0)} disabled = {count===0}>Reset</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
