import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        background: "#0d6efd",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        borderRadius: "4px",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
