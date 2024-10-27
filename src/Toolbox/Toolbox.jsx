// src/Toolbox.js

import styles from "./Toolbox.module.css";
import { useNavigate } from "react-router-dom";
import ToolboxContainer from "./ToolboxContainer";

export default function Toolbox() {
  const navigate = useNavigate();

  return (
    <div className={styles.toolboxContainer}>
      <h1 className={styles.toolboxTitle}>Toolbox</h1>

      <div className={styles.toolsSection}>
        <ToolboxContainer
          title="Calculator"
          desc="A handy calculator to perform basic arithmetic operations."
          btnName="Open Calculator"
          clickBtn={() => navigate("/calculator")} 
        />

        <ToolboxContainer
          title="Currency Converter"
          desc="Quickly convert between various currencies in real-time."
          btnName="Open Currency Converter"
          clickBtn={() => navigate("/currencyconverter")}
        />

        
        <ToolboxContainer
          title="Unit Converter"
          desc="Convert between different units of length and weight."
          btnName="Open Unit Converter"
          clickBtn={() => navigate("/unitconverter")} 
        />
      </div>
    </div>
  );
}
