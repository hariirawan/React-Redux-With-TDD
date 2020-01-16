import React from "react";
import "./headline.style.scss";

export default function Headline(props) {
  const { title, desc } = props;

  if (!title) return null;
  return (
    <div className="headline" data-test="headline">
      <h1 data-test="title">{title}</h1>
      <p data-test="desc">{desc}</p>
    </div>
  );
}
