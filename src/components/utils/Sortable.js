import React, { Component } from "react";
import PropTypes from "prop-types";
import SortableJS from "sortablejs";

export default class Sortable extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <h1>Sortable Component</h1>
      </div>
    );
  }
}
