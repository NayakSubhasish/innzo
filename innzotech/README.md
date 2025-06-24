# InnzoTech - Zoho Consulting Website

A modern, responsive website for Zoho consulting services built with React and Tailwind CSS.

## 🌐 Live Demo

Visit the live website: [https://nayaksubhasish.github.io/innzo](https://nayaksubhasish.github.io/innzo)

## ✨ Features

- **Modern Design**: Clean and professional UI with Tailwind CSS
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Multi-page Navigation**: Home, About, Services, Contact, and FAQ pages
- **Interactive Components**: Modern UI components with hover effects
- **Fast Performance**: Optimized build with React best practices

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
innzotech/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Contact.js
│   │   └── FAQ.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NayakSubhasish/innzo.git
   cd innzo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run deploy` - Deploys the app to GitHub Pages

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by modifying:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles
- Individual component files for component-specific styles

### Content
Update the content by editing the respective page components in the `src/pages/` directory.

## 🌐 Deployment

This project is automatically deployed to GitHub Pages. The deployment process:

1. Builds the production version of the app
2. Deploys to the `gh-pages` branch
3. Makes the site available at `https://nayaksubhasish.github.io/innzo`

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🔧 Configuration

### GitHub Pages Configuration

The `package.json` includes the necessary configuration for GitHub Pages:

```json
{
  "homepage": "https://nayaksubhasish.github.io/innzo",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Subhasish Nayak**
- GitHub: [@NayakSubhasish](https://github.com/NayakSubhasish)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library for React
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [GitHub Pages](https://pages.github.com/) - Static site hosting service

---

⭐ If you find this project helpful, please give it a star! 