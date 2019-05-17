import React, { Component } from "react";
import SortableList from "./SortableList";
import arrayMove from "array-move";

export default class List extends Component {
  state = {
    items: ["Item 1", "Item 2", , "Item 3", "Item 4", "Item 5", "Item 6"]
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}
