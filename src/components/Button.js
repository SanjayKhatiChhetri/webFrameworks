import React from "react";

const Button = (props) => {
  const { label, handleButtonClick } = props;
  return (
    <button
      onClick={handleButtonClick}
      style={{
        padding: "10px",
        margin: "10px",
        background: "skyblue",
        border: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
