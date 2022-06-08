import React, { Component, createContext } from "react";
import { store } from "./todoStore";

export const Context = createContext<typeof store>(store);

class ContextProvider extends Component<{ children: React.ReactNode }> {
  render() {
    return (
      <Context.Provider value={store}>{this.props.children}</Context.Provider>
    );
  }
}

export default ContextProvider;
