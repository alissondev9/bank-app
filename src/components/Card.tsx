import React from "react";
import Button from "./Button";
import { welcome } from "../services/welcome";

const Card: React.FC = () => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "24px",
        borderRadius: "8px",
        width: "300px",
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Usuário"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Senha"
        style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
      />

      <Button label="Entrar" onClick={welcome} />
    </div>
  );
};

export default Card;
