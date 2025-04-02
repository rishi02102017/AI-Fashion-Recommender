# 👕 ReLove - AI-Powered Clothing Recommender

This is an AI-powered fashion recommendation system that allows users to upload a clothing photo, removes the background, classifies the item, and suggests complementary outfit items.

![Demo Banner](https://github.com/rishi02102017/relove-clothing-recommender/blob/main/banner.png)

---

## 🔍 Features
- Background Removal (via `rembg`)
- Feature Extraction using `ResNet18`
- Matching via Cosine Similarity
- Complementary Item Recommendations (e.g., tshirts → pants + shoes)
- MongoDB Logging (results saved in `fashionDB.results`)
- React Native frontend UI with theme toggle (light/dark mode)

---

## 📊 AI/ML Pipeline

Here’s the simplified pipeline that powers the recommender system:

```
Upload Image → Remove Background → Extract Features → Recommend Similar Items
```

![Flowchart](https://github.com/rishi02102017/relove-clothing-recommender/blob/main/ai_pipeline.jpg)

1. Background Removal using `rembg`
2. Feature Extraction using `ResNet18`
3. Matching with Preprocessed Embeddings (cosine similarity)
4. Recommendations using a simple rule-based mapping
5. MongoDB Logging (category, score, recommendations, timestamp)

> The entire backend runs inside a single Colab notebook using Flask + LocalTunnel.

---

## 💻 Frontend (React Native + Expo)

Upload an image of a clothing item and instantly get style-based recommendations.

![Mobile UI](https://github.com/rishi02102017/relove-clothing-recommender/blob/main/mobile_ui.jpeg)

- Upload or capture a clothing image
- Toggle between dark/light mode 🌙☀️
- View predictions, similarity score, and styling recommendations

📱 Built using **React Native (Snack Expo)**

---

## ⚙️ Backend (Flask on Colab)
- `/upload` endpoint to accept image uploads
- Runs Flask app inside a Colab cell
- Exposed to mobile via `localtunnel`
- Results are pushed to MongoDB Atlas on each query

![Colab Tunnel Running](https://github.com/rishi02102017/relove-clothing-recommender/blob/main/tunnel_running.png)

---

## 🧬 MongoDB Logging

- Cluster: `ReLove`
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

Here’s a real log in **MongoDB Atlas**:

![MongoDB Log](https://github.com/rishi02102017/relove-clothing-recommender/blob/main/mongo_log.png)

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

## 📦 Requirements

Install all backend dependencies with:

```bash
pip install -r requirements.txt
```

Includes:  
`flask`, `flask-cors`, `rembg`, `torchvision`, `sklearn`, `pymongo[srv]`

---

## 🚀 Demo

If you're running the backend:

```
Colab API URL (localtunnel): https://little-insects-rescue.loca.lt/upload
```

Try image upload via React Native frontend → backend will handle everything.

---

## 👤 Author

**Jyotishman Das**  
M.Tech Artificial Intelligence – IIT Jodhpur  

- [Portfolio](https://my-portfolio-jyotishman-das-projects.vercel.app)  
- [GitHub](https://github.com/rishi02102017)  
- [LinkedIn](https://www.linkedin.com/in/jyotishmandas85p/)
