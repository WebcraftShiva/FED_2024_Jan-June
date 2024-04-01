//JSX Using Babel

import { jsx as _jsx, jsxs as 
  _jsxs } from "react/jsx-runtime";


function App(){
  return _jsxs("div", {
    children: [_jsx("h1", {
      children: "I am a App Component"
    }), _jsx("p", {
      children: "This is a para of component"
    })]
  });
}

// export default App;

//################# Main component:Doing some Changes 
// function App(){

//   return <div>
//   <h1>I am a App Component</h1>
//   <p>This is a para of component</p>
// </div>
// }

// export default App;