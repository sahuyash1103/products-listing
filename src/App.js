import React from "react";
import Layout from "./components/Layout";
import { StateProvider } from "./context/search-context";

function App() {
  return (
    <StateProvider>
      <Layout />
    </StateProvider>
  );
}

export default App;
