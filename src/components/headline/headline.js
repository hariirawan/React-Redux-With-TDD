import React from "react";
import PropTypes from "prop-types";
import "./headline.style.scss";

function Headline(props) {
  const { title, desc } = props;

  if (!title) return null;
  return (
    <div className="headline" data-test="headline">
      <h1 data-test="title">{title}</h1>
      <p data-test="desc">{desc}</p>
    </div>
  );
}

Headline.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  people: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      email: PropTypes.string,
      onlineStatus: PropTypes.bool
    })
  )
};

export default Headline;
