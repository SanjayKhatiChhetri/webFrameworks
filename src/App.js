import React from "react";
import Title from "./components/Title";
import ShoppingList from "./components/ShoppingList";
import styles from "./App.module.css";
import "./App.css";
import Button from "./components/Button";

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props) {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: "Milk", qty: 5, unit: "ltr" },
        { id: 2, value: "Bananas", qty: 6, unit: "pcs" },
        { id: 3, value: "Bread", qty: 3, unit: "x" },
        { id: 4, value: "Eggs", qty: 16, unit: "x" },
      ],
    };
  }

  handleButtonClick = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      }),
    });
  };

  render() {
    const { applicationDescription, applicationName } = this.props;
    return (
      <div className={styles.shoppingList}>
        <Title
          applicationDescription={applicationDescription}
          applicationName={applicationName}
        />
        <ShoppingList items={this.state.items} />
        <Button
          label="Add Milk"
          handleButtonClick={() => this.handleButtonClick(1)}
        />
        <Button
          label="Add Bananas"
          handleButtonClick={() => this.handleButtonClick(2)}
        />
        <Button
          label="Add Bread"
          handleButtonClick={() => this.handleButtonClick(3)}
        />
        <Button
          label="Add Eggs"
          handleButtonClick={() => this.handleButtonClick(4)}
        />
      </div>
    );
  }
}

export default App;
