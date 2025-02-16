# 🍹 Bevanda Mobile Bar Ordering System

A web-based ordering system for a mobile bar, built with **Django (backend) & React.js (frontend)**.

---

## 🚀 Installation Guide

### **1️⃣ Clone the Repository**

Run this in your terminal:

```bash
git clone https://github.com/VelvetiMoon/Ordering.git
cd Ordering
```

---

## 🖥 **Backend Setup (Django)**

### **2️⃣ Create a Virtual Environment**

```bash
cd backend
python -m venv venv
```

**Activate the Virtual Environment:**

- 🖥 **Windows:**
  ```bash
  venv\Scripts\activate
  ```
- 🖥 **Mac/Linux:**
  ```bash
  source venv/bin/activate
  ```

### **3️⃣ Install Dependencies**

```bash
pip install -r requirements.txt
```

### **4️⃣ Apply Migrations**

```bash
python manage.py migrate
```

### **5️⃣ Create a Superuser (Admin Login)**

```bash
python manage.py createsuperuser
```

📌 Follow the prompts to set **username, email, and password**.

### **6️⃣ Run the Django Server**

```bash
python manage.py runserver
```

Backend will run at [**http://127.0.0.1:8000/**](http://127.0.0.1:8000/).

---

## 🌍 **Frontend Setup (React)**

### **7️⃣ Install Dependencies**

```bash
cd frontend
npm install
```

### **8️⃣ Start the React Development Server**

```bash
npm run dev
```

Frontend will run at [**http://localhost:5173/**](http://localhost:5173/).

---

## 📝 **Environment Variables**

1. **Backend (.env file in **``**)**

```ini
DEBUG=True
SECRET_KEY=your_secret_key
ALLOWED_HOSTS=*
```

2. **Frontend (.env file in **``**)**

```ini
VITE_BACKEND_URL=http://127.0.0.1:8000/
```

---

## ✅ **Project Features**

- 📋 **Order Selection** - Choose a drink bundle from the menu.
- 🎯 **Dynamic Pricing** - Adjusts pricing based on pax selection.
- 🔍 **Stock Availability Check** - Ensures orders can be fulfilled.
- 🔑 **Admin Panel** - Manage orders via Django Admin.
- ⚡ **Fast Frontend** - Built with React.js and Tailwind CSS.

---

## 🛠 **Troubleshooting**

If you get permission errors, try:

```bash
chmod +x manage.py
```
---
