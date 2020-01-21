import React from "react";
import PropTypes from "prop-types";

function ListItem(props) {
  const { title, desc } = props;
  if (!title) return null;
  return (
    <div data-test="list-item">
      <h1 data-test="list-item-title">{title}</h1>
      <div data-test="list-item-desc">{desc}</div>
    </div>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default ListItem;
