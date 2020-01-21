import React from "react";
import Header from "./components/header/header";
import Headline from "./components/headline/headline";

const people = [
  {
    name: "Hari Irawan",
    address: "Jerua, Desa Montong Beter, Kec. Sakra Barat",
    email: "hari.irawan@manyoption.co.id",
    onlineStatus: true
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          title="Postingan Gua"
          desc="Lorem ipsum dolor sit amet, vim cibo doctus urbanitas id"
          people={people}
        />
      </section>
    </div>
  );
}

export default App;
