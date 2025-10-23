# React + GrapesJS Custom Card (POC)

This is a small proof of concept built with **React** and **GrapesJS**.  
The goal was to create a simple **Custom Card Component** that can be dragged and dropped into the GrapesJS editor, and then customized by editing its traits like image, title, description, and button.

---

## 🔧 Features

- React (Vite) setup
- GrapesJS integrated into the project
- Custom Card block added under “Custom Components”
- Editable traits:
  - Image URL
  - Title text
  - Description text
  - Button label and link
- Basic styling for card and editor
- Export as HTML option to download the final design

---

## 📁 Project Structure
+-- CUSTOM-CARD
|   +-- public
|   |   +-- card-demo.html              // Demo page for card component
|   |   +-- working-demo.html           // Working example of GrapesJS editor
|   |   +-- vite.svg                    // Default Vite icon
|   |
|   +-- src
|   |   +-- assets
|   |   |   +-- react.svg               // React logo asset
|   |   |
|   |   +-- components
|   |   |   +-- GrapesJSCardBuilder.jsx // Main GrapesJS integration + custom card setup
|   |   |
|   |   +-- styles
|   |   |   +-- card.css                // Styling for custom card
|   |   |   +-- editor.css              // Styling for GrapesJS editor area
|   |   |
|   |   +-- App.css
|   |   +-- App.jsx                     // Main app component
|   |   +-- index.css
|   |   +-- main.jsx                    // Entry point for Vite
|   |
|   +-- index.html                      // Root HTML file
|   +-- package.json                    // Project dependencies and scripts
|   +-- vite.config.js                  // Vite configuration
|   +-- eslint.config.js                // ESLint configuration
|   +-- .gitignore                      // Git ignore rules
|   +-- README.md                       // Project documentation



## Install dependencies
npm install

## Run the project
npm run dev(Local Environment)

