import React from "react";
import Header from "./components/header/header";
import Headline from "./components/headline/headline";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline title="Postingan Gua" desc="Lorem ipsum dolor sit amet, vim cibo doctus urbanitas id"/>
      </section>
    </div>
  );
}

export default App;
