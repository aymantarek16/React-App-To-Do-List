import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import "./App.scss";
const App = () => {

  const [input, setInput] = useState();
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>

        <div>
          <Form />
         </div>
      </div>
    </div>
  );
};

export default App;
