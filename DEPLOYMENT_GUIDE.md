# 🚀 GitHub Deployment Guide
## IT4048 — Chirag Jain | Portfolio Website

---

## ✅ Pre-flight Checklist

Before pushing, make sure your folder looks like this:

```
ChiragJain_PortfolioWebsite/
 ├── index.html          ✅ (done)
 ├── css/
 │   └── style.css       ✅ (done)
 ├── js/
 │   └── main.js         ✅ (done)
 ├── images/             📁 (add your photo here if any)
 ├── resume.pdf          ⚠️  ADD THIS — your resume PDF
 ├── project_report.html ✅ (done — print to PDF)
 └── README.md           ✅ (done)
```

> ⚠️ **Drop your resume PDF** into the folder as `resume.pdf` before pushing!

---

## Step 1 — Create the GitHub Repository

1. Go to **https://github.com/new**
2. Fill in:
   - **Repository name:** `ChiragJain_PortfolioWebsite`
   - **Visibility:** ✅ Public
   - **Do NOT** check "Add README" (you already have one)
3. Click **Create repository**

---

## Step 2 — Push Your Code

Open **Command Prompt** or **Git Bash** and run these commands one by one:

```bash
cd C:\Users\CHIRAG\.gemini\antigravity\scratch\Portfolio_Website
```

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial commit: Personal Portfolio Website — IT4048"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/chiragjain017/ChiragJain_PortfolioWebsite.git
```

```bash
git push -u origin main
```

> GitHub will ask for your username and password (use a **Personal Access Token** as the password — see below if needed).

---

## Step 3 — Enable GitHub Pages

1. Go to your repo: `https://github.com/chiragjain017/ChiragJain_PortfolioWebsite`
2. Click **Settings** tab
3. Left sidebar → click **Pages**
4. Under **Build and deployment → Source** → select **Deploy from a branch**
5. Branch: **main** | Folder: **/ (root)**
6. Click **Save**

⏳ Wait **1–3 minutes**, then your live link will appear:

> 🌐 **https://chiragjain017.github.io/ChiragJain_PortfolioWebsite/**

---

## Step 4 — Save Your Project Report as PDF

1. Open [`project_report.html`](project_report.html) in **Chrome or Edge**
2. Click the **"🖨️ Save as PDF"** button (top-right)
   OR press `Ctrl + P` → Destination: **Save as PDF**
3. Settings:
   - Paper size: A4
   - Margins: Default
   - ✅ Background graphics: ON
4. Save as: **`GitHub_202503103510309_ChiragJain.pdf`**

---

## Step 5 — Add Screenshots to Report

After your site is live:
1. Open the live URL in Chrome
2. Press `F12` → Device toolbar → test Mobile view too
3. Use **Snipping Tool** (`Win + Shift + S`) to capture:
   - Home/Hero section
   - About section
   - Skills section
   - Projects section
   - Contact section
   - Mobile view (375px width)
4. Open `project_report.html` in a browser, take screenshots, paste into the PDF report

---

## Step 6 — Personal Access Token (if GitHub asks for password)

GitHub no longer accepts account passwords via command line.

1. Go to **GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)**
2. Click **Generate new token (classic)**
3. Note: `IT4048 Portfolio Push`
4. Select scope: ✅ **repo**
5. Click **Generate token** → **Copy the token**
6. Use this token as your **password** when Git prompts

---

## 📋 Final Submission Checklist

| Item | Status |
|---|---|
| GitHub Repository is **Public** | ☐ |
| All files pushed (`index.html`, `css/`, `js/`, `resume.pdf`) | ☐ |
| GitHub Pages live link works | ☐ |
| All navbar links scroll correctly | ☐ |
| Resume download button works | ☐ |
| Projects GitHub links work | ☐ |
| Contact form shows success message | ☐ |
| Site looks good on mobile | ☐ |
| Project Report PDF saved as `GitHub_202503103510309_ChiragJain.pdf` | ☐ |
| Screenshots added to report | ☐ |

---

## 📬 Submit These Items

| # | Item |
|---|---|
| 1 | GitHub Repo Link: `https://github.com/chiragjain017/ChiragJain_PortfolioWebsite` |
| 2 | Live Pages Link: `https://chiragjain017.github.io/ChiragJain_PortfolioWebsite/` |
| 3 | PDF Report: `GitHub_202503103510309_ChiragJain.pdf` |

Upload to the Drive link provided by your faculty.

---

*Good luck, Chirag! 🎉*
