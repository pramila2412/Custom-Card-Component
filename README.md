# ⚛️ React + GrapesJS Custom Card (POC)

This is a small proof of concept built with **React** and **GrapesJS**.  
The goal was to create a simple **Custom Card Component** that can be dragged and dropped into the GrapesJS editor, and then customized by editing its traits like image, title, description, and button.

---

## 🔧 Features

- ⚙️ React (Vite) setup  
- 🧩 GrapesJS integrated into the project  
- 🪄 Custom Card block added under **“Custom Components”**  
- ✏️ Editable traits:
  - Image URL  
  - Title text  
  - Description text  
  - Button label and link  
- 🎨 Basic styling for card and editor  
- 📤 Export as HTML option to download the final design  

---

## 📁 Project Structure

```
CUSTOM-CARD/
├── public/
│   ├── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   └── GrapesJSCardBuilder.jsx   # GrapesJS setup + custom card registration
│   │
│   ├── styles/
│   │   ├── card.css                  # Card styling
│   │   └── editor.css                # Editor styling
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🧰 Installation

```bash
npm install
```

---

## 🚀 Run the Project

```bash
npm run dev
```

Then open your browser at:

👉 [http://localhost:5173](http://localhost:5173)

---

## 🖼️ Demo Preview

If you’ve added demo files like `card-demo.html` or `working-demo.html`, you can open them directly from the `public/` folder to preview saved templates.

---

## 🧑‍💻 Tech Stack

- React + Vite  
- GrapesJS  
- CSS Modules  

---

## 📜 License

This project is released as a proof of concept.
