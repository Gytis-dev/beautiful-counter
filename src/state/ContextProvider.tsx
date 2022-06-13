import React, { Component, createContext } from "react";
import { store } from "./photoStore";

export const StoreContext = createContext<typeof store>(store);

class ContextProvider extends Component<{ children: React.ReactNode }> {
  render() {
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export default ContextProvider;
