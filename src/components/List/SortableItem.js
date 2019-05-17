import React from "react";
import { sortableElement } from "react-sortable-hoc";

const SortableItem = sortableElement(({ value }) => <li>{value}</li>);

export default SortableItem;
