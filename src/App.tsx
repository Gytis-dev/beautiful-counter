import { Component } from "react";
import ContextProvider from "./state/ContextProvider";
import Child from "./Child";

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <Child />
      </ContextProvider>
    );
  }
}

export default App;
