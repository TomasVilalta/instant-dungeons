import { useGeminiConfig } from "../../context/GeminiConfigContext";
import styles from "./GeminiConfigPanel.module.css";
import { RotateCcw } from "lucide-react";

function GeminiConfigPanel() {
  const { generationConfig, updateConfig, resetConfig } = useGeminiConfig();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    updateConfig({
      [name]: type === "number" ? parseFloat(value) : value,
    });
  };

  return (
    <div className={styles.configPanel}>
      <div className={styles.header}>
        <h3>Generation Settings</h3>
      </div>

      <div className={styles.configItem}>
        <label htmlFor="temperature">Temperature</label>
        <p className={styles.infoText}>
          Controls randomness. Higher values are more creative.
        </p>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderInputContainer}>
            <input
              type="range"
              id="temperature"
              name="temperature"
              min="0"
              max="2"
              step="0.1"
              value={generationConfig.temperature}
              onChange={handleChange}
              className={styles.slider}
            />
            <span className={styles.valueDisplay}>
              {generationConfig.temperature}
            </span>
          </div>
          <div className={styles.sliderLabels}>
            <span>Precise</span>
            <span>Creative</span>
          </div>
        </div>
      </div>

      <div className={styles.configItem}>
        <label htmlFor="topK">Top K</label>
        <p className={styles.infoText}>
          Limits token selection to the K most likely tokens. Lower values are
          more focused.
        </p>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderInputContainer}>
            <input
              type="range"
              id="topK"
              name="topK"
              min="1"
              max="40"
              step="1"
              value={generationConfig.topK}
              onChange={handleChange}
              className={styles.slider}
            />
            <span className={styles.valueDisplay}>{generationConfig.topK}</span>
          </div>
        </div>
      </div>

      <div className={styles.configItem}>
        <label htmlFor="topP">Top P</label>
        <p className={styles.infoText}>
          Limits token selection to tokens comprising the top P probability
          mass. Lower values are more focused.
        </p>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderInputContainer}>
            <input
              type="range"
              id="topP"
              name="topP"
              min="0"
              max="1"
              step="0.05"
              value={generationConfig.topP}
              onChange={handleChange}
              className={styles.slider}
            />
            <span className={styles.valueDisplay}>{generationConfig.topP}</span>
          </div>
        </div>
      </div>

      <button
        className={styles.resetButton}
        onClick={resetConfig}
        title="Reset to defaults"
      >
        <RotateCcw size={16} />
        Reset defaults
      </button>
    </div>
  );
}

export default GeminiConfigPanel;
