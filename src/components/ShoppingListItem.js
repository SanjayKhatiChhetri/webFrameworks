import React from "react";
import styles from "./ShoppingListItem.module.css";
import cx from "classnames";

/* Shopping list item */
const ShoppingListItem = (props) => {
  return (
    <li className={cx(styles.flex, styles.item)}>
      <div className={cx(styles.flex, styles.itemQtyUnit)}>
        <div>{props.qty}&nbsp;</div>
        <div>{props.unit}</div>
      </div>
      <div style={{ marginLeft: "20px" }}>{props.value}</div>
    </li>
  );
};

export default ShoppingListItem;
