# 🩺 AI-Based Intelligent System for Skin Disease Detection (**SkinCareAI**)

![Python](https://img.shields.io/badge/Python-3.10-blue)
![Flask](https://img.shields.io/badge/Flask-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-UI-38bdf8)
![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20DB-orange)
![Deep Learning](https://img.shields.io/badge/Deep%20Learning-CNN-red)
![EfficientNet](https://img.shields.io/badge/Model-EfficientNetB3-purple)
![Deployment](https://img.shields.io/badge/Deployment-Render%20%7C%20Vercel-black)

---

## 📌 Project Overview

**SkinCareAI** is an AI-powered web application developed as part of **Infosys Virtual Internship 6.0**  Project.
The system detects common skin diseases from uploaded skin images using **Deep Learning (CNN)** and provides:

* 🦠 Disease name
* ⚠️ Risk level
* 📖 Medical description
* 💊 Treatment suggestions
* 🩺 Doctor consultation advice
* 🌿 Lifestyle & skincare recommendations

This project bridges **Artificial Intelligence + Healthcare + Full-Stack Development**.

---

## 🎯 Problem Statement

Skin diseases affect millions of people worldwide, but early diagnosis is often delayed due to lack of access to dermatologists.  
There is a need for an **intelligent, accessible, and affordable system** that can assist users in identifying skin conditions at an early stage and guide them toward proper medical consultation.

---

## 🧠 Solution Approach

We built an **end-to-end AI-based skin disease detection system** using:

- **Deep Learning (CNN)** for image classification  
- **EfficientNetB0** for high accuracy with fewer parameters  
- **Flask API** to serve the trained model  
- **React + Tailwind CSS** for a modern UI  
- **Firebase** for authentication and user data storage  
- **Cloud Deployment** using Render & Vercel  

---

## 🗂 Dataset Details

- **Dataset Source:** Kaggle  
- **Dataset Link:**  
  https://www.kaggle.com/datasets/ismailpromus/skin-diseases-image-dataset  

### Dataset Characteristics:
- Multiple skin disease categories  
- RGB skin lesion images  
- Real-world clinical variations  

---

## 🧪 Milestone 1: Dataset Preparation & Model Training

### 🔹 Data Preprocessing
- Image resizing (224 × 224)
- Normalization
- Data augmentation (rotation, flip, zoom)
- Train-validation split

### 🔹 Model Selection
- **EfficientNetB0**
  - Pretrained on ImageNet
  - Lightweight & efficient
  - High accuracy for medical imaging

### 🔹 Training Methodology
- Transfer Learning
- Frozen base layers
- Custom classification head
- Adam optimizer
- Categorical Crossentropy loss

### 🔹 Model Training Environment
- Google Colab
- TensorFlow / Keras
- GPU acceleration

📓 **Training Notebook:**  
`EfficientNetB3_Model Training Code.ipynb`

---

## 🏗 System Architecture

```
User Image
   ↓
Frontend (React + Tailwind)
   ↓
Flask API (Backend)
   ↓
EfficientNet Model
   ↓
Prediction Result
   ↓
Firebase (Store History & Profile)
```

---

## 🧩 Milestone 2: Backend Development

### 🔹 Backend Stack
- Python
- Flask
- TensorFlow
- REST API

### 🔹 Backend Features
- Image upload API
- Model inference
- Disease classification
- Recommendation engine
- Secure API endpoints

### 🔹 Backend Structure
```
backend/
 ├── model/
 ├── app.py
 ├── clinic_service.py
 ├── medical_info.py
 ├── requirements.txt
 ├── Dockerfile
 └── .env
```

---

## 🎨 Milestone 3: Frontend Development

### 🔹 Frontend Stack
- React.js
- Tailwind CSS
- JavaScript
- HTML5 / CSS3

### 🔹 UI Features
- Image upload interface
- Disease prediction screen
- User profile page
- Prediction history
- Responsive design

### 🔹 Frontend Structure
```
frontend/
 ├── src/
 │   ├── components/
 │   ├── pages/
 │   ├── hooks/
 │   ├── utils/
 │   ├── api.js
 │   ├── App.jsx
 │   └── main.jsx
 └── public/
```

---

## 🔐 Firebase Integration

### Used For:
- Google Authentication
- User profile storage
- Prediction history
- Secure login/logout

### Firebase Services:
- Firebase Auth
- Firestore Database

---

## 🚀 Deployment Details

### 🔹 Backend Deployment
- Platform: **Render**
- Dockerized Flask app
- Environment variables secured

### 🔹 Frontend Deployment
- Platform: **Vercel**
- Connected to GitHub repo
- Auto-deployment enabled

### 🔹 Live Application
🌐 **Live URL:**  
https://skin-disease-ai-sandip.vercel.app/

---

## ▶️ How to Run Locally

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 📊 Model Evaluation Results

The following table shows the **actual classification performance** of the trained **EfficientNetB0** model, calculated on the test dataset.

| Disease Class                                      | Precision | Recall | F1-Score | Support |
| -------------------------------------------------- | --------- | ------ | -------- | ------- |
| Eczema                                             | 0.70      | 0.70   | 0.70     | 167     |
| Warts / Molluscum / Viral Infections               | 0.73      | 0.72   | 0.73     | 211     |
| Melanoma                                           | 0.98      | 0.98   | 0.98     | 314     |
| Atopic Dermatitis                                  | 0.57      | 0.75   | 0.65     | 125     |
| Basal Cell Carcinoma (BCC)                         | 0.91      | 0.90   | 0.91     | 333     |
| Melanocytic Nevi (NV)                              | 0.97      | 0.95   | 0.96     | 797     |
| Benign Keratosis-like Lesions (BKL)                | 0.75      | 0.82   | 0.78     | 208     |
| Psoriasis / Lichen Planus                          | 0.74      | 0.64   | 0.69     | 206     |
| Seborrheic Keratoses                               | 0.83      | 0.76   | 0.79     | 185     |
| Fungal Infections (Tinea / Ringworm / Candidiasis) | 0.68      | 0.72   | 0.70     | 170     |

### 🔍 Overall Performance

| Metric                   | Score    |
| ------------------------ | -------- |
| ✅ Accuracy               | **0.84** |
| 📊 Macro Avg F1-Score    | **0.79** |
| ⚖️ Weighted Avg F1-Score | **0.85** |


---


## ⚠️ Healthcare Disclaimer

This application is **not a replacement for professional medical diagnosis**.  
It is intended for **educational and assistance purposes only**.  
Users are strongly advised to consult a certified dermatologist.

---

## 👨‍💻 Developer Profile

* 👤 **Name:** Sandip Pal
* 💻 **GitHub:** 👉 [https://github.com/sandip-pal1](https://github.com/sandip-pal1)
* 📦 **Project Repository:** 👉 [https://github.com/sandip-pal1/AI-Skin-Disease-Detection](https://github.com/sandip-pal1/AI-Skin-Disease-Detection)
* 🔗 **LinkedIn:** 👉 [https://www.linkedin.com/in/sandip-pal-7877b9285/](https://www.linkedin.com/in/sandip-pal-7877b9285/)

---

## 🏆 Internship Context

This project was developed under:

**Infosys Virtual Internship 6.0**  
As part of milestone-based learning and real-world AI application development.

---

## ⭐ Acknowledgements

- Kaggle Datasets
- TensorFlow & Keras
- Firebase
- Infosys Virtual Internship Team

---

## 📌 Conclusion

**SkinCareAI** demonstrates how deep learning and modern web technologies can assist in early-stage skin disease screening and healthcare awareness.

---
