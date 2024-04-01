// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function App(){
  return <div>
    <h2>I am a App Component</h2>
    <p>This is a Para added inside a component</p>
  </div>
}
export default App




// babel:
// function App(){
//   return _jsxs("div", {
//   children: [_jsx("h2", {
//     children: "I am a App Component"
//   }), _jsx("p", {
//     children: "This is a Para added inside a component"
//   })]
// });
// }
// export default App