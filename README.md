# 👕 ReLove - AI-Powered Clothing Recommender

This is an AI-powered fashion recommendation system that allows users to upload a clothing photo, removes the background, classifies the item, and suggests complementary outfit items.

![Demo Banner](https://github.com/rishi02102017/relove-clothing-recommender/blob/main/assets/banner.png?raw=true)

## 🔍 Features
-  Background Removal (via `rembg`)
-  Feature Extraction using `ResNet18`
-  Matching via Cosine Similarity
-  Complementary Item Recommendations (e.g., tshirts → pants + shoes)
-  MongoDB Logging (results saved in `fashionDB.results`)
-  React Native frontend UI with theme toggle (light/dark mode)

---

## 🧠 AI/ML Pipeline (Colab Notebook)
1. Background Removal using `rembg`
2. Feature Extraction using `ResNet18`
3. Matching with Preprocessed Embeddings (cosine similarity)
4. Recommendations using a simple rule-based mapping
5. MongoDB Logging (category, score, recommendations, timestamp)

> The entire backend runs inside a single Colab notebook using Flask + LocalTunnel.

---

## 💻 Frontend (React Native + Expo)
- Upload or capture a clothing image
- Toggle between dark/light mode 🌙☀️
- View predictions, similarity score, and styling recommendations

📱 **Built on Snack Expo** for rapid mobile UI prototyping.

---

## ⚙️ Backend (Flask on Colab)
- `/upload` endpoint to accept image uploads
- Runs Flask app inside a Colab cell
- Exposed to mobile via `localtunnel`
- Results are pushed to MongoDB Atlas on each query

---

## 🧬 MongoDB Integration
- Cluster Name: ReLove
- Database: `fashionDB`
- Collection: `results`

Each inference result is logged in the form:

```json
{
  "category": "tshirts",
  "recommendations": ["pants", "shoes"],
  "similarity_score": 0.95,
  "timestamp": 1743585306.8138463
}
```

---

## 📦 Requirements
Install all backend dependencies with:

```bash
pip install -r requirements.txt
```

Required packages include:
- flask, flask-cors, pillow, rembg
- torchvision, torch, numpy, sklearn
- pymongo[srv]

---

## 📁 Project Structure
```
relove-clothing-recommender/
│
├── backend/
│   └── app.py                 
│   └── model/
│       ├── X.npy             
│       ├── y.npy             
│       └── sample_clothes/   
│
├── frontend/
│   └── App.js                
│   └── assets/
│       └── query.jpg         
│
├── README.md                
├── requirements.txt                        
```

---

## 🚀 Live Demo (Optional)
If you're running the backend:
```
Colab URL: https://little-insects-rescue.loca.lt/upload
```
> Run Colab → Image Upload via App → MongoDB result logging.

---

## 👤 Author
**Jyotishman Das**  
M.Tech Artificial Intelligence – IIT Jodhpur

-  [Portfolio Website](https://my-portfolio-jyotishman-das-projects.vercel.app)
-  [GitHub](https://github.com/rishi02102017)
-  [LinkedIn](https://www.linkedin.com/in/jyotishmandas85p/)
