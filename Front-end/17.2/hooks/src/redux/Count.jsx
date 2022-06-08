// Example with class

// import React, { Component } from "react";

// class Count extends Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//     };
//   }

// render() {
//   const { counter } = this.state

//   return (
//     <div>
//       <div>Counter: {counter}</div>
//       <button
//         type="button"
//         onClick={() =>
//           this.setState((prevState) => ({ counter: prevState.counter + 1 }))
//         }
//         >
//         Increase Counter
//       </button>
//     </div>
//     );
//   }
// }

// export default Count;


// Example with function and hooks

import React, { useState } from "react";

function Count() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Counter: {counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default Count;
