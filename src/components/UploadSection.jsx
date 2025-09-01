import React, { useState } from "react";

function UploadSection() {
  const [prediction, setPrediction] = useState("---");

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return alert("Please select an image first.");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error:", error);
      setPrediction("Error in prediction");
    }
  };

  return (
    <section className="upload-section">
      <h2>Predict or Classify Water Hyacinth</h2>
      <p>Upload an image to identify the type of water hyacinth species.</p>
      <input type="file" accept="image/*" onChange={uploadImage} />
      <div id="outputBox" style={{ marginTop: "20px", padding: "10px", background: "white", color: "black", borderRadius: "5px" }}>
        Prediction: <span>{prediction}</span>
      </div>
    </section>
  );
}

export default UploadSection;
