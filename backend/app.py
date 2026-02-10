from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image
import os
from medical_info import MEDICAL_INFO
from flask_cors import CORS
from dotenv import load_dotenv
from clinic_service import fetch_nearby_clinics




from tensorflow.keras.applications.efficientnet import preprocess_input

app = Flask(__name__)
load_dotenv()
CORS(app)


# -----------------------------
# LOAD MODEL
# -----------------------------
model = tf.keras.models.load_model(
    "model/skin_model.h5",
    compile=False
)


CLASS_NAMES = [
     "Eczema",                                      # 0
    "Atopic Dermatitis",                           # 1
    "Melanoma",                                    # 2
    "Basal Cell Carcinoma (BCC)",                  # 3
    "Melanocytic Nevi (NV)",                       # 4
    "Warts / Viral Infections",                    # 5
    "Benign Keratosis-like Lesions (BKL)",         # 6
    "Psoriasis / Lichen Planus",                   # 7
    "Seborrheic Keratoses",                        # 8
    "Tinea / Fungal Infection"
]




IMG_SIZE = 300
CONFIDENCE_THRESHOLD = 0.50



# HEALTH CHECK

@app.route("/")
def home():
    return "✅ Backend is running and model loaded successfully"



# IMAGE PREPROCESSING

def prepare_image(image: Image.Image):
    image = image.resize((IMG_SIZE, IMG_SIZE))
    img_array = np.array(image)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)
    return img_array



# PREDICTION API

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files["image"]

    try:
        image = Image.open(file).convert("RGB")
    except:
        return jsonify({"error": "Invalid image"}), 400

    img = prepare_image(image)
    preds = model.predict(img)

    confidence = float(np.max(preds))
    idx = int(np.argmax(preds))
    disease = CLASS_NAMES[idx]

    if confidence < CONFIDENCE_THRESHOLD:
        return jsonify({
            "status": "uncertain",
            "message": "Low confidence prediction. Please upload a clearer image or consult a dermatologist.",
            "confidence": round(confidence * 100, 2)
        })
    info = MEDICAL_INFO[disease]

    return jsonify({
    "status": "success",
    "disease": disease,
    "confidence": round(confidence * 100, 2),
    "risk_level": info["risk"],
    "description": info["description"],
    "treatment": info["treatment"],
    "doctor_advice": info["doctor_advice"],
    "lifestyle_tips": info["lifestyle"]
})

    
@app.route("/api/nearby-clinics", methods=["GET"])
def nearby_clinics():
    lat = request.args.get("lat")
    lng = request.args.get("lng")
    

    if not lat or not lng:
        return jsonify({"error": "Location required"}), 400

    clinics = fetch_nearby_clinics(lat, lng)
    return jsonify(clinics)



if __name__ == "__main__":
    app.run(debug=True)
