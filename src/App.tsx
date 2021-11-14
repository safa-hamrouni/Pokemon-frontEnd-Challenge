import React from "react";
import CardListItem from "./components/CardListItem";
import "./index.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Pokemon Challenge</h1>
      <CardListItem />
    </React.Fragment>
  );
};

export default App;
