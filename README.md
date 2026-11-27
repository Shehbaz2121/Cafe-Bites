# ☕ Cafe Bites

A cozy café food-ordering front end built with **Angular** and **Tailwind CSS**. Browse the menu, search for dishes, filter by tags, open a dish's detail page, and manage a shopping cart.

<!-- 🔗 **Live demo:** _add your link here after deploying_ -->

<!-- Add screenshots here, e.g.
![Home page](docs/home.png)
![Cart page](docs/cart.png)
-->

## ✨ Features

- **Menu browsing** – card grid with image, rating, origins, delivery time and price
- **Search** – find dishes by name (`/search/:searchTerm`)
- **Tag filters** – FastFood, Pizza, Lunch, SlowFood and more, each with a count (`/tags/:tag`)
- **Food detail page** – large image, origins, tags, delivery estimate and *Add to Cart* (`/food/:id`)
- **Shopping cart** – change quantity, remove items, live total price (`/cart-page`)
- **Friendly empty states** – reusable "not found" component for empty search results, empty cart and missing products
- **404 route** – wildcard route for unknown URLs
- **Responsive layout** styled with a warm café palette (Tailwind utility classes)

## 🛠 Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Angular 22 (standalone components, new `@if` / `@for` control flow, signals) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 (via PostCSS) |
| Routing | Angular Router |
| Testing | Vitest (spec files generated for each component) |

## 📁 Project Structure

```
src/app/
├── header/          # Top navigation bar + cart button
├── home/            # Menu grid (also handles search and tag results)
├── search/          # Search bar
├── tags/            # Tag filter chips
├── foodpage/        # Single dish details + Add to Cart
├── cart-page/       # Cart list and order summary
├── not-found/       # Reusable empty-state component
├── pagenotfound/    # 404 page
├── about/           # About page (placeholder)
├── services/
│   ├── food/        # Menu data + search/filter helpers
│   └── cart/        # Cart logic (add, remove, change quantity)
└── shared/models/   # Food, Tag, Cart, CartItem classes
public/assets/images/food/   # Dish images
```

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) (LTS) and npm.

```bash
# 1. Clone the repo
git clone https://github.com/Shehbaz2121/Cafe-Bites.git
cd Cafe-Bites

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

Open `http://localhost:4200/` — the app reloads when you change a file.

### Other commands

```bash
npm run build   # production build -> dist/Cafe-Bites/browser
npm test        # run unit tests with Vitest
```

## 🌐 Deployment

Cafe Bites is a static single-page app (no backend), so it can be hosted for free on Netlify, Vercel, Firebase Hosting or GitHub Pages.

- **Build command:** `npm run build`
- **Publish directory:** `dist/Cafe-Bites/browser`
- **SPA routing:** configure a fallback to `index.html` so that direct links like `/food/2` don't 404 (on Netlify, add a `public/_redirects` file containing `/*  /index.html  200`)

## 🧭 Roadmap

- [ ] Persist the cart (localStorage) so it survives a page refresh
- [ ] Mobile navigation menu
- [ ] Real star ratings from each dish's `stars` value
- [ ] Favorite toggle that works on click
- [ ] Write the About page
- [ ] Checkout flow and backend/API for menu data

## 📄 License

This project is for learning and portfolio purposes.

## 👤 Author

**Shehbaz Ali** – student & web developer, Karachi, Pakistan
GitHub: [@Shehbaz2121](https://github.com/Shehbaz2121)
