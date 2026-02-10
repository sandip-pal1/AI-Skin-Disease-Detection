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

**SkinCareAI** is an AI-powered web application developed as part of **Infosys Virtual Internship 6.0** and a B.Tech Final Year Project.
The system detects common skin diseases from uploaded skin images using **Deep Learning (CNN)** and provides:

* 🦠 Disease name
* ⚠️ Risk level
* 📖 Medical description
* 💊 Treatment suggestions
* 🩺 Doctor consultation advice
* 🌿 Lifestyle & skincare recommendations

This project bridges **Artificial Intelligence + Healthcare + Full-Stack Development**.

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

## 🚀 Deployment Details

### 🌐 Frontend (Vercel)

🔗 **Live Application:**
👉 [https://skin-disease-ai-sandip.vercel.app/](https://skin-disease-ai-sandip.vercel.app/)

### 🧠 Backend (Render)

⚙️ Flask-based REST API deployed using Docker

---

## 👨‍💻 Developer Profile

* 👤 **Name:** Sandip Pal
* 💻 **GitHub:** 👉 [https://github.com/sandip-pal1](https://github.com/sandip-pal1)
* 📦 **Project Repository:** 👉 [https://github.com/sandip-pal1/AI-Skin-Disease-Detection](https://github.com/sandip-pal1/AI-Skin-Disease-Detection)
* 🔗 **LinkedIn:** 👉 [https://www.linkedin.com/in/sandip-pal-7877b9285/](https://www.linkedin.com/in/sandip-pal-7877b9285/)

---

## ⚠️ Healthcare Disclaimer

This application is **not a substitute for professional medical diagnosis**.
It is intended strictly for **educational and assistive purposes**.
Please consult a certified dermatologist for medical advice.

---

## 🏆 Internship Context

This project was developed under:

**Infosys Virtual Internship 6.0**
As part of milestone-based learning and real-world AI application development.

---

## 📌 Conclusion

**SkinCareAI** demonstrates how deep learning and modern web technologies can assist in early-stage skin disease screening and healthcare awareness.
