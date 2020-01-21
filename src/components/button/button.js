import React from "react";
import PropTypes from "prop-types";

function ButtonShared(props) {
  const { text, emitEvent } = props;

  return <button data-test="button-shared">{text}</button>;
}

ButtonShared.propTypes = {
  text: PropTypes.string,
  emitEvent: PropTypes.func
};
export default ButtonShared;
