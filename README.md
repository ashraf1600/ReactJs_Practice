# 🛒 React Add to Cart App

This is a simple **React + Vite** application that demonstrates an **"Add to Cart"** functionality using locally stored **fake data** (`fakeData.json`). It's modular, beginner-friendly, and styled with basic CSS.

---

## 📂 Folder Structure

```
my-vite-react/
├── public/
│   └── fakeData.json          # Fake product data
├── src/
│   ├── components/
│   │   ├── Placement/
│   │   │   └── Placement.jsx
│   │   ├── Product/
│   │   │   ├── Product.jsx
│   │   │   └── Products.jsx
│   │   └── SingleCart/
│   │       └── SingleCart.jsx
│   ├── App.jsx                # Main component
│   ├── App.css                # App styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Vite entry point
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md                 # This file
```

---

## 🧩 Key Features

* 🛍️ Show products from `fakeData.json`
* ➕ Add items to cart
* 🔄 Dynamic cart count and display
* 📱 Responsive and clean UI

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/my-vite-react.git
cd my-vite-react

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🧪 Sample Product Data (`/public/fakeData.json`)

```json
[
  {
    "id": 1,
    "title": "Wireless Headphones",
    "price": 59.99,
    "image": "https://source.unsplash.com/featured/?headphones",
    "category": "Electronics"
  },
  {
    "id": 2,
    "title": "Classic Sneakers",
    "price": 89.99,
    "image": "https://source.unsplash.com/featured/?sneakers",
    "category": "Footwear"
  }
]
```

---

## 🧠 Components Overview

* `Products.jsx`: Fetches and renders all products.
* `Product.jsx`: Individual product card.
* `SingleCart.jsx`: Cart item UI.
* `Placement.jsx`: Handles layout placement.
* `App.jsx`: Main wrapper.
* `main.jsx`: ReactDOM + Vite entry.

---

## 🚀 Future Features (Ideas)

* LocalStorage for cart persistence
* Search and category filtering
* Login and order history
* API-based data (like [fakestoreapi.com](https://fakestoreapi.com))

---

## 📜 License

This project is licensed under the [MIT License].
