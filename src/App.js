import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./components/header/header";
import Headline from "./components/headline/headline";
import { fetch_posts } from "./actions/index";
import ListItem from "./components/list-item/list-item";

const people = [
  {
    name: "Hari Irawan",
    address: "Jerua, Desa Montong Beter, Kec. Sakra Barat",
    email: "hari.irawan@manyoption.co.id",
    onlineStatus: true
  }
];

function App(props) {
  useEffect(() => {
    props.fetch_posts();
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          title="Postingan Gua"
          desc="Lorem ipsum dolor sit amet, vim cibo doctus urbanitas id"
          people={people}
        />
        <div>
          {props.posts.map((data, key) => {
            return <ListItem title={data.title} desc={data.body} key={key} />;
          })}
        </div>
      </section>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetch_posts })(App);
