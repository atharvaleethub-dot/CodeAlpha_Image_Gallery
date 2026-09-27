# 🖼️ CodeAlpha Image Gallery

A responsive, modern image gallery built with **React**, **Vite**, and **Tailwind CSS** — created for Task 1 of the **CodeAlpha Frontend Development Internship**.

Browse photos across five categories, search by title or category, favorite your best shots, and view them full-screen in a keyboard-friendly lightbox — all wrapped in a polished, animated UI with full dark mode support.

## ✨ Features

**Core**
- Fully responsive image gallery (mobile, tablet, desktop)
- Custom React components styled with Tailwind CSS
- Full-screen lightbox with Previous / Next navigation
- Smooth hover, fade and scale transitions
- Mobile-friendly sticky navbar with a slide-down menu

**Bonus**
- 🔍 Search by title or category
- 🗂️ Category filters (Nature, Cities, Animals, Food, Technology)
- 🌗 Dark / light mode, saved across visits
- ⬇️ One-click image download with a clean file name
- ❤️ Favorites, saved to Local Storage
- ⌨️ Keyboard navigation (← → to browse, Esc to close)
- 🔢 Live image counter in the lightbox
- 🐢 Lazy-loaded images for faster initial load
- 💀 Skeleton loading animation per photo
- ♿ Accessible buttons, ARIA labels, and visible keyboard focus rings

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Library | React 19 (via Vite) |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| Language | JavaScript (ES6+) |
| Storage | Browser Local Storage |
| Linting | ESLint |

## 📁 Folder Structure

CodeAlpha_Image_Gallery/
│
├── public/
│ └── images/
│ ├── nature/
│ ├── cities/
│ ├── animals/
│ ├── food/
│ └── technology/
│
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── SearchBar.jsx
│ │ ├── CategoryFilter.jsx
│ │ ├── Gallery.jsx
│ │ ├── ImageCard.jsx
│ │ ├── Lightbox.jsx
│ │ ├── Tooltip.jsx
│ │ ├── ThemeToggle.jsx
│ │ └── Footer.jsx
│ │
│ ├── data/
│ │ └── images.js
│ │
│ ├── hooks/
│ │ └── useLocalStorage.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── README.md
├── package.json
└── vite.config.js


## 🚀 Installation

Clone the repository and run it locally:

```bash
git clone https://github.com/atharvaleethub-dot/CodeAlpha_Image_Gallery.git
cd CodeAlpha_Image_Gallery
npm install
npm run dev
```

Then open the local address shown in your terminal (usually `http://localhost:5173`).

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the code for lint errors |

## 🔮 Future Improvements

- Deploy the project publicly (Vercel / Netlify)
- Add pagination or infinite scroll for larger image sets
- Support user-uploaded images
- Add unit tests with Vitest and React Testing Library

## 📄 License

This project was built for educational purposes as part of the **CodeAlpha Frontend Development Internship** and is free to use and modify.

---

**Built by Atharva** · [GitHub](https://github.com/atharvaleethub-dot)