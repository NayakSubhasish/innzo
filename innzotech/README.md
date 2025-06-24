# Innzotech Solutions - Zoho Consulting Website

A modern and professional website for a Zoho consulting and implementation company, inspired by the design of [Ciao Kombucha](https://www.ciaokombucha.com/).

## 🚀 Features

- **Modern and responsive design** - Adapted to all devices
- **Smooth animations** - Using Framer Motion for elegant transitions
- **Intuitive navigation** - Clear and accessible navigation menu
- **Complete pages**:
  - **Home** - Company presentation and main services
  - **Services** - Detailed Zoho services offered
  - **About** - Story, values, and team
  - **FAQ** - Frequently asked questions organized by categories
  - **Contact** - Contact form and company information

## 🛠️ Technologies Used

- **React 18** - Modern JavaScript framework
- **Tailwind CSS** - Utility CSS framework
- **Framer Motion** - Animations and transitions
- **Lucide React** - Modern icons
- **React Router** - Navigation between pages

## 📦 Installation

1. **Clone the project**
   ```bash
   git clone <your-repo>
   cd zoho-consulting-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Main navigation
│   └── Footer.js       # Footer
├── pages/              # Application pages
│   ├── Home.js         # Home page
│   ├── Services.js     # Services page
│   ├── About.js        # About page
│   ├── FAQ.js          # Frequently asked questions
│   └── Contact.js      # Contact page
├── App.js              # Main component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors
Colors are defined in `tailwind.config.js`:
- **Primary** : Blue (#3b82f6) - Main color
- **Secondary** : Green (#22c55e) - Secondary color
- **Accent** : Orange (#f3771e) - Accent color

### Content
Modify content in page files:
- `src/pages/Home.js` - Home page content
- `src/pages/Services.js` - Services offered
- `src/pages/About.js` - Company information
- `src/pages/FAQ.js` - Frequently asked questions
- `src/pages/Contact.js` - Contact information

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repo to Vercel
2. Vercel will automatically detect React
3. Site will be deployed automatically

### Deploy to Netlify
1. Upload the `build` folder to Netlify
2. Or connect your GitHub repo

## 📧 Contact Form

The contact form is currently simulated. To make it functional:

1. **With a form service** (recommended):
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://docs.netlify.com/forms/setup/)
   - [Zoho Forms](https://www.zoho.com/forms/)

2. **With a custom backend**:
   - Modify `handleSubmit` in `Contact.js`
   - Add your email sending logic

## 🔧 Configuration

### Environment variables
Create a `.env` file for sensitive variables:
```
REACT_APP_CONTACT_EMAIL=contact@innzotech.com
REACT_APP_PHONE=+1 (555) 123-4567
```

### Metadata
Modify metadata in `public/index.html`:
- Site title
- Description
- Keywords
- Favicon

## 📄 License

This project is under MIT license. You are free to use and modify it according to your needs.

## 🤝 Support

For any questions or support:
- Email : contact@innzotech.com
- Phone : +1 (555) 123-4567

---

**Innzotech Solutions** - Expert Zoho consulting and implementation 