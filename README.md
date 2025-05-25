# Portfolio

This is a personal portfolio built with React and Vite.

---

## 🚧 Development

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

---

## 🚀 Deploying to GitHub Pages

This project is deployed as a **GitHub Page** at: 📍 [https://rnjesuz.github.io](https://rnjesuz.github.io)

### 1. Install `gh-pages`

```bash
npm install gh-pages --save-dev
```

### 2. Set `homepage` in `package.json`

At the top level of your `package.json`, add:

```json
{
  "homepage": "https://rnjesuz.github.io"
}
```

### 3. Configure deploy scripts

In the `scripts` section of `package.json`, add:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 4. Push code to `main` branch

```bash
git add .
git commit -m "feat: this is a featu"
git push origin main
```

### 5. Deploy

```bash
npm run deploy
```

### 6. Verify

* GitHub Pages should serve from the `gh-pages` branch
* Go to **Settings > Pages** in repo
* Set source to `gh-pages` branch and root (`/`)
* Visit: [https://rnjesuz.github.io](https://rnjesuz.github.io)

---

### ✅ All set!

Portfolio is now live. 🎉
