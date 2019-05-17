import React from "react";
import { sortableContainer } from "react-sortable-hoc";
import SortableItem from "./SortableItem";

const SortableList = sortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

export default SortableList;
