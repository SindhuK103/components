import React, { useState } from 'react';

function Hooks(){

    const [counter,setCounter] = useState(1)

    return( //hook
       // <Button> function</Button>
      //<button onClick={()=> console.log(Math.random())}>{counter}</button>
      <div>
      <button onClick = { ()=> setCounter(counter+1)}> {counter}</button>
      </div>
    );
  
}
  
export default Hooks;
