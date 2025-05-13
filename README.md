# Supun Gimhana - Portfolio Website

![Portfolio Screenshot]([Screenshot 2025-05-13 194022.png](https://github.com/SUPUN-GIMHANA/portfoliyo/blob/main/Screenshot%202025-05-13%20194022.png?raw=true))

## 🌟 Introduction

Welcome to my professional portfolio website! This React-based application showcases my skills, projects, and contact information as a Computer Science and Engineering professional.

## 🚀 Features

- **Responsive Design**: Works seamlessly across all device sizes
- **Modern UI**: Clean, professional interface with animations
- **Multi-page Navigation**: 
  - Home/About section
  - Projects showcase
  - Contact form
- **Interactive Elements**:
  - Downloadable CV
  - Email copy functionality
  - Social media links
- **Project Showcase**: Detailed display of 8+ projects with descriptions

## 🛠️ Technologies Used

- **Frontend**: 
  - React.js
  - React Router
  - CSS3
- **Build Tools**:
  - Vite (or Create React App)
  - npm/yarn
- **Other**:
  - EmailJS (for contact form functionality)
  - GitHub Pages (for deployment)

## 📂 Project Structure

```
src/
├── assets/              # All images and gifs
├── components/           # React components
│   ├── About/
│   ├── Contact/
│   ├── Navbar/
│   └── Project/
├── App.js               # Main application router
└── index.js             # Entry point
```

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SUPUN-GIMHANA/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view in browser.

## 🎨 Customization

To personalize this portfolio:

1. Replace images in `src/assets/` with your own
2. Update project details in `Project.js`
3. Modify personal information in `Navbar.js` and `About.js`
4. Change color scheme in CSS files

## 📬 Contact Form Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update these values in `Contact.js`:
   ```javascript
   emailjs.sendForm(
     'your_service_id',
     'your_template_id',
     form.current,
     'your_public_key'
   )
   ```

## 🌐 Deployment

Deploy to GitHub Pages:

1. Install gh-pages:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add to package.json:
   ```json
   "homepage": "https://SUPUN-GIMHANA.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📞 Contact Me

- Email: [supung367@gmail.com](mailto:supung367@gmail.com)
- Phone: +94 773686790
- LinkedIn: [Supun Gimhana](https://www.linkedin.com/in/supun-gimhana-64392b304/)
- GitHub: [SUPUN-GIMHANA](https://github.com/SUPUN-GIMHANA)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ Feel free to star the repository if you find this project useful!

