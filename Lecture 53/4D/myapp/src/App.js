import './App.css';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

function App(){
  return <div>
    <h1>This is a heading</h1>
    <p>This is a paragraph</p>
  </div>
}
export default App


//Babel compiler:
// function App() {
//   return _jsxs("div", {
//       children: [_jsx("h2", {
//         children: "I am a App Component"
//       }), _jsx("p", {
//         children: "This is a Para added inside a component"
//       })]
//     });
// }

// export default App;
